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
          size: [300, 250], // Desktop size
          deviceType: "desktop",
          floor: 0.5, // Set floor price for desktop
        },
        {
          mediaType: "banner",
          size: [728, 90], // Mobile size
          deviceType: "mobile",
          floor: 0.2, // Set floor price for mobile
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
