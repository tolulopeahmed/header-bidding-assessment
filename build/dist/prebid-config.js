// prebid-config.js

// Define ad units with mock bidders for testing
// prebid-config.js

// Define ad units with mock bidders for testing
var adUnits = [
  {
    code: "ad-slot-1",
    mediaTypes: {
      banner: {
        sizes: [
          [300, 250],
          [728, 90],
        ],
      },
    },
    bids: [
      {
        bidder: "appnexus", // Prebid.js-supported adapter
        params: {
          placementId: 234234, // Real placement ID from SSP
        },
      },
      {
        bidder: "rubicon", // Prebid.js-supported adapter
        params: {
          accountId: 7780, // Real account ID from SSP
          siteId: 87184, // Real site ID from SSP
          zoneId: 413290, // Real zone ID from SSP
        },
      },
      {
        bidder: "pubmatic", // Another Prebid.js-supported adapter
        params: {
          publisherId: "32572",
          adSlot: "38519891@300x205", // Mock ad slot ID
        },
      },
      {
        bidder: "openx",
        params: {
          unit: "539439964",
          delDomain: "se-demo-d.openx.net",
          customParams: {
            key1: "v1",
            key2: ["v2", "v3"],
          },
        },
      },
    ],
  },
];

// Add the ad units to Prebid.js
pbjs.addAdUnits(adUnits);

// Set floor prices dynamically based on ad size
// Bid validation based on OpenRTB protocol
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

pbjs.requestBids({
  bidsBackHandler: function () {
    const winningBid = pbjs.getHighestCpmBids("ad-slot-1")[0];

    if (winningBid && winningBid.ad) {
      // Render the winning ad
      document.getElementById("ad-slot-1").innerHTML = winningBid.ad;
      console.log("Winning Bid:", winningBid);
    } else {
      console.log("No winning bid.");
    }
  },
});

// Handle auction end event
pbjs.onEvent("auctionEnd", function (data) {
  console.log("Auction End Data:", data); // Log auction data
  console.log(pbjs.getBidResponses()); // Log all bid responses after the auction ends
});
