// Enable debug mode
pbjs.setConfig({
  debug: true,
});

// Prebid.js Setup with multiple SSPs (Demand Partners)
var adUnits = [
  {
    code: "ad-slot-1",
    mediaTypes: {
      banner: {
        sizes: [
          [300, 250], // Desktop size (300x250)
          [728, 90], // Mobile size (728x90)
        ],
      },
    },
    bids: [
      {
        bidder: "appnexus",
        params: {
          placementId: "13144370",
        },
      },
      {
        bidder: "openx",
        params: {
          unit: "539439964",
          delDomain: "se-demo-d.openx.net",
        },
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "32572",
          adSlot: "38519891@300x250",
        },
      },
    ],
  },
];

// Add the ad units to Prebid.js
pbjs.addAdUnits(adUnits);

// Set floor prices dynamically based on ad size
pbjs.setConfig({
  floors: {
    enforcement: {
      enforceDealFloors: true,
    },
    data: {
      schema: {
        fields: ["mediaType", "size", "deviceType"],
      },
      values: [
        {
          mediaType: "banner",
          size: [300, 250],
          deviceType: "desktop",
          floor: 0.5,
        },
        {
          mediaType: "banner",
          size: [728, 90],
          deviceType: "mobile",
          floor: 0.2,
        },
      ],
    },
  },
});

// Function to handle bids and render ads only when they are in view
function handleBidsAndLazyLoadAds() {
  const adUnitCode = "ad-slot-1";
  const bidResponses = pbjs.getHighestCpmBids(adUnitCode);

  // Lazy Loading: Check if the ad unit is in the viewport
  const isInViewport = isAdUnitInViewport(adUnitCode);
  if (!isInViewport) return; // Don't load ad if not in view

  // Iterate through all bid responses to validate them
  bidResponses.forEach((bid) => {
    const floorPrice = getFloorPriceForAdUnit(bid);
    if (bid.cpm < floorPrice) {
      console.log(
        `Bid rejected due to price lower than floor. Bid CPM: ${bid.cpm}, Floor: ${floorPrice}`
      );
      return; // Skip invalid bid
    }

    // Validate the advertiser domain
    if (bid.advertiserDomains && bid.advertiserDomains.length > 0) {
      const validDomains = bid.advertiserDomains.filter((domain) =>
        isValidDomain(domain)
      );
      if (validDomains.length === 0) {
        console.log(`Bid rejected due to invalid advertiser domain. Bid:`, bid);
        return; // Skip invalid bid
      }
    }

    // Validate creative compatibility (Ensure size is supported)
    if (!isValidCreativeSize(bid)) {
      console.log(`Bid rejected due to incompatible creative size. Bid:`, bid);
      return; // Skip invalid bid
    }

    // If all checks pass, render the valid ad
    pbjs.renderAd(document, bid.adId);
  });

  // If no valid bids, show fallback ad
  if (bidResponses.length === 0) {
    console.log("No valid bids. Displaying fallback ad.");
    const adUnitElement = document.getElementById(adUnitCode);
    if (adUnitElement) {
      adUnitElement.innerHTML =
        '<a href="/"><img src="/myfundapp.gif" alt="Fallback Ad"></a>';
    } else {
      console.error(`Ad unit ${adUnitCode} not found in the DOM.`);
    }
  }
}

// Helper function to get floor price for a specific ad unit
function getFloorPriceForAdUnit(bid) {
  const floorData = pbjs.getConfig("floors").data.values.find((floor) => {
    return (
      floor.mediaType === "banner" &&
      JSON.stringify(floor.size) === JSON.stringify(bid.size)
    );
  });
  return floorData ? floorData.floor : 0;
}

// Helper function to check if the advertiser domain is valid
function isValidDomain(domain) {
  return domain && domain.includes("approved-advertiser.com");
}

// Helper function to check if the creative size is compatible
function isValidCreativeSize(bid) {
  const validSizes = [
    [300, 250],
    [728, 90],
  ]; // Define valid sizes
  return validSizes.some(
    (size) => JSON.stringify(size) === JSON.stringify(bid.size)
  );
}

// Helper function to check if the ad unit is in the viewport for lazy loading
function isAdUnitInViewport(adUnitCode) {
  const adUnitElement = document.getElementById(adUnitCode);
  if (!adUnitElement) return false;

  const rect = adUnitElement.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Initialize Intersection Observer for Lazy Loading
function initLazyLoading() {
  const adUnit = document.getElementById("ad-slot-1");
  if (!adUnit) {
    console.error("Ad unit 'ad-slot-1' not found in the DOM.");
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Load bids when the ad unit comes into view
          pbjs.requestBids({
            bidsBackHandler: handleBidsAndLazyLoadAds,
          });
          observer.unobserve(adUnit); // Stop observing once the ad is in view
        }
      });
    },
    { threshold: 0.5 }
  ); // Trigger when 50% of the ad unit is visible

  observer.observe(adUnit);
}

// Call the lazy loading initialization
initLazyLoading();

// Log metrics to Google Analytics
if (window.ga) {
  window.ga("send", "event", "HeaderBidding", "BidReceived", {
    value: bidResponses.length,
  });
  window.ga("send", "timing", "HeaderBidding", "Latency", totalLatency);
  console.log(
    `Analytics: Sent event for ${bidResponses.length} bids with latency: ${totalLatency}`
  );
}

// Handle auction end event for debugging
pbjs.onEvent("auctionEnd", function (data) {
  console.log("Auction End Data:", data); // Log auction data
  console.log(pbjs.getBidResponses()); // Log all bid responses after the auction ends
});
