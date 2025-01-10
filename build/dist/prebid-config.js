// Enable debug mode
pbjs.setConfig({
  debug: true, // Enable debug mode
});

var adUnits = [
  {
    code: "ad-slot-1", // Your ad div ID
    mediaTypes: {
      banner: {
        sizes: [[300, 250]], // Ad sizes
      },
    },
    bids: [
      {
        bidder: "appnexus",
        params: {
          placementId: "13144370", // AppNexus Test Placement ID
        },
      },
      {
        bidder: "openx",
        params: {
          unit: "539439964", // OpenX Test Unit ID
          delDomain: "se-demo-d.openx.net", // OpenX Test Domain
        },
      },
      {
        bidder: "pubmatic",
        params: {
          publisherId: "32572", // PubMatic Test Publisher ID
          adSlot: "38519891@300x250", // PubMatic Test Ad Slot
        },
      },
      {
        bidder: "criteo",
        params: {
          zoneId: "1382489", // Criteo Test Zone ID
        },
      },
      {
        bidder: "adform",
        params: {
          mid: "703", // Adform Test Master ID
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

// Request bids and handle the response
pbjs.requestBids({
  bidsBackHandler: function () {
    var adUnitCode = "div-gpt-ad-123456";
    var bidResponse = pbjs.getHighestCpmBids(adUnitCode);

    if (bidResponse.length > 0) {
      // A valid ad is available
      pbjs.renderAd(document, bidResponse[0].adId);
    } else {
      // No valid ad. Display the fallback ad
      console.log("No winning bid. Displaying fallback ad.");
      document.getElementById(adUnitCode).innerHTML =
        '<a href="/"><img src="/myfundapp.gif" alt="Fallback Ad"></a>';
    }
  },
});

// Handle auction end event for debugging
pbjs.onEvent("auctionEnd", function (data) {
  console.log("Auction End Data:", data); // Log auction data
  console.log(pbjs.getBidResponses()); // Log all bid responses after the auction ends
});
