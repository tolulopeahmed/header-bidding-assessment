(self.pbjsChunk=self.pbjsChunk||[]).push([[599],{791:(e,t,r)=>{var i=r(7873),a=r(1069),s=r(433),o=r(5789),n=r(3272),d=r(9115),c=r(1371),p=r(5901),l=r(3895),u=r(2938),m=r(2693),g=r(2621),h=r(2449),_=r(4673),f=r(554),b=r(2349),y=r(5761),v=r(9906);const k="appnexus",w="https://ib.adnxs.com/ut/v3/prebid",I="https://ib.adnxs-simple.com/ut/v3/prebid",x=["id","minduration","maxduration","skippable","playback_method","frameworks","context","skipoffset"],C=["minduration","maxduration","skip","skipafter","playbackmethod","api","startdelay","placement","plcmt"],O=["age","externalUid","external_uid","segments","gender","dnt","language"],T=["geo","device_id"],U=["enabled","dongle","member_id","debug_timeout"],E={apn_debug_dongle:"dongle",apn_debug_member_id:"member_id",apn_debug_timeout:"debug_timeout"},S={playback_method:{unknown:0,auto_play_sound_on:1,auto_play_sound_off:2,click_to_play:3,mouse_over:4,auto_play_sound_unknown:5},context:{unknown:0,pre_roll:1,mid_roll:2,post_roll:3,outstream:4,"in-banner":5,"in-feed":6,interstitial:7,accompanying_content_pre_roll:8,accompanying_content_mid_roll:9,accompanying_content_post_roll:10}},A={body:"description",body2:"desc2",cta:"ctatext",image:{serverName:"main_image",requiredParams:{required:!0}},icon:{serverName:"icon",requiredParams:{required:!0}},sponsoredBy:"sponsored_by",privacyLink:"privacy_link",salePrice:"saleprice",displayUrl:"displayurl"},j="<script",D=/\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,R="trk.js",z=(0,u.vM)({bidderCode:k}),N=new Map([[1,"Mobile/Tablet - General"],[2,"Personal Computer"],[3,"Connected TV"],[4,"Phone"],[5,"Tablet"],[6,"Connected Device"],[7,"Set Top Box"],[8,"OOH Device"]]),q={code:k,gvlid:32,aliases:b.DX,supportedMediaTypes:[c.D4,c.G_,c.s6],isBidRequestValid:function(e){return!!(e.params.placementId||e.params.placement_id||e.params.member&&(e.params.invCode||e.params.inv_code))},buildRequests:function(e,t){var r,i,s;const o=(e=(0,h.Xj)(e)).map(G),d=(0,p.I6)(e,M);let c={};!0===n.$W.getConfig("coppa")&&(c={coppa:!0}),d&&Object.keys(d.params.user).filter((e=>(0,p.mK)(O,e))).forEach((e=>{let t=(0,b.vk)(e);if("segments"===e&&(0,a.cy)(d.params.user[e])){let r=[];d.params.user[e].forEach((e=>{(0,a.Et)(e)?r.push({id:e}):(0,a.Qd)(e)&&r.push(e)})),c[t]=r}else"segments"!==e&&(c[t]=d.params.user[e])}));const l=(0,p.I6)(e,K);let u;l&&l.params&&l.params.app&&(u={},Object.keys(l.params.app).filter((e=>(0,p.mK)(T,e))).forEach((e=>u[e]=l.params.app[e])));const m=(0,p.I6)(e,V);let _;m&&m.params&&l.params.app&&l.params.app.id&&(_={appid:m.params.app.id});let k={},x={};const C=z.getCookie("apn_prebid_debug")||null;if(C)try{k=JSON.parse(C)}catch(e){(0,a.vV)("AppNexus Debug Auction Cookie Error:\n\n"+e)}else{Object.keys(E).forEach((e=>{let t=(0,a.Ez)(e);(0,a.O8)(t)&&""!==t&&(k[E[e]]=t,k.enabled=!0)})),k=(0,y.$)({member_id:"number",debug_timeout:"number"},k);const t=(0,p.I6)(e,$);t&&t.debug&&(k=t.debug)}k&&k.enabled&&Object.keys(k).filter((e=>(0,p.mK)(U,e))).forEach((e=>{x[e]=k[e]}));const S=(0,p.I6)(e,B),A=S?parseInt(S.params.member,10):0,j=e[0].schain,D=(0,p.I6)(e,W),R={tags:[...o],user:c,sdk:{source:"pbjs",version:"9.26.0-pre"},schain:j};D&&(R.iab_support={omidpn:"Appnexus",omidpv:"9.26.0-pre"}),A>0&&(R.member_id=A),l&&(R.device=u),m&&(R.app=_),null!=t&&null!==(r=t.ortb2)&&void 0!==r&&r.device&&(R.device=R.device||{},(0,a.D9)(R.device,function(e){const t={useragent:e.ua,devicetype:N.get(e.devicetype),make:e.make,model:e.model,os:e.os,os_version:e.osv,w:e.w,h:e.h,ppi:e.ppi,pxratio:e.pxratio};return Object.keys(t).reduce(((e,r)=>(t[r]&&(e[r]=t[r]),e)),{})}(t.ortb2.device)));let q=(0,a.Go)(t&&t.ortb2),P=(0,a.Go)(n.$W.getConfig("appnexusAuctionKeywords"))||{},J=(0,f.QF)(q,P);if(J.length>0&&(R.keywords=J),n.$W.getConfig("adpod.brandCategoryExclusion")&&(R.brand_category_uniqueness=!0),x.enabled&&(R.debug=x,(0,a.fH)("AppNexus Debug Auction Settings:\n\n"+JSON.stringify(x,null,4))),t&&t.gdprConsent&&(R.gdpr_consent={consent_string:t.gdprConsent.consentString,consent_required:t.gdprConsent.gdprApplies},t.gdprConsent.addtlConsent&&-1!==t.gdprConsent.addtlConsent.indexOf("~"))){let e=t.gdprConsent.addtlConsent,r=e.substring(e.indexOf("~")+1);R.gdpr_consent.addtl_consent=r.split(".").map((e=>parseInt(e,10)))}if(t&&t.uspConsent&&(R.us_privacy=t.uspConsent),null!=t&&t.gppConsent?R.privacy={gpp:t.gppConsent.gppString,gpp_sid:t.gppConsent.applicableSections}:null!=t&&null!==(i=t.ortb2)&&void 0!==i&&null!==(i=i.regs)&&void 0!==i&&i.gpp&&(R.privacy={gpp:t.ortb2.regs.gpp,gpp_sid:t.ortb2.regs.gpp_sid}),t&&t.refererInfo){let e={rd_ref:encodeURIComponent(t.refererInfo.topmostLocation),rd_top:t.refererInfo.reachedTop,rd_ifs:t.refererInfo.numIframes,rd_stk:t.refererInfo.stack.map((e=>encodeURIComponent(e))).join(",")},r=t.refererInfo.canonicalUrl;(0,a.O8)(r)&&""!==r&&(e.rd_can=r),R.referrer_detection=e}(0,p.I6)(e,L)&&e.filter(L).forEach((e=>{const t=function(e,t){const{durationRangeSec:r,requireExactDuration:i}=t.mediaTypes.video,a=function(e){const{adPodDurationSec:t,durationRangeSec:r,requireExactDuration:i}=e,a=Math.min(...r),s=Math.floor(t/a);return i?Math.max(s,r.length):s}(t.mediaTypes.video),s=Math.max(...r),o=e.filter((e=>e.uuid===t.bidId));let n=(0,b.GS)(...o,a);if(i){const e=Math.ceil(a/r.length),t=(0,v.i)(n,e);r.forEach(((e,r)=>{t[r].map((t=>{H(t,"minduration",e),H(t,"maxduration",e)}))}))}else n.map((e=>H(e,"maxduration",s)));return n}(o,e),r=R.tags.filter((t=>t.uuid!==e.bidId));R.tags=[...r,...t]}));if(e[0].userId){let t=[];e[0].userIdAsEids.forEach((e=>{!e||!e.uids||e.uids.length<1||e.uids.forEach((r=>{let i={source:e.source,id:r.id};"adserver.org"==e.source?i.rti_partner="TDID":"uidapi.com"==e.source&&(i.rti_partner="UID2"),t.push(i)}))})),t.length&&(R.eids=t)}if(null!=t&&null!==(s=t.ortb2)&&void 0!==s&&null!==(s=s.regs)&&void 0!==s&&null!==(s=s.ext)&&void 0!==s&&s.dsa){const e=t.ortb2.regs.ext.dsa,r={};if(["dsarequired","pubrender","datatopub"].forEach((t=>{(0,a.Et)(e[t])&&(r[t]=e[t])})),(0,a.cy)(e.transparency)&&e.transparency.every((e=>(0,a.Qd)(e)))){const t=[];e.transparency.forEach((e=>{(0,a.O8)(e.domain)&&""!=e.domain&&(0,a.cy)(e.dsaparams)&&e.dsaparams.every((e=>(0,a.Et)(e)))&&t.push(e)})),t.length>0&&(r.transparency=t)}(0,a.Im)(r)||(R.dsa=r)}o[0].publisher_id&&(R.publisher_id=o[0].publisher_id);const Q=function(e,t){let r=[],i={withCredentials:!0},s=w;(0,g.C)(null==t?void 0:t.gdprConsent)||(s=I);"TRUE"!==(0,a.Ez)("apn_test").toUpperCase()&&!0!==n.$W.getConfig("apn_test")||(i.customHeaders={"X-Is-Test":1});if(e.tags.length>15){const o=(0,a.Go)(e);(0,v.i)(e.tags,15).forEach((e=>{o.tags=e;const a=JSON.stringify(o);r.push({method:"POST",url:s,data:a,bidderRequest:t,options:i})}))}else{const a=JSON.stringify(e);r={method:"POST",url:s,data:a,bidderRequest:t,options:i}}return r}(R,t);return Q},interpretResponse:function(e,t){let{bidderRequest:r}=t;e=e.body;const i=[];if(!e||e.error){let t="in response for ".concat(r.bidderCode," adapter");return e&&e.error&&(t+=": ".concat(e.error)),(0,a.vV)(t),i}if(e.tags&&e.tags.forEach((e=>{const t=(n=e)&&n.ads&&n.ads.length&&(0,p.I6)(n.ads,(e=>e.rtb));var n;if(t){if((!0===m.u.get(r.bidderCode,"allowZeroCpmBids")?t.cpm>=0:t.cpm>0)&&(0,p.mK)(this.supportedMediaTypes,t.ad_type)){const n=function(e,t,r){const i=(0,a.D4)(e.uuid,[r]),n=(0,a.s0)(),d={adId:n,requestId:e.uuid,cpm:t.cpm,creativeId:t.creative_id,dealId:t.deal_id,currency:"USD",netRevenue:!0,ttl:300,adUnitCode:i.adUnitCode,appnexus:{buyerMemberId:t.buyer_member_id,dealPriority:t.deal_priority,dealCode:t.deal_code}};t.adomain&&(d.meta=Object.assign({},d.meta,{advertiserDomains:[t.adomain]}));t.advertiser_id&&(d.meta=Object.assign({},d.meta,{advertiserId:t.advertiser_id}));t.dsa&&(d.meta=Object.assign({},d.meta,{dsa:t.dsa}));function u(e){return{ver:"1.0",complete:0,nodes:[{bsid:e.buyer_member_id.toString()}]}}t.buyer_member_id&&(d.meta=Object.assign({},d.meta,{dchain:u(t)}));t.brand_id&&(d.meta=Object.assign({},d.meta,{brandId:t.brand_id}));if(t.rtb.video){Object.assign(d,{width:t.rtb.video.player_width,height:t.rtb.video.player_height,vastImpUrl:t.notify_url,ttl:3600});switch((0,s.A)(i,"mediaTypes.video.context")){case c.LM:const i=_.n[t.brand_category_id]?_.n[t.brand_category_id]:null;d.meta=Object.assign({},d.meta,{primaryCatId:i});const n=t.deal_priority;d.video={context:c.LM,durationSeconds:Math.floor(t.rtb.video.duration_ms/1e3),dealTier:n},d.vastUrl=t.rtb.video.asset_url;break;case l.H6:if(d.adResponse=e,d.adResponse.ad=d.adResponse.ads[0],d.adResponse.ad.video=d.adResponse.ad.rtb.video,d.vastXml=t.rtb.video.content,t.renderer_url){const i=(0,p.I6)(r.bids,(t=>t.bidId===e.uuid));let n=(0,s.A)(i,"mediaTypes.video.renderer.options");n||(n=(0,s.A)(i,"renderer.options")),d.renderer=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=o.A4.install({id:t.renderer_id,url:t.renderer_url,config:r,loaded:!1,adUnitCode:e});try{i.setRender(J)}catch(e){(0,a.JE)("Prebid Error calling setRender on renderer",e)}return i.setEventHandlers({impression:()=>(0,a.OG)("AppNexus outstream video impression event"),loaded:()=>(0,a.OG)("AppNexus outstream video loaded event"),ended:()=>{(0,a.OG)("AppNexus outstream renderer video event"),document.querySelector("#".concat(e)).style.display="none"}}),i}(d.adUnitCode,t,n)}break;case l.mn:d.vastUrl=t.notify_url+"&redir="+encodeURIComponent(t.rtb.video.asset_url)}}else if(t.rtb[c.s6]){const e=t.rtb[c.s6];let r;if(function(e){if(!e||""===e)return!1;let t=e.match(D),r=null!=t&&t.length>=1,i=e.match(R),a=null!=i&&i.length>=1;return e.startsWith(j)&&a&&r}(t.viewability.config)){let e="pbjs_adid="+n+";pbjs_auc="+i.adUnitCode;r=t.viewability.config.replace("dom_id=%native_dom_id%",e)}let s=e.javascript_trackers;null==s?s=r:(0,a.O8)(s)?s=[s,r]:s.push(r),d[c.s6]={title:e.title,body:e.desc,body2:e.desc2,cta:e.ctatext,rating:e.rating,sponsoredBy:e.sponsored,privacyLink:e.privacy_link,address:e.address,downloads:e.downloads,likes:e.likes,phone:e.phone,price:e.price,salePrice:e.saleprice,clickUrl:e.link.url,displayUrl:e.displayurl,clickTrackers:e.link.click_trackers,impressionTrackers:e.impression_trackers,video:e.video,javascriptTrackers:s},e.main_img&&(d[c.s6].image={url:e.main_img.url,height:e.main_img.height,width:e.main_img.width}),e.icon&&(d[c.s6].icon={url:e.icon.url,height:e.icon.height,width:e.icon.width}),d[c.s6].ext={video:e.video,customImage1:e.image1&&{url:e.image1.url,height:e.image1.height,width:e.image1.width},customImage2:e.image2&&{url:e.image2.url,height:e.image2.height,width:e.image2.width},customImage3:e.image3&&{url:e.image3.url,height:e.image3.height,width:e.image3.width},customImage4:e.image4&&{url:e.image4.url,height:e.image4.height,width:e.image4.width},customImage5:e.image5&&{url:e.image5.url,height:e.image5.height,width:e.image5.width},customIcon1:e.icon1&&{url:e.icon1.url,height:e.icon1.height,width:e.icon1.width},customIcon2:e.icon2&&{url:e.icon2.url,height:e.icon2.height,width:e.icon2.width},customIcon3:e.icon3&&{url:e.icon3.url,height:e.icon3.height,width:e.icon3.width},customIcon4:e.icon4&&{url:e.icon4.url,height:e.icon4.height,width:e.icon4.width},customIcon5:e.icon5&&{url:e.icon5.url,height:e.icon5.height,width:e.icon5.width},customSocialIcon1:e.socialicon1&&{url:e.socialicon1.url,height:e.socialicon1.height,width:e.socialicon1.width},customSocialIcon2:e.socialicon2&&{url:e.socialicon2.url,height:e.socialicon2.height,width:e.socialicon2.width},customSocialIcon3:e.socialicon3&&{url:e.socialicon3.url,height:e.socialicon3.height,width:e.socialicon3.width},customSocialIcon4:e.socialicon4&&{url:e.socialicon4.url,height:e.socialicon4.height,width:e.socialicon4.width},customSocialIcon5:e.socialicon5&&{url:e.socialicon5.url,height:e.socialicon5.height,width:e.socialicon5.width},customTitle1:e.title1,customTitle2:e.title2,customTitle3:e.title3,customTitle4:e.title4,customTitle5:e.title5,customBody1:e.body1,customBody2:e.body2,customBody3:e.body3,customBody4:e.body4,customBody5:e.body5,customCta1:e.ctatext1,customCta2:e.ctatext2,customCta3:e.ctatext3,customCta4:e.ctatext4,customCta5:e.ctatext5,customDisplayUrl1:e.displayurl1,customDisplayUrl2:e.displayurl2,customDisplayUrl3:e.displayurl3,customDisplayUrl4:e.displayurl4,customDisplayUrl5:e.displayurl5,customSocialUrl1:e.socialurl1,customSocialUrl2:e.socialurl2,customSocialUrl3:e.socialurl3,customSocialUrl4:e.socialurl4,customSocialUrl5:e.socialurl5}}else{Object.assign(d,{width:t.rtb.banner.width,height:t.rtb.banner.height,ad:t.rtb.banner.content});try{if(t.rtb.trackers)for(let e=0;e<t.rtb.trackers[0].impression_urls.length;e++){const r=t.rtb.trackers[0].impression_urls[e],i=(0,a.Tz)(r);d.ad+=i}}catch(e){(0,a.vV)("Error appending tracking pixel",e)}}return d}(e,t,r);n.mediaType=function(e){const t=e.ad_type;return t===c.G_?c.G_:t===c.s6?c.s6:c.D4}(t),i.push(n)}}})),e.debug&&e.debug.debug_info){let t="AppNexus Debug Auction for Prebid\n\n"+e.debug.debug_info;t=t.replace(/(<td>|<th>)/gm,"\t").replace(/(<\/td>|<\/th>)/gm,"\n").replace(/^<br>/gm,"").replace(/(<br>\n|<br>)/gm,"\n").replace(/<h1>(.*)<\/h1>/gm,"\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm,"\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim,""),(0,a.OG)("https://console.appnexus.com/docs/understanding-the-debug-auction"),(0,a.OG)(t)}return i},getUserSyncs:function(e,t,r,i,a){if(e.iframeEnabled&&(0,g.C)(r))return[{type:"iframe",url:"https://acdn.adnxs.com/dmp/async_usersync.html"}];if(e.pixelEnabled){return["https://px.ads.linkedin.com/setuid?partner=appNexus"].map((e=>({type:"image",url:e})))}}};function G(e){var t;const r={};Object.keys(e.params).forEach((t=>{let r=(0,b.vk)(t);r!==t&&(e.params[r]=e.params[t],delete e.params[t])})),r.sizes=P(e.sizes),r.primary_size=r.sizes[0],r.ad_types=[],r.uuid=e.bidId,e.params.placement_id?r.id=parseInt(e.params.placement_id,10):r.code=e.params.inv_code;const i=(0,a.Ez)("ast_override_div");if((0,a.O8)(i)&&""!==i){const t=decodeURIComponent(i).split(",").find((t=>t.startsWith("".concat(e.adUnitCode,":"))));if(t){const e=t.split(":")[1];e&&(r.force_creative_id=parseInt(e,10))}}r.allow_smaller_sizes=e.params.allow_smaller_sizes||!1,r.use_pmt_rule="boolean"==typeof e.params.use_payment_rule?e.params.use_payment_rule:"boolean"==typeof e.params.use_pmt_rule&&e.params.use_pmt_rule,r.prebid=!0,r.disable_psa=!0;let o=function(e){if(!(0,a.fp)(e.getFloor))return e.params.reserve?e.params.reserve:null;let t=e.getFloor({currency:"USD",mediaType:"*",size:"*"});if((0,a.Qd)(t)&&!isNaN(t.floor)&&"USD"===t.currency)return t.floor;return null}(e);if(o&&(r.reserve=o),e.params.position)r.position={above:1,below:2}[e.params.position]||0;else{let t=(0,s.A)(e,"mediaTypes.banner.pos")||(0,s.A)(e,"mediaTypes.video.pos");0!==t&&1!==t&&3!==t||(r.position=3===t?2:t)}e.params.traffic_source_code&&(r.traffic_source_code=e.params.traffic_source_code),e.params.private_sizes&&(r.private_sizes=P(e.params.private_sizes)),e.params.supply_type&&(r.supply_type=e.params.supply_type),e.params.pub_click&&(r.pubclick=e.params.pub_click),e.params.ext_inv_code&&(r.ext_inv_code=e.params.ext_inv_code),e.params.publisher_id&&(r.publisher_id=parseInt(e.params.publisher_id,10)),e.params.external_imp_id&&(r.external_imp_id=e.params.external_imp_id);const n=(0,f.T_)((0,f.gg)((0,s.A)(e,"ortb2Imp.ext.data.keywords")),null===(t=e.params)||void 0===t?void 0:t.keywords);n.length>0&&(r.keywords=n);let d=(0,s.A)(e,"ortb2Imp.ext.gpid")||(0,s.A)(e,"ortb2Imp.ext.data.pbadslot");if(d&&(r.gpid=d),(e.mediaType===c.s6||(0,s.A)(e,"mediaTypes.".concat(c.s6)))&&(r.ad_types.push(c.s6),0===r.sizes.length&&(r.sizes=P([1,1])),e.nativeParams)){const t=function(e){const t={};return Object.keys(e).forEach((r=>{const i=A[r]&&A[r].serverName||A[r]||r,s=A[r]&&A[r].requiredParams;t[i]=Object.assign({},s,e[r]);if(!(i!==A.image.serverName&&i!==A.icon.serverName)&&t[i].sizes){let e=t[i].sizes;((0,a.Uu)(e)||(0,a.cy)(e)&&e.length>0&&e.every((e=>(0,a.Uu)(e))))&&(t[i].sizes=P(t[i].sizes))}i===A.privacyLink&&(t.privacy_supported=!0)})),t}(e.nativeParams);r[c.s6]={layouts:[t]}}{const t=(0,s.A)(e,"mediaTypes.".concat(c.G_)),i=(0,s.A)(e,"mediaTypes.video.context");r.hb_source=t&&"adpod"===i?7:1,(e.mediaType===c.G_||t)&&r.ad_types.push(c.G_),(e.mediaType===c.G_||t&&"outstream"!==i)&&(r.require_asset_url=!0),e.params.video&&(r.video={},Object.keys(e.params.video).filter((e=>(0,p.mK)(x,e))).forEach((t=>{switch(t){case"context":case"playback_method":let i=e.params.video[t];i=(0,a.cy)(i)?i[0]:i,r.video[t]=S[t][i];break;case"frameworks":break;default:r.video[t]=e.params.video[t]}})),e.params.video.frameworks&&(0,a.cy)(e.params.video.frameworks)&&(r.video_frameworks=e.params.video.frameworks)),t&&(r.video=r.video||{},Object.keys(t).filter((e=>(0,p.mK)(C,e))).forEach((e=>{switch(e){case"minduration":case"maxduration":"number"!=typeof r.video[e]&&(r.video[e]=t[e]);break;case"skip":"boolean"!=typeof r.video.skippable&&(r.video.skippable=1===t[e]);break;case"skipafter":"number"!=typeof r.video.skipoffset&&(r.video.skippoffset=t[e]);break;case"playbackmethod":if("number"!=typeof r.video.playback_method){let i=t[e];i=(0,a.cy)(i)?i[0]:i,i>=1&&i<=4&&(r.video.playback_method=i)}break;case"api":if(!r.video_frameworks&&(0,a.cy)(t[e])){let i=t[e].map((e=>{let t=4===e?5:5===e?4:e;if(t>=1&&t<=5)return t})).filter((e=>e));r.video_frameworks=i}break;case"startdelay":case"plcmt":case"placement":if("number"!=typeof r.video.context){const e=t.plcmt,i=t.placement,a=t.startdelay,s=function(e,t){if(!e)return;if(2===e){if(void 0===t)return;if(0===t)return"accompanying_content_pre_roll";if(-1===t)return"accompanying_content_mid_roll";if(-2===t)return"accompanying_content_post_roll"}else{if(3===e)return"interstitial";if(4===e)return"outstream"}}(e,a)||function(e){if(!e)return;if(2===e)return"in-banner";if(3===e)return"outstream";if(4===e)return"in-feed";if(5===e)return"intersitial"}(i)||function(e){if(!e)return;if(0===e)return"pre_roll";if(-1===e)return"mid_roll";if(-2===e)return"post_roll"}(a);r.video.context=S.context[s]}}}))),e.renderer&&(r.video=Object.assign({},r.video,{custom_renderer_present:!0}))}return e.params.frameworks&&(0,a.cy)(e.params.frameworks)&&(r.banner_frameworks=e.params.frameworks),(0,s.A)(e,"mediaTypes.".concat(c.D4))&&r.ad_types.push(c.D4),0===r.ad_types.length&&delete r.ad_types,r}function P(e){let t=[],r={};if((0,a.cy)(e)&&2===e.length&&!(0,a.cy)(e[0]))r.width=parseInt(e[0],10),r.height=parseInt(e[1],10),t.push(r);else if("object"==typeof e)for(let i=0;i<e.length;i++){let a=e[i];r={},r.width=parseInt(a[0],10),r.height=parseInt(a[1],10),t.push(r)}return t}function M(e){return!!e.params.user}function B(e){return!!parseInt(e.params.member,10)}function K(e){if(e.params)return!!e.params.app}function V(e){return e.params&&e.params.app?!!e.params.app.id:!!e.params.app}function $(e){return!!e.debug}function L(e){return e.mediaTypes&&e.mediaTypes.video&&e.mediaTypes.video.context===c.LM}function W(e){let t=!1;const r=e.params,i=e.params.video;return r.frameworks&&(0,a.cy)(r.frameworks)&&(t=(0,p.mK)(e.params.frameworks,6)),!t&&i&&i.frameworks&&(0,a.cy)(i.frameworks)&&(t=(0,p.mK)(e.params.video.frameworks,6)),t}function H(e,t,r){(0,a.Im)(e.video)&&(e.video={}),e.video[t]=r}function J(e,t){!function(e){try{const t=document.getElementById(e).querySelectorAll("div[id^='google_ads']");t[0]&&t[0].style.setProperty("display","none")}catch(e){}}(e.adUnitCode),function(e){try{const t=document.getElementById(e).querySelectorAll("script[id^='sas_script']");t[0].nextSibling&&"iframe"===t[0].nextSibling.localName&&t[0].nextSibling.style.setProperty("display","none")}catch(e){}}(e.adUnitCode),e.renderer.push((()=>{((null==t?void 0:t.defaultView)||window).ANOutstreamVideo.renderAd({tagId:e.adResponse.tag_id,sizes:[e.getSize().split("x")],targetId:e.adUnitCode,uuid:e.adResponse.uuid,adResponse:e.adResponse,rendererOptions:e.renderer.getConfig()},Q.bind(null,e))}))}function Q(e,t,r){e.renderer.handleVideoEvent({id:t,eventName:r})}(0,d.a$)(q),(0,i.E)("appnexusBidAdapter")}},e=>{e.O(0,[802,247,444,126,982,698,85],(()=>{return t=791,e(e.s=t);var t}));e.O()}]);