var ipIfoResponse = {
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
};

CampID = [];
var QualzzJQuery;
var brandingtext;
var brandingURL;
var gloabalImageAPI = "https://dev.qualzz.com/images";
var gloabalAddressAPI = "https://dev.qualzz.com/api";
var serverPointTo = "https://dev.qualzz.com";

var imported = document.createElement("script");
imported.src =
  "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";

var visitorjs = document.createElement("script");
visitorjs.src =  serverPointTo + "/assets/trackingScript/visitor.js";


// pushnotification script adding
var importedPopupScript = document.createElement("script");
importedPopupScript.src = "https://dev.qualzz.com/notifications/assets/js/tracking.js";

var link = document.createElement("link");
link.setAttribute(
  "href",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
);
link.setAttribute("rel", "stylesheet");

var bargerstyle = document.createElement("link");
bargerstyle.setAttribute(
  "href",
  "https://fonts.googleapis.com/css?family=Bangers"
);
bargerstyle.setAttribute("rel", "stylesheet");

var arvostyle = document.createElement("link");
arvostyle.setAttribute("href", "https://fonts.googleapis.com/css?family=Arvo");
arvostyle.setAttribute("rel", "stylesheet");

var abrilfatfacestyle = document.createElement("link");
abrilfatfacestyle.setAttribute(
  "href",
  "https://fonts.googleapis.com/css?family=Abril+Fatface"
);
abrilfatfacestyle.setAttribute("rel", "stylesheet");

var tangerinestyle = document.createElement("link");
tangerinestyle.setAttribute(
  "href",
  "https://fonts.googleapis.com/css?family=Tangerine"
);
tangerinestyle.setAttribute("rel", "stylesheet");

var oldstandard = document.createElement("link");
oldstandard.setAttribute(
  "href",
  "https://fonts.googleapis.com/css?family=Old+Standard+TT"
);
oldstandard.setAttribute("rel", "stylesheet");

var Josefin = document.createElement("link");
Josefin.setAttribute(
  "href",
  "https://fonts.googleapis.com/css?family=Josefin+Slab"
);
Josefin.setAttribute("rel", "stylesheet");

var bitter = document.createElement("link");
bitter.setAttribute("href", "https://fonts.googleapis.com/css?family=Bitter");
bitter.setAttribute("rel", "stylesheet");

var robo = document.createElement("link");
robo.setAttribute(
  "href",
  "https://fonts.googleapis.com/css?family=Roboto:400,700"
);
robo.setAttribute("rel", "stylesheet");

var sacromento = document.createElement("link");
sacromento.setAttribute(
  "href",
  "https://fonts.googleapis.com/css?family=Sacramento"
);
sacromento.setAttribute("rel", "stylesheet");

var sans = document.createElement("link");
sans.setAttribute("href", "https://fonts.googleapis.com/css?family=Open+Sans");
sans.setAttribute("rel", "stylesheet");
var cour = document.createElement("link");
cour.setAttribute("href", "https://fonts.googleapis.com/css?family=Courgette");
cour.setAttribute("rel", "stylesheet");
var butterfly = document.createElement("link");
butterfly.setAttribute(
  "href",
  "https://fonts.googleapis.com/css?family=Butterfly+Kids"
);
butterfly.setAttribute("rel", "stylesheet");

var rock = document.createElement("link");
rock.setAttribute("href", "https://fonts.googleapis.com/css?family=Rock+Salt");
rock.setAttribute("rel", "stylesheet");

// var raleway=document.createElement('link');
// raleway.setAttribute('href', 'https://fonts.googleapis.com/css?family=raleway+Kids');
// raleway.setAttribute('rel',"stylesheet");

// imported.onreadystatechange = handler;
imported.onload = handler;
visitorjs.onload = visitorscriptload;
importedPopupScript.onload = showaddedpopupjs;

 function showaddedpopupjs(){
console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>push notification script loaded")
 }

document.head.appendChild(visitorjs);
document.head.appendChild(importedPopupScript);

document.head.appendChild(imported);
document.head.appendChild(link);
document.head.appendChild(bargerstyle);
document.head.appendChild(arvostyle);
document.head.appendChild(abrilfatfacestyle);
document.head.appendChild(tangerinestyle);
document.head.appendChild(oldstandard);
document.head.appendChild(Josefin);
document.head.appendChild(bitter);
document.head.appendChild(robo);
document.head.appendChild(sacromento);
document.head.appendChild(sans);
document.head.appendChild(cour);
document.head.appendChild(butterfly);
document.head.appendChild(rock);
// document.head.appendChild(raleway);

// ////////////////////////////////// below bloc just to calculate information from client website////////////////////////////////////////
// window.visitor_loaded = function () {
//   // console.log(">>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<2st");
//   let vistorInfo = visitor;
//    this.console.log("rohit" + vistorInfo);
//   ipIfoResponse["language"] = vistorInfo.locale.lang;
//   ipIfoResponse["locale"] =
//     vistorInfo.locale.country + "(" + vistorInfo.locale.lang + ")";
//   ipIfoResponse["referrer"] = vistorInfo.cur_session.referrer;
//   ipIfoResponse["url"] = vistorInfo.cur_session.url;
//   ipIfoResponse["path"] = vistorInfo.cur_session.path;
//   ipIfoResponse["start_time"] = vistorInfo.cur_session.start.toString();
//   ipIfoResponse["browser"] = getBrowserName();
//   ipIfoResponse["version"] = vistorInfo.browser.version.toString();
//   ipIfoResponse["os"] = vistorInfo.browser.OS;
//   ipIfoResponse["width"] = vistorInfo.device.screen.width.toString();
//   ipIfoResponse["height"] = vistorInfo.device.screen.height.toString();
//   ipIfoResponse["is_phone"] = vistorInfo.device.is_phone.toString();
//   ipIfoResponse["is_tablet"] = vistorInfo.device.is_tablet.toString();
//   ipIfoResponse["is_mobile"] = vistorInfo.device.is_mobile.toString();
//   // console.log(ipIfoResponse);
//   localStorage.setItem("ipIfoResponse", JSON.stringify(ipIfoResponse));
// };

// window.visitor_opts = { enable_location: true, session_days: 5 };
///////////////////////////////////////////////////////////////////////////////////
var scriptElement;
var websiteId;
var obj;

if (websiteId == undefined) {
  // console.log("in web undefined", websiteId);
  var websiteURL = window.location.href;
  var str = websiteURL[websiteURL.length - 1];
  if (str == "/") {
    websiteURL = websiteURL.slice("/", -1);
  }

  obj = {
    websiteId: null,
    websiteURL: websiteURL,
  };
} else {
  scriptElement = websiteId;
  obj = {
    websiteId: scriptElement,
    websiteURL: null,
  };
}

function getBrowserName() {
  if (
    navigator.userAgent.indexOf("Edge") > -1 &&
    navigator.appVersion.indexOf("Edge") > -1
  ) {
    return "edge";
  } else if (
    navigator.userAgent.indexOf("Opera") != -1 ||
    navigator.userAgent.indexOf("OPR") != -1
  ) {
    return "opera";
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    return "chrome";
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    return "safari";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    return "firefox";
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    //IF IE > 10
    return "ie";
  } else {
    return "unknown";
  }
}



function handler() {
  QualzzJQuery = jQuery.noConflict(true);
  var json;
  var widgetdata;
  QualzzJQuery.ajax({
    url: gloabalAddressAPI + "/user/campaign/getAllByWebsite",
    type: "GET",
    data: obj,
    contentType: "application/json",
    success: function (result) {
      var noOfCampaigns = result.data.length;
      for (var n = 0; n < result.data.length; n++) {
        widgetdata = result.data[n];
        var jsonLoop = JSON.parse(widgetdata.campaignJson);
        if (widgetdata.show == true) {
          if (
            widgetdata.targetVisitors.allBrowser ||
            widgetdata.targetVisitors.browserObject == null
          ) {
            ShowAndHidePopupBasedontrafficSource(widgetdata);
          } else {
            let browserObject = JSON.parse(
              widgetdata.targetVisitors.browserObject
            );
            if (browserObject.chrome == true && getBrowserName() == "chrome") {
              ShowAndHidePopupBasedontrafficSource(widgetdata);
            } else if (browserObject.ie == true && getBrowserName() == "ie") {
              ShowAndHidePopupBasedontrafficSource(widgetdata);
            } else if (
              browserObject.edge == true &&
              getBrowserName() == "edge"
            ) {
              ShowAndHidePopupBasedontrafficSource(widgetdata);
            } else if (
              browserObject.safari == true &&
              getBrowserName() == "safari"
            ) {
              ShowAndHidePopupBasedontrafficSource(widgetdata);
            } else if (
              browserObject.firefox == true &&
              getBrowserName() == "firefox"
            ) {
              ShowAndHidePopupBasedontrafficSource(widgetdata);
            } else if (
              browserObject.opera == true &&
              getBrowserName() == "opera"
            ) {
              ShowAndHidePopupBasedontrafficSource(widgetdata);
            }
          }
        }
      }
    },
  });
}

// }
//first do the processing of target visitors
var hideLocation;
var hideListLen;
var showListLen;
var hideLocationCity;
var showLocation;
var hideLocationCountry;
var showLocationCity;
var showForCityList;
var showLocationCountry;
var isCountryHide;
var hideForCountryList;
var showForCountryList;
var showForCityList;
var TargetVisitor;
var userCountry;
var userCity;
var cnt = 0;
var trafficSourceConditionPassedList =[];
function ShowAndHidePopupBasedontrafficSource(widgetdata){

let traffic_source = [];
let current_url = (window.location.href).toLowerCase();
  if(widgetdata.targetVisitors.traffic_source != null && widgetdata.targetVisitors.traffic_source !=  "" && widgetdata.targetVisitors.traffic_source !=  "[]"){

    var referer = document.referrer;
    traffic_source = JSON.parse(widgetdata.targetVisitors.traffic_source);
    if(traffic_source.includes("organic_search")){
      QualzzJQuery.getJSON( serverPointTo + "/assets/trackingScript/organic.json", function( data ) {
        console.log(data);
        if(data){
       if(data.indexOf(referer) >= 0){
        ShowAndHidePopUpInCountry(widgetdata)
        }else if(referer.search("https://r.search.yahoo.com/")>=0){
          ShowAndHidePopUpInCountry(widgetdata)
        }
        }
      })
    } if(traffic_source.includes("social")){
      QualzzJQuery.getJSON( serverPointTo + "/assets/trackingScript/social.json", function( data ) {
        console.log(data);
        if(data){
       if(data.indexOf(referer) >= 0){
        ShowAndHidePopUpInCountry(widgetdata)
        }
        }
      })

    }
     if(traffic_source.includes("direct")){
      if(referer == "" || referer == null){
        ShowAndHidePopUpInCountry(widgetdata);
      }
    }
    else if(traffic_source.includes("paid_search")){
       if( (current_url.search("qpa")) >= 0 ||(current_url.search("gclid")) >= 0 || (current_url.search("fbclid")) >= 0){
         ShowAndHidePopUpInCountry(widgetdata)
       }

    }
     if(traffic_source.includes("others") && widgetdata.targetVisitors.custom_traffic_source.length > 0){
     if(checkTrafficSourceOtherCondition(widgetdata.targetVisitors.custom_traffic_source,referer)){
      ShowAndHidePopUpInCountry(widgetdata);
     }
    }
  }else{
    ShowAndHidePopUpInCountry(widgetdata);
  }

}

function checkTrafficSourceOtherCondition(data,ref){
  for(let i=0;i<=data.length-1;i++){
let d = data[i];
if(d.condition == "equal_to" && ref == (d.url).toLowerCase()){
  return true;
  }
  else if(d.condition == "not_equal_to" && ref != (d.url).toLowerCase()){
    return true;
  }
  else if(d.condition == "Contains" && ref.search((d.url).toLowerCase()) >=0 ){
    return true;
  }
  else if(d.condition == "not_contains" && ref.search((d.url).toLowerCase()) < 0){
   return true;
  }
  else if(d.condition == "start_with"  && ref.startsWith((d.url).toLowerCase())){
    return true;
  }
  else if(d.condition == "not_start_with"  && !ref.startsWith((d.url).toLowerCase())){
    return true;
  }
  else if(d.condition == "end_with" &&  ((ref.length-d.url.length)  ==  ref.lastIndexOf((d.url)))){
    return true;
  }
  else if(d.condition == "not_ends_with" && !ref.lastIndexOf((d.url))){
    return true;
  }
  else if(d.condition == "matches" && ref.match(d.url)){
    return true;
  }
  else if(d.condition == "not_match"&& !ref.match(d.url)){
    return true;
  }

  }
  return false;
  // wp rocket W3 Total CacheWP Super Cache  Sucuri Firewall SG SuperCacher
}

function ShowAndHidePopUpInCountry(widgetdata) {
  if(!trafficSourceConditionPassedList.includes(widgetdata.campaignid)){
    trafficSourceConditionPassedList.push(widgetdata.campaignid)
    if (widgetdata.targetVisitors.hideForLoc != null) {
      var hideForLocationLength = widgetdata.targetVisitors.hideForLoc.length;
    }
    if (widgetdata.targetVisitors.targetByLoc != null) {
      var showForCountryLength = widgetdata.targetVisitors.targetByLoc.length;
    }
    hideForCountryList = widgetdata.targetVisitors.hideForLoc;
    showForCountryList = widgetdata.targetVisitors.targetByLoc;
    showForCityList = widgetdata.targetVisitors.targetByLoc;
    TargetVisitor = widgetdata.targetVisitors.displayTo;
    if (hideForLocationLength == 0 && showForCountryLength == 0) {
      showAgain(widgetdata);
    }
    if (hideForLocationLength == undefined && showForCountryLength == undefined) {
      showAgain(widgetdata);
    }

    if (hideForCountryList != null || showForCountryList != null) {
      hideLocation = [];
      hideListLen = hideForCountryList.length;
      showListLen = showForCountryList.length;
      hideLocationCity = [];
      showLocation = [];
      hideLocationCountry = [];
      showLocationCity = [];
      showForCityList = [];
      showLocationCountry = [];
      isCountryHide = false;
      hideForCountryList = widgetdata.targetVisitors.hideForLoc;
      showForCountryList = widgetdata.targetVisitors.targetByLoc;
      showForCityList = widgetdata.targetVisitors.targetByLoc;
      TargetVisitor = widgetdata.targetVisitors.displayTo;
      userCountry;

      QualzzJQuery.get(
        "https://ipinfo.io",
        function (response) {
          ipIfoResponse["ip"] = response.ip;
          ipIfoResponse["city"] = response.city;
          ipIfoResponse["region"] = response.region;
          ipIfoResponse["country"] = response.country;
          ipIfoResponse["loc"] = response.loc.toString();
          ipIfoResponse["org"] = response.org;
          ipIfoResponse["postal"] = response.postal.toString();
          ipIfoResponse["timezone"] = response.timezone;
          userCountry = response.country;
          userCity = response.city;
          CheckforCountryAndCity(widgetdata);
          localStorage.setItem("ipIfoResponse", JSON.stringify(ipIfoResponse));
        },
        "jsonp"
      );
    }
  }else{
    return false;
  }
}
function CheckforCountryAndCity(widgetdata) {
  var isCityHide = false;
  if (showListLen > 0) {
    for (var i = 0; i < showListLen; i++) {
      showLocationCity.push(showForCountryList[i].targetByLocCity);
    }
    for (var i = 0; i < showListLen; i++) {
      showLocationCountry.push(showForCountryList[i].targetByLocCountry);
    }
  }
  var countryindex = showLocationCountry.indexOf(userCountry);
  var cityindex = showLocationCity.indexOf(userCity);
  if (cityindex != -1) {
    isCityShow = false;
  } else {
    isCityShow = true;
  }
  if (countryindex != -1) {
    isCountryShow = false;
  } else {
    isCountryShow = true;
  }
  if (showLocationCity[0] == null) {
    var hideListLen = hideForCountryList.length;
    if (hideListLen > 0) {
      for (var i = 0; i < hideListLen; i++) {
        hideLocationCity.push(hideForCountryList[i].hideForLocCity);
      }
      for (var i = 0; i < hideListLen; i++) {
        hideLocationCountry.push(hideForCountryList[i].hideForLocCountry);
      }
      var countryindex = hideLocationCountry.indexOf(userCountry);
      var cityindexhide = hideLocationCity.indexOf(userCity);
      if (cityindexhide != -1) {
        isCityShow = true;
      } else {
        isCityShow = false;
      }
    } else {
      isCityShow = false;
    }
  }
  if (isCityShow == false && isCountryShow == false) {
    showAgain(widgetdata);
  }
}

function showAgain(json) {
  var showAgainWhen = json.displayWhen.showAgain;
  if (showAgainWhen != null) {
    var previouspopupshowndate = "previouspopupshowndate" + json.campaignid;
    if (showAgainWhen == "everysession") {
      stopShowing(json);
    } else {
      var showAgainCount = json.displayWhen.stopShowingTime;
      var showAgainDuration = json.displayWhen.sinceDuration;
      if (showAgainDuration == "hours") {
        var currentdate = new Date();
        var currenttime = currentdate.getTime();
        var previousPopUpShownTime = localStorage.getItem(
          previouspopupshowndate
        );
        if (previousPopUpShownTime != null) {
          var diff = (previousPopUpShownTime - currenttime) / 1000;
          diff /= 60 * 60;
          var timeinhours = Math.abs(Math.round(diff));
          if (timeinhours >= showAgainCount) {
            var date = new Date();
            var time = date.getTime();
            localStorage.setItem(previouspopupshowndate, time);
            //showHowToUser(json);
            stopShowing(json);
          }
        } else {
          var date = new Date();
          var time = date.getTime();
          localStorage.setItem(previouspopupshowndate, time);
          stopShowing(json);
        }
      } else if (showAgainDuration == "days") {
        var currentdate = new Date();
        var currenttime = currentdate.getTime();
        var previousPopUpShownTime = localStorage.getItem(
          previouspopupshowndate
        );
        if (previousPopUpShownTime != null) {
          var diff = (previousPopUpShownTime - currenttime) / 1000;
          diff /= 60 * 60 * 24;
          var timeindays = Math.abs(Math.round(diff));
          if (timeindays >= showAgainCount) {
            var date = new Date();
            var time = date.getTime();
            localStorage.setItem(previouspopupshowndate, time);
            stopShowing(json);
          }
        } else {
          var date = new Date();
          var time = date.getTime();
          localStorage.setItem(previouspopupshowndate, time);
          stopShowing(json);
        }
      } else if (showAgainDuration == "months") {
        var currentdate = new Date();
        var currenttime = currentdate.getTime();
        var previousPopUpShownTime = localStorage.getItem(
          previouspopupshowndate
        );
        if (previousPopUpShownTime != null) {
          var diff = (previousPopUpShownTime - currenttime) / 1000;
          diff /= 60 * 60 * 24 * 30;
          var timeinmonth = Math.abs(Math.round(diff));
          if (timeinmonth >= showAgainCount) {
            var date = new Date();
            var time = date.getTime();
            localStorage.setItem(previouspopupshowndate, time);
            stopShowing(json);
          }
        } else {
          var date = new Date();
          var time = date.getTime();
          localStorage.setItem(previouspopupshowndate, time);
          stopShowing(json);
        }
      } else {
        var date = new Date();
        var time = date.getTime();
        localStorage.setItem(previouspopupshowndate, time);
        stopShowing(json);
      }
    }
  } else {
    stopShowing(json);
  }
}

function stopShowing(json) {
  var stopShowingWhen = json.displayWhen.stopShowing;
  var presentCountOfPopupView = "presentCountOfPopupView" + json.campaignid;
  if (stopShowingWhen != null) {
    if (stopShowingWhen == "neverstopShowing") {
      inlineDivCheck(json);
    } else {
      var stopAfterShowingNumberOfTimes = json.displayWhen.stopShowingAfterTime;
      var presentCount = localStorage.getItem(presentCountOfPopupView);
      if (presentCount != null) {
        if (presentCount < stopAfterShowingNumberOfTimes) {
          presentCount = ++presentCount;
          localStorage.setItem(presentCountOfPopupView, presentCount);
          inlineDivCheck(json);
        } else {
        }
      } else {
        localStorage.setItem(presentCountOfPopupView, 1);
        inlineDivCheck(json);
      }
    }
  } else {
    //();
    inlineDivCheck(json);
  }
}
function inlineDivCheck(json) {
  console.log(QualzzJQuery("#QZ-" + json.campaignid));
if(json.sizeName == "Inline" && QualzzJQuery("#QZ-" + json.campaignid).length){
  displayToVisitor(json);
}else if(json.sizeName != "Inline"){
  displayToVisitor(json);
}
}
function displayToVisitor(json){
  var displaytotargetVisitor = json.targetVisitors.displayTo;
  var CheckIfVisitorExistOrNot = "userExist" + json.campaignid;
  var TimeAccessed = "timeaccessed" + json.campaignid;
  if (displaytotargetVisitor == "AllVisitors") {
    showHowToUser(json);
  } else if (displaytotargetVisitor == "TargetedVisitorsOnly") {
    var whomtodisplay = json.targetVisitors.targetByTypeOfVisitor;
    if (whomtodisplay == "TargetByType_AllVisitors") {
      showHowToUser(json);
    } else if (whomtodisplay == "TargetByType_NewVisitors") {
      var CheckIfVisitorExist = localStorage.getItem(CheckIfVisitorExistOrNot);
      if (CheckIfVisitorExist == null) {
        localStorage.setItem(CheckIfVisitorExistOrNot, true);
        showHowToUser(json);
      }
    } else if (whomtodisplay == "TargetByType_ReturningVisitors") {
      var CheckIfVisitorExist = localStorage.getItem(CheckIfVisitorExistOrNot);
      if (CheckIfVisitorExist != null) {
        var sinceNumberDuration = json.targetVisitors.sinceNo;
        var sinceTimeDuration = json.targetVisitors.sinceDuration;
        if (sinceNumberDuration == null) {
          sinceNumberDuration = 1;
        }

        if (sinceTimeDuration == "hours") {
          var currentdate = new Date();
          var currenttime = currentdate.getTime();
          var previousloggedInTime = localStorage.getItem(TimeAccessed);
          var diff = (previousloggedInTime - currenttime) / 1000;
          diff /= 60 * 60;
          var timeinhours = Math.abs(Math.round(diff));
          if (timeinhours <= sinceNumberDuration) {
            showHowToUser(json);
          } else {
            var date = new Date();
            var time = date.getTime();
            localStorage.setItem(CheckIfVisitorExistOrNot, true);
            localStorage.setItem(TimeAccessed, time);
          }
        } else if (sinceTimeDuration == "days") {
          var currentdate = new Date();
          var currenttime = currentdate.getTime();
          var previousloggedInTime = localStorage.getItem(TimeAccessed);

          var diff = (previousloggedInTime - currenttime) / 1000;
          diff /= 60 * 60 * 24;
          var timeindays = Math.abs(Math.round(diff));
          if (timeindays <= sinceNumberDuration) {
            showHowToUser(json);
          } else {
            var date = new Date();
            var time = date.getTime();
            localStorage.setItem(CheckIfVisitorExistOrNot, true);
            localStorage.setItem(TimeAccessed, time);
          }
        } else if (sinceTimeDuration == "months") {
          var currentdate = new Date();
          var currenttime = currentdate.getTime();
          var previousloggedInTime = localStorage.getItem(TimeAccessed);
          var diff = (previousloggedInTime - currenttime) / 1000;
          diff /= 60 * 60 * 24 * 30;
          var timeinmonth = Math.abs(Math.round(diff));
          if (timeinmonth <= sinceNumberDuration) {
            showHowToUser(json);
          } else {
            var date = new Date();
            var time = date.getTime();
            localStorage.setItem(CheckIfVisitorExistOrNot, true);
            localStorage.setItem(TimeAccessed, time);
          }
        } else {
          var date = new Date();
          var time = date.getTime();
          localStorage.setItem(CheckIfVisitorExistOrNot, true);
          localStorage.setItem(TimeAccessed, time);
        }
      } else {
        var date = new Date();
        var time = date.getTime();
        localStorage.setItem(CheckIfVisitorExistOrNot, true);
        localStorage.setItem(TimeAccessed, time);
      }
    } else {
      var date = new Date();
      var time = date.getTime();
      localStorage.setItem(CheckIfVisitorExistOrNot, true);
      localStorage.setItem(TimeAccessed, time);
    }
  } else {
    showHowToUser(json);
  }
}
function showHowToUser(json) {
  var showHow = json.displayWhen.showHow;
  if (showHow != null) {
    if (showHow == "AfterDelay") {
      var time = json.displayWhen.showDelay;
      var delay = time * 1000;
      setTimeout(function () {
        ShowWhen(json);
      }, delay);
    }
    if (showHow == "Immediately") {
      ShowWhen(json);
    }
  } else {
    ShowWhen(json);
  }
}
function ShowWhen(json) {
  console.log(json.displayWhen.visitor_signup);
  console.log(json.displayWhen.visitor_signup_other_campagin);

  let onVisit = [];
  onVisit = JSON.parse(localStorage.getItem("onVisit"));
  let onVisitFirst = JSON.parse(
    localStorage.getItem("onVisitFirst" + json.campaignid)
  );

  console.log(onVisit);
  console.log(onVisitFirst);

  if (
    json.displayWhen.visitor_signup_other_campagin == true &&
    onVisit != null &&
    onVisit.length > 0
  ) {
  } else {
    if (
      json.displayWhen.visitor_signup == true &&
      onVisitFirst != null &&
      onVisitFirst.campaignid == json.campaignid
    ) {
      console.log("privious visit on same campagins");
    } else {
      var showcondition = json.displayWhen.showWhen;
      if (showcondition != null) {
        if (showcondition == "always") {
          showPopUpwhen(json);
        } else if (showcondition == "scheduledTime") {
          var startDate = json.displayWhen.schedulingStartDate;
          var endDate = json.displayWhen.schedulingEndDate;
          var date = new Date();
          var presenttime = Date.parse(date);
          if (startDate <= presenttime && presenttime <= endDate) {
            showPopUpwhen(json);
          }
        }
      } else {
        showPopUpwhen(json);
      }
    }
  }

  //   visitor_signup: true
  // visitor_signup_other_campagin: true
}
function showPopUpwhen(json) {
  var displaywhen = json.displayWhen.displayWhen;
  if (displaywhen == null) {
    DeviceToShowPopUp(json);
  }
  if (displaywhen == "OnLanding") {
    DeviceToShowPopUp(json);
  }
  if (displaywhen == "AfterPages") {
    displayPopupAfterPages(json);
  }
  if (displaywhen == "OnExit") {
    getDevice();

    var addEvent = function (obj, evt, fn) {
      if (obj.addEventListener) {
        obj.addEventListener(evt, fn, false);
      } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
      }
    };
    var onlyOnceFlag = false;
    addEvent(window, "mouseout", function (event) {
      event = event ? event : window.event;
      var from = event.relatedTarget || event.toElement;
      if ((!from || from.nodeName == "HTML") && event.clientY <= -1) {
        if (onlyOnceFlag == false) {
          onlyOnceFlag = true;
          DeviceToShowPopUp(json);
        }
      }
    });

    //

    if (device == "mobile") {
      QualzzJQuery(window).scroll(function (event) {
        var scroll = QualzzJQuery(window).scrollTop();

        if (scroll == 0) {
          if (onlyOnceFlag == false) {
            onlyOnceFlag = true;
            DeviceToShowPopUp(json);
          }
        }

        var scrollper = 99;
        var showpopup = false;
        var sbHeight =
          window.innerHeight *
          (window.innerHeight / document.body.offsetHeight);
        var windowHt = QualzzJQuery(document).height();
        var currentPosition = QualzzJQuery(window).scrollTop();

        var winheight =
          window.innerHeight ||
          (document.documentElement || document.body).clientHeight;
        var docheight = QualzzJQuery(document).height();
        var scrollTop =
          window.pageYOffset ||
          (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
        var trackLength = docheight - winheight;
        var pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
        var campaignDisplayHt = (windowHt * scrollper) / 100;
        if (pctScrolled >= scrollper) {
          if (onlyOnceFlag == false) {
            onlyOnceFlag = true;
            DeviceToShowPopUp(json);
          }
        }

        // if (
        //   QualzzJQuery(window).scrollTop() + QualzzJQuery(window).height() >
        //   QualzzJQuery(document).height() - 100
        // ) {
        //   if (onlyOnceFlag == false) {
        //     onlyOnceFlag = true;
        //     DeviceToShowPopUp(json);
        //   }
        // }

        if (
          QualzzJQuery(window).scrollTop() + QualzzJQuery(window).height() ==
            QualzzJQuery(document).height() ||
          scroll == screen.height
        ) {
          if (onlyOnceFlag == false) {
            onlyOnceFlag = true;
            DeviceToShowPopUp(json);
          }
        }
      });
    }
  }
  if (displaywhen == "AfterScrolling") {
    var scroll = json.displayWhen.afterScrolling;
    var showpopup = false;
    QualzzJQuery(window).scroll(function (e) {
      var sbHeight =
        window.innerHeight * (window.innerHeight / document.body.offsetHeight);
      var windowHt = QualzzJQuery(document).height();
      var currentPosition = QualzzJQuery(window).scrollTop();

      var winheight =
        window.innerHeight ||
        (document.documentElement || document.body).clientHeight;
      var docheight = QualzzJQuery(document).height();
      var scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      var trackLength = docheight - winheight;
      var pctScrolled = Math.floor((scrollTop / trackLength) * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
      var campaignDisplayHt = (windowHt * scroll) / 100;
      if (pctScrolled >= scroll) {
        if (showpopup == false) {
          showpopup = true;
          DeviceToShowPopUp(json);
        }
      }
    });
  }
  if (displaywhen == "OnElementHover") {
    var onElementHover = json.displayWhen.onElementHover;
    if (QualzzJQuery(onElementHover).length > 0) {
      QualzzJQuery(onElementHover).one("mouseover", function () {
        DeviceToShowPopUp(json);
      });
    } else {
      let onElemHover = setInterval(() => {
        if (QualzzJQuery(onElementHover).length > 0) {
          QualzzJQuery(onElementHover).one("mouseover", function () {
            DeviceToShowPopUp(json);
            clearInterval(onElemHover);
          });
        }
      }, 500);
    }
  }
  if (displaywhen == "OnClick") {
    var onclick = json.displayWhen.onClick;
    if (QualzzJQuery(onclick).length > 0) {
      QualzzJQuery(onclick).one("click", function () {
        DeviceToShowPopUp(json);
      });
    } else {
      let urlCahngeDetection = setInterval(() => {
        if (QualzzJQuery(onclick).length > 0) {
          QualzzJQuery(onclick).one("click", function () {
            DeviceToShowPopUp(json);
            clearInterval(urlCahngeDetection);
          });
        }
      }, 500);
    }
  }
}
function displayPopupAfterPages(json) {
  var date = new Date();
  var time = date.getTime();
  localStorage.setItem("CheckIfVisitorExist", true);
  localStorage.setItem("TimeAccessed", time);
  var displayAfterPages = json.displayWhen.displayWhen;
  if (displayAfterPages == "AfterPages") {
    var present = top.location.href;
    var previous = localStorage.getItem("Url");
    var counter = "counter" + json.campaignid;
    var counting = localStorage.getItem(counter);
    if (counting == "null" || counting == null) {
      counting = 0;
    }
    if (json.displayWhen.afterPages > 0) {
      if (present != previous) {
        if (counting >= json.displayWhen.afterPages) {
          displayPopUpOnPageCondition(json);
        }
        counting = ++counting;
        localStorage.setItem("Url", present);
        localStorage.setItem(counter, counting);
      }
    } else {
      displayPopUpOnPageCondition(json);
    }
  } else {
    displayPopUpOnPageCondition(json);
  }
}
var device;
function DeviceToShowPopUp(json) {
  var desktop = json.targetVisitors.deviceTypeDesktop;
  var mobile = json.targetVisitors.deviceTypeMobile;
  var tablet = json.targetVisitors.deviceTypeTablet;

  getDevice();
  // if(json.sizeName == "Inline" && mobile == true){
  //   tablet = true;
  // }
  if (desktop != undefined || mobile != undefined || tablet != undefined) {
    if (desktop == true && mobile == true && tablet == true) {
      if (navigator.userAgent.match(/Tablet|iPad/i)) {
        displayPopUpOnPageCondition(json);
      } else if (
        navigator.userAgent.match(
          /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
        )
      ) {
        displayPopUpOnPageCondition(json);
      } else {
        displayPopUpOnPageCondition(json);
      }
    } else if (desktop == true && mobile == false && tablet == false) {
      if (navigator.userAgent.match(/Tablet|iPad/i)) {
      } else if (
        navigator.userAgent.match(
          /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
        )
      ) {
      } else {
        displayPopUpOnPageCondition(json);
      }
    } else if (mobile == true && desktop == false && tablet == false) {
      if (navigator.userAgent.match(/Tablet|iPad/i)) {
      } else if (
        navigator.userAgent.match(
          /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
        )
      ) {
        displayPopUpOnPageCondition(json);
      } else {
      }
    } else if (tablet == true && mobile == false && desktop == false) {
      if (navigator.userAgent.match(/Tablet|iPad/i)) {
        displayPopUpOnPageCondition(json);
      } else if (
        navigator.userAgent.match(
          /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
        )
      ) {
      } else {
      }
    } else if (desktop == false && mobile == false && tablet == false) {
      alert("No device selected to show");
    } else if (desktop == true && mobile == true && tablet == false) {
      if (navigator.userAgent.match(/Tablet|iPad/i)) {
      } else if (
        navigator.userAgent.match(
          /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
        )
      ) {
        displayPopUpOnPageCondition(json);
      } else {
        displayPopUpOnPageCondition(json);
      }
    } else if (desktop == false && mobile == true && tablet == true) {
      if (navigator.userAgent.match(/Tablet|iPad/i)) {
        displayPopUpOnPageCondition(json);
      } else if (
        navigator.userAgent.match(
          /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
        )
      ) {
        displayPopUpOnPageCondition(json);
      } else {
      }
    } else if (desktop == true && mobile == false && tablet == true) {
      if (navigator.userAgent.match(/Tablet|iPad/i)) {
        displayPopUpOnPageCondition(json);
      } else if (
        navigator.userAgent.match(
          /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
        )
      ) {
      } else {
        displayPopUpOnPageCondition(json);
      }
    }
  }
}


function displayRegexHandler(data,ref){
    for(let i=0;i<=data.length-1;i++){
  let d = data[i];
  if(d.condition == "equal_to" && ref == (d.url).toLowerCase()){
    return true;
    }
    else if(d.condition == "not_equal_to" && ref != (d.url).toLowerCase()){
      return true;
    }
    else if(d.condition == "Contains" && ref.search((d.url).toLowerCase()) >=0 ){
      return true;
    }
    else if(d.condition == "not_contains" && ref.search((d.url).toLowerCase()) < 0){
     return true;
    }
    else if(d.condition == "start_with"  && ref.startsWith((d.url).toLowerCase())){
      return true;
    }
    else if(d.condition == "not_start_with"  && !ref.startsWith((d.url).toLowerCase())){
      return true;
    }
    else if(d.condition == "end_with" &&  ((ref.length-d.url.length)  ==  ref.lastIndexOf((d.url)))){
      return true;
    }
    else if(d.condition == "not_ends_with" && !ref.lastIndexOf((d.url))){
      return true;
    }
    else if(d.condition == "matches" && ref.match(d.url)){
      return true;
    }
    else if(d.condition == "not_match"&& !ref.match(d.url)){
      return true;
    }
  
    }
    return false;
}
function displayPopUpOnPageCondition(json) {
  var displayOnOptionsPopUp = json.displayOptions.displayOnOptions;
  var onpages = json.displayOptions.displayOn;
  var abc = false;
  var pqr = false;

  if (onpages == "allPages") {
      campaignShow(json);
    }
  if (onpages == "others") {
    if (displayOnOptionsPopUp != null) {
      if(displayRegexHandler(displayOnOptionsPopUp,document.URL)){
        campaignShow(json);
      }
      // for (var i = 0; i < displayOnOptionsPopUp.length; i++) {
      //   var url = displayOnOptionsPopUp[i].displayOnOptions;
      //   if (top.location.href == url) {
      //     pqr = true;
      //     campaignShow(json);
      //   } else {
      //     let urlCahngeDetection = setInterval(() => {
      //       if (top.location.href == url) {
      //         pqr = true;
      //         campaignShow(json);
      //         clearInterval(urlCahngeDetection);
      //       }
      //     }, 500);
      //   }

      //   // //26 may rohit end
      // }
    }
    if (displayOnOptionsPopUp == null) {
      campaignShow(json);
    }
  }
  if (abc == false && pqr == true) {
    campaignShow(json);
  }
  if (onpages == null) {
    campaignShow(json);
  }
}


function showHow(json) {
  var showHow = json.displayWhen.showHow;
  if (showHow != undefined) {
    if (showHow == "AfterDelay") {
      var time = json.displayWhen.showDelay;
      var delay = time * 1000;
      setTimeout(function () {
        ShowWhen(json);
      }, delay);
    }
    if (showHow == "Immediately") {
      ShowWhen(json);
    }
  }
}

function contains(a, obj) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

function campaignShow(json) {
  if (!contains(CampID, json.campaignid)) {
    CampID.push(json.campaignid);

    var zindex = 10000;
    var my_div = "<div class='" + json.campaignid + "'></div>";
    //hide of body
    var parentJson = JSON.parse(json.campaignJson);
    var receivedJson = JSON.parse(parentJson[0][0]);

    QualzzJQuery("body").append(my_div);
    var data = JSON.parse(json.campaignJson);

    var body = data[0];
    if (body != null) {
      var body_data = JSON.parse(body[0]);
      brandingtext =JSON.parse(body[0]).brandingtext;
      brandingURL=JSON.parse(body[0]).brandingURL;
      // console.log(body_data.imagename)
      var onlyImgName = body_data.imagename;
      let backgroundGradient = body_data.backgroundGradient;
      var imageBaseUrl = gloabalImageAPI + "/campaign/";
      var backgroundImageUrl = imageBaseUrl + body_data.imagename;
      if (json.displayOptions.position != undefined) {
        var position = json.displayOptions.position;
        var animation = json.displayOptions.effect;
        var imageBaseUrl = gloabalImageAPI + "/campaign/";
        // console.log(imageBaseUrl + body_data.imagename)
        var backgroundImageUrl = imageBaseUrl + body_data.imagename;
        if (position != undefined && animation == null) {
          if (position == "topleft") {
            var top = 0;
            var left = 0;
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var currentPosition = QualzzJQuery(window).scrollTop();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body_data.backgroundcolor,
                  "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: left,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                top: top,
                "z-index": zindex,
                position: "fixed",
                top: top,
                left: left,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
          } else if (position == "topright") {
            var top = 0;
            var right = 0;
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body_data.backgroundcolor,
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  right: right,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                top: top,
                "z-index": zindex,
                position: "fixed",
                top: top,
                right: right,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
          } else if (position == "bottomleft") {
            var bottom = 0;
            var left = 0;
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body_data.backgroundcolor,
                  "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  left: left,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                top: top,
                "z-index": zindex,
                position: "fixed",
                bottom: bottom,
                left: left,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
          } else if (position == "bottomright") {
            var bottom = 0;
            var right = 0;
            var top;
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body_data.backgroundcolor,
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  right: right,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                top: top,
                "z-index": zindex,
                position: "fixed",
                bottom: bottom,
                right: right,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
          } else if (position == "topcenter") {
            var top = 0;
            var leftassigning = "50%";
            var transformassigning = "translate(-50%,0)";
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body_data.backgroundcolor,
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                // "background-image": "url('" + backgroundImageUrl + "')",
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                top: top,
                "z-index": zindex,
                position: "fixed",
                top: top,
                left: leftassigning,
                transform: transformassigning,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
          } else if (position == "bottomcenter") {
            var bottom = 0;
            var leftassigning = "50%";
            var transformassigning = "translate(-50%,0)";
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body_data.backgroundcolor,
                  "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  left: leftassigning,
                  transform: transformassigning,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                // "background-image": "url('" + backgroundImageUrl + "')",
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                top: top,
                "z-index": zindex,
                position: "fixed",
                bottom: bottom,
                left: leftassigning,
                transform: transformassigning,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
          } else if (position == "middleleft") {
            var top = "50%";
            var leftassigning = "0%";
            var transformassigning = "translate(0px, -50%)";
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body_data.backgroundcolor,
                  "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                // "background-image": "url('" + backgroundImageUrl + "')",
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                "z-index": zindex,
                position: "fixed",
                top: top,
                left: leftassigning,
                transform: transformassigning,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
          } else if (position == "middleright") {
            var top = "50%";
            var rightassigning = "0%";
            var transformassigning = "translate(0px, -50%)";
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body_data.backgroundcolor,
                  "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  right: rightassigning,
                  transform: transformassigning,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                // "background-image": "url('" + backgroundImageUrl + "')",
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                "z-index": zindex,
                position: "fixed",
                top: top,
                right: rightassigning,
                transform: transformassigning,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
          } else if (position == "middlecenter") {
            var top = "50%";
            var leftassigning = "50%";
            var transformassigning = "translate(-50%, -50%)";
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body_data.backgroundcolor,
                  "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                // "background-image": "url('" + backgroundImageUrl + "')",
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                "z-index": zindex,
                position: "fixed",
                top: top,
                left: leftassigning,
                transform: transformassigning,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
          }
        }
        if (position != undefined && animation != undefined) {
          var heightdata;
          if (position == "topleft") {
            var top = 0;
            var left = 0;
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (animation == "fadeIn" || animation == "Fade In") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: left,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: left,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(1000);
            }
            if (animation == "slow" || animation == "Slow") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: left,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  // "background-image":"url('" + backgroundImageUrl + "')",
                  "background-image":backgroundGradient,
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: left,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(2000);
            }
            if (animation == "slideIn") {
              var display = "none";
              var bottom = 0;
              var right = 0;
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: left,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  "background-image":backgroundGradient,
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: left,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              heightdata = QualzzJQuery("." + json.campaignid).css("height");
              QualzzJQuery("." + json.campaignid).slideDown(2000);
            }
            if (animation == "none" || animation == "None"  || animation == "null") {
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: left,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: left,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
            }
          } else if (position == "topright") {
            var top = 0;
            var right = 0;
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (animation == "fadeIn" || animation == "Fade In") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    right: right,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  right: right,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(1000);
            }
            if (animation == "slow" || animation == "Slow") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    right: right,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image":"url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  right: right,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(2000);
            }
            if (animation == "slideIn") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    right: right,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  right: right,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              heightdata = QualzzJQuery("." + json.campaignid).css("height");
              QualzzJQuery("." + json.campaignid).slideDown(2000);
            }
            if (animation == "none" || animation == "None"  || animation == "null") {
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    right: right,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  right: right,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
            }
          } else if (position == "bottomleft") {
            var bottom = 0;
            var left = 0;
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (animation == "fadeIn" || animation == "Fade In") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    left: left,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  left: left,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(1000);
            }
            if (animation == "slow" || animation == "Slow") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    left: left,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  left: left,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(2000);
            }
            if (animation == "slideIn") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    left: left,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  left: left,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              heightdata = QualzzJQuery("." + json.campaignid).css("height");
              QualzzJQuery("." + json.campaignid).slideDown(2000);
            }
            if (animation == "none" || animation == "None"  || animation == "null") {
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    left: left,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image":"url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  left: left,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
            }
          } else if (position == "bottomright") {
            var bottom = 0;
            var right = 0;
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (animation == "fadeIn" || animation == "Fade In") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    right: right,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  right: right,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(1000);
            }
            if (animation == "slow" || animation == "Slow") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    right: right,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  right: right,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(2000);
            }
            if (animation == "slideIn") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    right: right,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  right: right,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              heightdata = QualzzJQuery("." + json.campaignid).css("height");
              QualzzJQuery("." + json.campaignid).slideDown(2000);
            }
            if (animation == "none" || animation == "None"  || animation == "null") {
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    right: right,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  right: right,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
            }
          } else if (position == "topcenter") {
            var top = 0;
            var leftassigning = "50%";
            var transformassigning = "translate(-50%,0)";
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (animation == "fadeIn" || animation == "Fade In") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    // "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    // "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    // "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image":"url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }

              QualzzJQuery("." + json.campaignid).fadeIn(1000);
            }
            if (animation == "slow" || animation == "Slow") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(2000);
            }
            if (animation == "slideIn") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              heightdata = QualzzJQuery("." + json.campaignid).css("height");
              QualzzJQuery("." + json.campaignid).slideDown(2000);
            }
            if (animation == "none" || animation == "None"  || animation == "null") {
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image":"url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
            }
          } else if (position == "bottomcenter") {
            var bottom = 0;
            var leftassigning = "50%";
            var transformassigning = "translate(-50%,0)";
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (animation == "fadeIn" || animation == "Fade In") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(1000);
            }
            if (animation == "slow" || animation == "Slow") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(2000);
            }
            if (animation == "slideIn") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image":"url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              heightdata = QualzzJQuery("." + json.campaignid).css("height");
              QualzzJQuery("." + json.campaignid).slideDown(2000);
            }
            if (animation == "none" || animation == "None"  || animation == "null") {
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    top: top,
                    "z-index": zindex,
                    position: "fixed",
                    bottom: bottom,
                    left: leftassigning,
                    transform: transformassigning,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  top: top,
                  "z-index": zindex,
                  position: "fixed",
                  bottom: bottom,
                  left: leftassigning,
                  transform: transformassigning,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
            }
          } else if (position == "middleleft") {
            var top = "50%";
            var leftassigning = "0%";
            var transformassigning = "translate(0px, -50%)";
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (animation == "fadeIn" || animation == "Fade In") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(1000);
            }
            if (animation == "slow" || animation == "Slow") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(2000);
            }
            if (animation == "slideIn") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              heightdata = QualzzJQuery("." + json.campaignid).css("height");
              QualzzJQuery("." + json.campaignid).slideDown(2000);
            }
            if (animation == "none" || animation == "None"  || animation == "null") {
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
            }
          } else if (position == "middleright") {
            var top = "50%";
            var rightassigning = "0%";
            var transformassigning = "translate(0px, -50%)";
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (animation == "fadeIn" || animation == "Fade In") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    right: rightassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  right: rightassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(1000);
            }
            if (animation == "slow" || animation == "Slow") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    right: rightassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  right: rightassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(2000);
            }
            if (animation == "slideIn") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    right: rightassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  right: rightassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              heightdata = QualzzJQuery("." + json.campaignid).css("height");
              QualzzJQuery("." + json.campaignid).slideDown(2000);
            }
            if (animation == "none" || animation == "None"  || animation == "null") {
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    right: rightassigning,
                    transform: transformassigning,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  right: rightassigning,
                  transform: transformassigning,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
            }
          } else if (position == "middlecenter") {
            var top = "50%";
            var leftassigning = "50%";
            var transformassigning = "translate(-50%, -50%)";
            var scroll = json.displayWhen.afterScrolling;
            var windowHt = QualzzJQuery(document).height();
            var campaignDisplayHt = (windowHt * scroll) / 100;
            var screenheight = screen.height;
            if (animation == "fadeIn" || animation == "Fade In") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(1000);
            }
            if (animation == "slow" || animation == "Slow") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,
                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              QualzzJQuery("." + json.campaignid).fadeIn(2000);
            }
            if (animation == "slideIn") {
              var display = "none";
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    display: display,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
              heightdata = QualzzJQuery("." + json.campaignid).css("height");
              QualzzJQuery("." + json.campaignid).slideDown(2000);
            }
            if (animation == "none" || animation == "None"  || animation == "null") {
              if (onlyImgName) {
                QualzzJQuery("." + json.campaignid)
                  .attr("imagename", body_data.imagename)
                  .css({
                    "background-color": body_data.backgroundcolor,
                    "background-image": "url('" + backgroundImageUrl + "')",
                    border: body_data.border,
                    "border-radius": body_data.borderradius,
                    width: body_data.width,
                    height: body_data.height,
                    "z-index": zindex,
                    position: "fixed",
                    top: top,
                    left: leftassigning,
                    transform: transformassigning,
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%",
                    "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                    "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  });
              } else {
                QualzzJQuery("." + json.campaignid).css({
                  overflow: "hidden",
                  "background-color": body_data.backgroundcolor,
                  "background-image":backgroundGradient,

                  // "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
              }
            }
          }
          if (animation == "slideIn") {
            QualzzJQuery("." + json.campaignid).css({ height: heightdata });
          }
        }
      } else {
        var animation = json.displayOptions.effect;
        if (animation != undefined) {
          if (animation == "fadeIn" || animation == "Fade In") {
            var display = "none";
            var top = "50%";
            var leftassigning = "50%";
            var transformassigning = "translate(-50%, -50%)";
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body_data.backgroundcolor,
                  "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                // "background-image": "url('" + backgroundImageUrl + "')",
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                "z-index": zindex,
                position: "fixed",
                top: top,
                left: leftassigning,
                transform: transformassigning,
                display: display,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
            QualzzJQuery("." + json.campaignid).fadeIn(1000);
          }
          if (animation == "slow" || animation == "Slow") {
            var display = "none";
            var top = "50%";
            var leftassigning = "50%";
            var transformassigning = "translate(-50%, -50%)";
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body.backgroundcolor,
                  "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                // "background-image": "url('" + backgroundImageUrl + "')",
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                "z-index": zindex,
                position: "fixed",
                top: top,
                left: leftassigning,
                transform: transformassigning,
                display: display,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
            QualzzJQuery("." + json.campaignid).fadeIn(2000);
          }
          if (animation == "slideIn") {
            var display = "none";
            var top = "50%";
            var leftassigning = "50%";
            var transformassigning = "translate(-50%, -50%)";
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body.backgroundcolor,
                  "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  display: display,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,

                // "background-image": "url('" + backgroundImageUrl + "')",
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                "z-index": zindex,
                position: "fixed",
                top: top,
                left: leftassigning,
                transform: transformassigning,
                display: display,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
            QualzzJQuery("." + json.campaignid).slideDown(2000);
          }
          if (animation == "none" || animation == "None"  || animation == "null") {
            var top = "50%";
            var leftassigning = "50%";
            var transformassigning = "translate(-50%, -50%)";
            if (onlyImgName) {
              QualzzJQuery("." + json.campaignid)
                .attr("imagename", body_data.imagename)
                .css({
                  "background-color": body.backgroundcolor,
                  "background-image": "url('" + backgroundImageUrl + "')",
                  border: body_data.border,
                  "border-radius": body_data.borderradius,
                  width: body_data.width,
                  height: body_data.height,
                  "z-index": zindex,
                  position: "fixed",
                  top: top,
                  left: leftassigning,
                  transform: transformassigning,
                  "background-repeat": "no-repeat",
                  "background-size": "100% 100%",
                  "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                  "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                });
            } else {
              QualzzJQuery("." + json.campaignid).css({
                overflow: "hidden",
                "background-color": body_data.backgroundcolor,
                "background-image":backgroundGradient,
                // "background-image":"url('" + backgroundImageUrl + "')",
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                "z-index": zindex,
                position: "fixed",
                top: top,
                left: leftassigning,
                transform: transformassigning,
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
            }
          }
        } else {
          var top = "50%";
          var leftassigning = "50%";
          var transformassigning = "translate(-50%, -50%)";
          if (onlyImgName) {
            QualzzJQuery("." + json.campaignid)
              .attr("imagename", body_data.imagename)
              .css({
                "background-color": body.backgroundcolor,
                "background-image": "url('" + backgroundImageUrl + "')",
                border: body_data.border,
                "border-radius": body_data.borderradius,
                width: body_data.width,
                height: body_data.height,
                "z-index": zindex,
                position: "fixed",
                top: top,
                left: leftassigning,
                transform: transformassigning,
                "background-repeat": "no-repeat",
                "background-size": "100% 100%",
                "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
                "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              });
          } else {
            QualzzJQuery("." + json.campaignid).css({
              overflow: "hidden",
              "background-color": body_data.backgroundcolor,
              "background-image":backgroundGradient,
              // "background-image": "url('" + backgroundImageUrl + "')",
              border: body_data.border,
              "border-radius": body_data.borderradius,
              width: body_data.width,
              height: body_data.height,
              "z-index": zindex,
              position: "fixed",
              top: top,
              left: leftassigning,
              transform: transformassigning,
              "-webkit-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              "-moz-box-shadow": "0 0 10px rgba(0,0,0,0.4)",
              "box-shadow": "0 0 10px rgba(0,0,0,0.4)",
            });
          }
        }
      }

      var child_data = body[1];
      var div = "<form id='frameone" + json.campaignid + "'></form>";
      QualzzJQuery(div).appendTo(QualzzJQuery("." + json.campaignid));
      if (body_data.closeiconpresent == "present") {
        // console.log("web close");
        var closeicon =
          "<div style='top: 5px;right: 9px;position: absolute;z-index:1000000;cursor:pointer' class='button-close" +
          json.campaignid +
          "'><i class='fa fa-times-circle' style='color:" +
          body_data.closeiconcolor +
          ";font-size: 22px;cursor:pointer'  aria-hidden='true'></i></div>";
        QualzzJQuery(closeicon).appendTo(
          QualzzJQuery("#frameone" + json.campaignid)
        );
      }
      // console.log("body is", body_data);
      var brandingimg = body_data.brandingicon;
      // if(body_data.brandingicon == "present")
      // {
      //   brandingimg = ('<div style="bottom:10%;left:35%;height: 20px;position:absolute;z-index:9999"  id="brandingtheme'+json.campaignid+'"><div><img src="gloabalImageAPI/powered.png" id="brandingimg" style="height:50px;width:120px;"></div></div>');
      //   QualzzJQuery(brandingimg).appendTo(QualzzJQuery('#frameone'+json.campaignid));

      // }

      var overlayJson = JSON.parse(body[0]);
      if (overlayJson.imageOverlayStatus == "present") {
        QualzzJQuery("#frameone" + json.campaignid).append(
          '<span id="imageFadeIn' +
            json.campaignid +
            '" style="height:100%;width:100%;position:absolute;opacity:' +
            overlayJson.imageOverlayOpacity +
            ";background-color:" +
            overlayJson.imageOverlayColor +
            '"></span>'
        );
      }

      if (json.sizeName == "Inline" && device != "desktop" ) {
        IframeFullWith = parseInt(
          QualzzJQuery("#QZ-" + json.campaignid).css("width")
        );
        localStorage.setItem("IframeFullWith", IframeFullWith);
        for (var i = 0; i < child_data.children.length; i++) {
          var data;
          // console.log(child_data.children[i].type);

          if (child_data.children[i].type == "email") {
            data = child_data.children[i];
            //this calculation is to assign left right position center
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;

            var fontfamily = data.fontfamily;
            var fontsize = data.fontsize;
            var letterspacing = data.letterspacing;
            // var formLabel = '<form></form>'
            var appliedStyle = data.style;
            if (appliedStyle == undefined) {
              appliedStyle = "";
            }
            if (appliedStyle.split("border:").length > 1) {
              var border = appliedStyle.split("border:")[1].split(";")[0];
            }
            if (appliedStyle.split("border-radius:").length > 1) {
              var borderradius = appliedStyle
                .split("border-radius:")[1]
                .split(";")[0];
            }

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var bordercolor = data.bordercolor;
            var borderwidth = data.borderwidth;
            var border = borderwidth + " solid " + bordercolor;
            var topspan =
              parseInt(final_x_axis, 10) + parseInt(data.height, 10) + 1;
            var newheight = parseInt(data.height);
            var newwidth = parseInt(data.width);

            QualzzJQuery("<input>")
              .attr({
                id: data.id,
                placeholder: data.placeholder,
                type: "email",
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                name: data.name,
                required: data.required,
                block_disposable: data.block_disposable ? true : false,
                blacklisted_domains: data.blacklisted_domains,
                API:data.API,
                APIKey:data.APIKey
              })
              .css({
                "background-color": data.backgroundcolor,
                "box-sizing": "border-box",
                position: data.position,
                top: final_x_axis,
                left: CalcLeftRight + "px",
                right: CalcLeftRight + "px",
                color: data.textcolor,
                border: border,
                "border-radius": data.borderradius,
                "font-family": fontfamily,
                height: newheight + "px",
                width: newwidth + "px",
                "letter-spacing": letterspacing,
                "font-size": fontsize,
                padding: "0px",
                "z-index": "1",
                "padding-left": "10px",
              })
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].type == "textarea") {
            data = child_data.children[i];
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;

            var fontfamily = data.fontfamily;
            var fontsize = data.fontsize;
            var letterspacing = data.letterspacing;
            // var formLabel = '<form></form>'
            var appliedStyle = data.style;
            if (appliedStyle == undefined) {
              appliedStyle = "";
            }
            if (appliedStyle.split("border:").length > 1) {
              var border = appliedStyle.split("border:")[1].split(";")[0];
            }
            if (appliedStyle.split("border-radius:").length > 1) {
              var borderradius = appliedStyle
                .split("border-radius:")[1]
                .split(";")[0];
            }

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var bordercolor = data.bordercolor;
            var borderwidth = data.borderwidth;
            var border = borderwidth + " solid " + bordercolor;
            var topspan =
              parseInt(final_x_axis, 10) + parseInt(data.height, 10) + 1;
            var newheight = parseInt(data.height);
            var newwidth = parseInt(data.width);

            QualzzJQuery("<textarea>")
              .attr({
                id: data.id,
                placeholder: data.placeholder,
                type: "textarea",
                name: data.name,
                required: data.required,
                maxLength: 1000,
              })
              .css({
                "background-color": data.backgroundcolor,
                "box-sizing": "border-box",
                position: data.position,
                top: final_x_axis,
                left: CalcLeftRight + "px",
                right: CalcLeftRight + "px",
                color: data.textcolor,
                border: border,
                "border-radius": data.borderradius,
                "font-family": fontfamily,
                height: newheight + "px",
                width: newwidth + "px",
                "letter-spacing": letterspacing,
                "font-size": fontsize,
                padding: "0px",
                "z-index": "1",
                "padding-left": "10px",
              })
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }

          if (
            child_data.children[i].type == "input" &&
            child_data.children[i].id != "phone_text"
          ) {
            data = child_data.children[i];
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;

            var fontfamily = data.fontfamily;
            var fontsize = data.fontsize;
            var letterspacing = data.letterspacing;
            // var formLabel = '<form></form>'
            var appliedStyle = data.style;
            if (appliedStyle == undefined) {
              appliedStyle = "";
            }
            if (appliedStyle.split("border:").length > 1) {
              var border = appliedStyle.split("border:")[1].split(";")[0];
            }
            if (appliedStyle.split("border-radius:").length > 1) {
              var borderradius = appliedStyle
                .split("border-radius:")[1]
                .split(";")[0];
            }

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var bordercolor = data.bordercolor;
            var borderwidth = data.borderwidth;
            var border = borderwidth + " solid " + bordercolor;
            var topspan =
              parseInt(final_x_axis, 10) + parseInt(data.height, 10) + 1;
            var newheight = parseInt(data.height);
            var newwidth = parseInt(data.width);

            QualzzJQuery("<input>")
              .attr({
                id: data.id,
                placeholder: data.placeholder,
                type: "input",
                name: data.name,
                required: data.required,
              })
              .css({
                "background-color": data.backgroundcolor,
                "box-sizing": "border-box",
                position: data.position,
                top: final_x_axis,
                left: CalcLeftRight + "px",
                right: CalcLeftRight + "px",
                color: data.textcolor,
                border: border,
                "border-radius": data.borderradius,
                "font-family": fontfamily,
                height: newheight + "px",
                width: newwidth + "px",
                "letter-spacing": letterspacing,
                "font-size": fontsize,
                padding: "0px",
                "z-index": "1",
                "padding-left": "10px",
              })
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }

          if (
            child_data.children[i].type == "input" &&
            child_data.children[i].id == "phone_text"
          ) {
            data = child_data.children[i];
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;
            var fontfamily = data.fontfamily;
            var fontsize = data.fontsize;
            var letterspacing = data.letterspacing;
            // var formLabel = '<form></form>'
            var appliedStyle = data.style;
            if (appliedStyle == undefined) {
              appliedStyle = "";
            }
            if (appliedStyle.split("border:").length > 1) {
              var border = appliedStyle.split("border:")[1].split(";")[0];
            }
            if (appliedStyle.split("border-radius:").length > 1) {
              var borderradius = appliedStyle
                .split("border-radius:")[1]
                .split(";")[0];
            }

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var bordercolor = data.bordercolor;
            var borderwidth = data.borderwidth;
            var border = borderwidth + " solid " + bordercolor;
            var topspan =
              parseInt(final_x_axis, 10) + parseInt(data.height, 10) + 1;
            var newheight = parseInt(data.height);
            var newwidth = parseInt(data.width);

            QualzzJQuery("<input>")
              .attr({
                id: data.id,
                placeholder: data.placeholder,
                type: "text",
                name: data.name,
                pattern: "[0-9]{10,16}",
                required: data.required,
                title: "Enter Valid Phone Number",
              })
              .css({
                "background-color": data.backgroundcolor,
                "box-sizing": "border-box",
                position: data.position,
                top: final_x_axis,
                left: CalcLeftRight + "px",
                right: CalcLeftRight + "px",
                color: data.textcolor,
                border: border,
                "border-radius": data.borderradius,
                "font-family": fontfamily,
                height: newheight + "px",
                width: newwidth + "px",
                "letter-spacing": letterspacing,
                "font-size": fontsize,
                padding: "0px",
                "z-index": "1",
                "padding-left": "10px",
              })
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "label") {
            data = child_data.children[i];
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;
            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var newwidth = parseInt(width, 10);
            var widthWithExtension = newwidth + 10;
            var width = parseFloat(data.width) + 2;
            var assignwidth = widthWithExtension + "px";
            css = {
              position: "absolute",
              top: final_x_axis,
              left: final_y_axis,
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              cursor: "pointer",
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.htmlcontent)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "timer") {
            data = child_data.children[i];
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;
            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var background = data.background;
            css = {
              position: "absolute",
              top: final_x_axis,
              left: CalcLeftRight + "px",
              right: CalcLeftRight + "px",
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              "z-index": "3",
              background: background,
            };
            data.timerhtmlcontent= data.timerhtmlcontent.replaceAll('value="00"','value="-"');
              QualzzJQuery("<span></span>")
              .css(css)
              .append(data.timerhtmlcontent)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "consent") {
            data = child_data.children[i];
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;
            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var background = data.background;
            css = {
              position: "absolute",
              top: final_x_axis,
              left: CalcLeftRight + "px",
              right: CalcLeftRight + "px",
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              "z-index": "3",
              "background-color": background,
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.outerHTML)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "checkboxes") {
            data = child_data.children[i];
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;
            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var background = data.background;
            css = {
              position: "absolute",
              top: final_x_axis,
              left: CalcLeftRight + "px",
              right: CalcLeftRight + "px",
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              "z-index": "3",
              background: background,
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.outerHTML)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "radio_button") {
            data = child_data.children[i];
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;
            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var background = data.background;
            css = {
              position: "absolute",
              top: final_x_axis,
              left: CalcLeftRight + "px",
              right: CalcLeftRight + "px",
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              "z-index": "3",
              background: background,
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.outerHTML)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }

          if (child_data.children[i].id == "drop-down") {
            data = child_data.children[i];
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;
            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var background = data.background;
            css = {
              position: "absolute",
              top: final_x_axis,
              left: CalcLeftRight + "px",
              right: CalcLeftRight + "px",
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              "z-index": "3",
              background: background,
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.outerHTML)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }

          if (child_data.children[i].id == "socialLink") {
            data = child_data.children[i];
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;
            //Added 3 px as issue with social link top
            var final_x_axis = parseFloat(data.positionxaxis) + 3 + "px";
            var final_y_axis = data.positionyaxis + "";
            css = {
              position: "absolute",
              top: final_x_axis,
              left: CalcLeftRight + 3 + "px",
              right: CalcLeftRight + "px",
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.htmlcontent)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "img") {
            data = child_data.children[i];

            let imgPer = parseInt(data.width) / IframeFullWith;
            if (imgPer < 1) {
              CalcLeftRight = imgPer * 100;
              CalcLeftRight = (100 - CalcLeftRight) / 2;
            }

            var data_x = parseInt(data.positionxaxis, 10);
            var data_y = parseInt(data.positionyaxis, 10);
            var body_x = parseInt(body.positionxaxis, 10);
            var body_y = parseInt(body.positionyaxis, 10);
            var imageBaseUrl = gloabalImageAPI + "/campaign/";
            var imageUrl = imageBaseUrl + data.imagename;
            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var border_width = data.borderwidth;
            var border_color = data.bordercolor;
            var border_radius = data.borderradius;
            var newheight = parseInt(data.height) + 2;
            var newwidth = parseInt(data.width) + 2;

            var imgborder = border_width + " solid " + border_color;
            var myImage = QualzzJQuery("<img/>");
            myImage.attr("id", "img");
            myImage.attr("src", imageUrl);
            myImage.attr("imagename", data.imagename);
            myImage.attr("onclick", data.onclick);
            myImage
              .css({
                margin: "0",
                float: "none",
                border: "none",
                "padding-left": data.paddingleft,
                "padding-right": data.paddingright,
                height: newheight,
                width: newwidth,
                "padding-top": data.paddingtop,
                "padding-bottom": data.paddingbottom,
                position: data.position,
                top: final_x_axis,
                left: CalcLeftRight + "%",
                right: CalcLeftRight + "%",
                border: imgborder,
                "border-radius": border_radius,
                display: imgPer > 1 ? "none" : "",
              })
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].type == "button") {
            data = child_data.children[i];
            CalcLeftRight = (IframeFullWith - parseInt(data.width)) / 2;
            var id = data.id;
            var event = data.event;
            var border = "";
            var Styleclass;
            if (data.class == undefined) {
              Styleclass = "flat";
            } else {
              Styleclass = data.class;
            }
            var buttonlabel = data.buttonlabel;
            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var font_family = data.font_family;
            var font = data.fontsize; /// Added
            var fontfamily = data.fontfamily;
            var color = data.color;
            var appliedStyle = data.style;
            var outline_data = "none";
            var borderradius = 0;
            var borderdata;
            var underline = "none";
            if (appliedStyle == undefined) {
              appliedStyle = "";
            }
            if (data.border_radius == undefined) {
              if (appliedStyle.split("border-radius:").length > 1) {
                borderradius = appliedStyle
                  .split("border-radius:")[1]
                  .split(";")[0];
              }
            } else {
              borderradius = data.border_radius;
            }
            if (appliedStyle.split("text-decoration:").length > 1) {
              underline = appliedStyle
                .split("text-decoration:")[1]
                .split(";")[0];
            }
            css = {
              position: "absolute",
              top: final_x_axis,
              left: final_y_axis,
            };
            if (appliedStyle.split("border:").length > 1) {
              border = appliedStyle.split("border:")[1].split(";")[0];
            }
            if (appliedStyle.split("outline:").length > 1) {
              border = "2px solid blue";
            }
            borderdata = "0px";
            if (data.class == "outLine") {
              borderdata = "2px solid " + data.bordercolor;
            } else {
              borderdata = "0px solid";
            }
            var classname;
            if (data.event == "Close") {
              classname = "button-close" + json.campaignid;
            } else if (data.event == "Submit") {
              classname = "button-submit" + json.campaignid;
            } else if (data.event == "Next") {
              classname = "button-next" + json.campaignid;
            }
            var zindex = 1;
            if (data.class == "gradient") {
              var backgroundcolorgradiant =
                "linear-gradient(" + data.linearbackground + ", white)";
              QualzzJQuery("<button>")
                .attr({
                  value: "Button",
                  "url":data.onclick,
                  class: classname,

                })
                .html("Button")
                .css({
                  display: "inline-block",
                  border: data.border,
                  zindex: zindex,
                  "font-size": font,
                  "font-family": fontfamily,
                  "border-radius": borderradius,
                  color: color,
                  background: backgroundcolorgradiant,
                  position: data.position,
                  top: final_x_axis,
                  left: CalcLeftRight + "px",
                  right: CalcLeftRight + "px",
                  width: data.width,
                  height: data.height,
                  // "padding-left": data.paddingleft,
                  // "padding-right": data.paddingright,
                  "text-decoration": underline,
                  // "padding-top": data.paddingtop,
                  "cursor":"pointer",
                  // "padding-bottom": data.paddingbottom,
                  'display' : 'flex',
                  'flex-direction' : 'column',
                  'justify-content' : 'center',
                  'align-items' : 'center',
                  outline: outline_data,
                })
                .text(buttonlabel)
                .appendTo(QualzzJQuery("#frameone" + json.campaignid));
            } else {
              QualzzJQuery("<button>")
                .attr({
                  value: "Button",
                  // onclick: data.onclick,
                  class: classname,
                  "url":data.onclick

                })
                .html("Button")
                .css({
                  display: "inline-block",
                  border: data.border,
                  "font-size": font,
                  zindex: zindex,
                  "font-family": fontfamily,
                  "border-radius": borderradius,
                  color: color,
                  background: data.backgroundcolor,
                  position: data.position,
                  top: final_x_axis,
                  left: CalcLeftRight + "px",
                  right: CalcLeftRight + "px",
                  width: data.width,
                  height: data.height,
                  // "padding-left": data.paddingleft,
                  // "padding-right": data.paddingright,
                  "text-decoration": underline,
                  //  "padding-top": data.paddingtop,
                  "cursor":"pointer",
                  // "padding-bottom": data.paddingbottom,
                  'display' : 'flex',
                  'flex-direction' : 'column',
                  'justify-content' : 'center',
                  'align-items' : 'center',
                  outline: outline_data,
                })
                .text(buttonlabel)
                .appendTo(QualzzJQuery("#frameone" + json.campaignid));
            }
          }
        }
      } else {
        for (var i = 0; i < child_data.children.length; i++) {
          var data;

          if (child_data.children[i].type == "email") {
            data = child_data.children[i];
            var fontfamily = data.fontfamily;
            var fontsize = data.fontsize;
            var letterspacing = data.letterspacing;
            // var formLabel = '<form></form>'
            var appliedStyle = data.style;
            if (appliedStyle == undefined) {
              appliedStyle = "";
            }
            if (appliedStyle.split("border:").length > 1) {
              var border = appliedStyle.split("border:")[1].split(";")[0];
            }
            if (appliedStyle.split("border-radius:").length > 1) {
              var borderradius = appliedStyle
                .split("border-radius:")[1]
                .split(";")[0];
            }

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var bordercolor = data.bordercolor;
            var borderwidth = data.borderwidth;
            var border = borderwidth + " solid " + bordercolor;
            var topspan =
              parseInt(final_x_axis, 10) + parseInt(data.height, 10) + 1;
            var newheight = parseInt(data.height);
            var newwidth = parseInt(data.width);

            QualzzJQuery("<input>")
              .attr({
                id: data.id,
                placeholder: data.placeholder,
                type: "email",
                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
                name: data.name,
                required: data.required,
                block_disposable: data.block_disposable ? true : false,
                blacklisted_domains: data.blacklisted_domains,
                API:data.API,
                APIKey:data.APIKey
              })
              .css({
                "background-color": data.backgroundcolor,
                "box-sizing": "border-box",
                position: data.position,
                top: final_x_axis,
                left: final_y_axis,
                color: data.textcolor,
                border: border,
                "border-radius": data.borderradius,
                "font-family": fontfamily,
                height: newheight + "px",
                width: newwidth + "px",
                "letter-spacing": letterspacing,
                "font-size": fontsize,
                padding: "0px",
                "z-index": "1",
                "padding-left": "10px",
              })
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].type == "textarea") {
            data = child_data.children[i];
            var fontfamily = data.fontfamily;
            var fontsize = data.fontsize;
            var letterspacing = data.letterspacing;
            // var formLabel = '<form></form>'
            var appliedStyle = data.style;
            if (appliedStyle == undefined) {
              appliedStyle = "";
            }
            if (appliedStyle.split("border:").length > 1) {
              var border = appliedStyle.split("border:")[1].split(";")[0];
            }
            if (appliedStyle.split("border-radius:").length > 1) {
              var borderradius = appliedStyle
                .split("border-radius:")[1]
                .split(";")[0];
            }

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var bordercolor = data.bordercolor;
            var borderwidth = data.borderwidth;
            var border = borderwidth + " solid " + bordercolor;
            var topspan =
              parseInt(final_x_axis, 10) + parseInt(data.height, 10) + 1;
            var newheight = parseInt(data.height);
            var newwidth = parseInt(data.width);

            QualzzJQuery("<textarea>")
              .attr({
                id: data.id,
                placeholder: data.placeholder,
                type: "textarea",
                name: data.name,
                required: data.required,
                maxLength: 1000,
              })
              .css({
                "background-color": data.backgroundcolor,
                "box-sizing": "border-box",
                position: data.position,
                top: final_x_axis,
                left: final_y_axis,
                color: data.textcolor,
                border: border,
                "border-radius": data.borderradius,
                "font-family": fontfamily,
                height: newheight + "px",
                width: newwidth + "px",
                "letter-spacing": letterspacing,
                "font-size": fontsize,
                padding: "0px",
                "z-index": "1",
                "padding-left": "10px",
              })
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }

          if (
            child_data.children[i].type == "input" &&
            child_data.children[i].id != "phone_text"
          ) {
            data = child_data.children[i];
            var fontfamily = data.fontfamily;
            var fontsize = data.fontsize;
            var letterspacing = data.letterspacing;
            // var formLabel = '<form></form>'
            var appliedStyle = data.style;
            if (appliedStyle == undefined) {
              appliedStyle = "";
            }
            if (appliedStyle.split("border:").length > 1) {
              var border = appliedStyle.split("border:")[1].split(";")[0];
            }
            if (appliedStyle.split("border-radius:").length > 1) {
              var borderradius = appliedStyle
                .split("border-radius:")[1]
                .split(";")[0];
            }

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var bordercolor = data.bordercolor;
            var borderwidth = data.borderwidth;
            var border = borderwidth + " solid " + bordercolor;
            var topspan =
              parseInt(final_x_axis, 10) + parseInt(data.height, 10) + 1;
            var newheight = parseInt(data.height);
            var newwidth = parseInt(data.width);

            QualzzJQuery("<input>")
              .attr({
                id: data.id,
                placeholder: data.placeholder,
                type: "input",
                name: data.name,
                required: data.required,
              })
              .css({
                "background-color": data.backgroundcolor,
                "box-sizing": "border-box",
                position: data.position,
                top: final_x_axis,
                left: final_y_axis,
                color: data.textcolor,
                border: border,
                "border-radius": data.borderradius,
                "font-family": fontfamily,
                height: newheight + "px",
                width: newwidth + "px",
                "letter-spacing": letterspacing,
                "font-size": fontsize,
                padding: "0px",
                "z-index": "1",
                "padding-left": "10px",
              })
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }

          if (
            child_data.children[i].type == "input" &&
            child_data.children[i].id == "phone_text"
          ) {
            data = child_data.children[i];
            var fontfamily = data.fontfamily;
            var fontsize = data.fontsize;
            var letterspacing = data.letterspacing;
            // var formLabel = '<form></form>'
            var appliedStyle = data.style;
            if (appliedStyle == undefined) {
              appliedStyle = "";
            }
            if (appliedStyle.split("border:").length > 1) {
              var border = appliedStyle.split("border:")[1].split(";")[0];
            }
            if (appliedStyle.split("border-radius:").length > 1) {
              var borderradius = appliedStyle
                .split("border-radius:")[1]
                .split(";")[0];
            }

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var bordercolor = data.bordercolor;
            var borderwidth = data.borderwidth;
            var border = borderwidth + " solid " + bordercolor;
            var topspan =
              parseInt(final_x_axis, 10) + parseInt(data.height, 10) + 1;
            var newheight = parseInt(data.height);
            var newwidth = parseInt(data.width);

            QualzzJQuery("<input>")
              .attr({
                id: data.id,
                placeholder: data.placeholder,
                type: "text",
                name: data.name,
                pattern: "[0-9]{10,16}",
                required: data.required,
                title: "Enter Valid Phone Number",
              })
              .css({
                "background-color": data.backgroundcolor,
                "box-sizing": "border-box",
                position: data.position,
                top: final_x_axis,
                left: final_y_axis,
                color: data.textcolor,
                border: border,
                "border-radius": data.borderradius,
                "font-family": fontfamily,
                height: newheight + "px",
                width: newwidth + "px",
                "letter-spacing": letterspacing,
                "font-size": fontsize,
                padding: "0px",
                "z-index": "1",
                "padding-left": "10px",
              })
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "label") {
            data = child_data.children[i];
            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var newwidth = parseInt(width, 10);
            var widthWithExtension = newwidth + 10;
            var width = parseFloat(data.width) + 2;
            var assignwidth = widthWithExtension + "px";
            css = {
              position: "absolute",
              top: final_x_axis,
              left: final_y_axis,
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              cursor: "pointer",
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.htmlcontent)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "timer") {
            data = child_data.children[i];

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var background = data.background;
            css = {
              position: "absolute",
              top: final_x_axis,
              left: final_y_axis,
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              "z-index": "3",
              background: background,
            };
            data.timerhtmlcontent= data.timerhtmlcontent.replaceAll('value="00"','value="-"');
  QualzzJQuery("<span></span>")
              .css(css)
              .append(data.timerhtmlcontent)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.timerhtmlcontent)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "consent") {
            data = child_data.children[i];

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var background = data.background;
            css = {
              position: "absolute",
              top: final_x_axis,
              left: final_y_axis,
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              "z-index": "3",
              "background-color": background,
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.outerHTML)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "checkboxes") {
            data = child_data.children[i];

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var background = data.background;
            css = {
              position: "absolute",
              top: final_x_axis,
              left: final_y_axis,
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              "z-index": "3",
              background: background,
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.outerHTML)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "radio_button") {
            data = child_data.children[i];

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var background = data.background;
            css = {
              position: "absolute",
              top: final_x_axis,
              left: final_y_axis,
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              "z-index": "3",
              background: background,
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.outerHTML)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }

          if (child_data.children[i].id == "drop-down") {
            data = child_data.children[i];

            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var label = data.label;
            var width = data.width;
            var background = data.background;
            css = {
              position: "absolute",
              top: final_x_axis,
              left: final_y_axis,
              width: data.width,
              height: data.height,
              "overflow-wrap": "overflow-wrap",
              "line-height": "1.42857",
              "font-weight": "normal",
              display: "block",
              float: "none",
              color: "none",
              "z-index": "3",
              background: background,
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.outerHTML)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }

          if (child_data.children[i].id == "socialLink") {
            data = child_data.children[i];
            //Added 3 px as issue with social link top
            var final_x_axis = parseFloat(data.positionxaxis) + 3 + "px";
            var final_y_axis = data.positionyaxis + "";
            css = {
              position: "absolute",
              top: final_x_axis,
              left: final_y_axis,
            };
            QualzzJQuery("<span></span>")
              .css(css)
              .append(data.htmlcontent)
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].id == "img") {
            data = child_data.children[i];
            var data_x = parseInt(data.positionxaxis, 10);
            var data_y = parseInt(data.positionyaxis, 10);
            var body_x = parseInt(body.positionxaxis, 10);
            var body_y = parseInt(body.positionyaxis, 10);
            var imageBaseUrl = gloabalImageAPI + "/campaign/";
            var imageUrl = imageBaseUrl + data.imagename;
            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var border_width = data.borderwidth;
            var border_color = data.bordercolor;
            var border_radius = data.borderradius;
            var newheight = parseInt(data.height) + 2;
            var newwidth = parseInt(data.width) + 2;

            var imgborder = border_width + " solid " + border_color;
            var myImage = QualzzJQuery("<img/>");
            myImage.attr("id", "img");
            myImage.attr("src", imageUrl);
            myImage.attr("imagename", data.imagename);
            myImage.attr("onclick", data.onclick);
            myImage
              .css({
                margin: "0",
                float: "none",
                border: "none",
                "padding-left": data.paddingleft,
                "padding-right": data.paddingright,
                height: newheight,
                width: newwidth,
                "padding-top": data.paddingtop,
                "padding-bottom": data.paddingbottom,
                position: data.position,
                top: final_x_axis,
                left: final_y_axis,
                border: imgborder,
                "border-radius": border_radius,
              })
              .appendTo(QualzzJQuery("#frameone" + json.campaignid));
          }
          if (child_data.children[i].type == "button") {
            data = child_data.children[i];
            var id = data.id;
            var event = data.event;
            var border = "";
            var Styleclass;
            if (data.class == undefined) {
              Styleclass = "flat";
            } else {
              Styleclass = data.class;
            }
            var buttonlabel = data.buttonlabel;
            var final_x_axis = data.positionxaxis + "";
            var final_y_axis = data.positionyaxis + "";
            var font_family = data.font_family;
            var font = data.fontsize; /// Added
            var fontfamily = data.fontfamily;
            var color = data.color;
            var appliedStyle = data.style;
            var outline_data = "none";
            var borderradius = 0;
            var borderdata;
            var underline = "none";
            if (appliedStyle == undefined) {
              appliedStyle = "";
            }
            if (data.border_radius == undefined) {
              if (appliedStyle.split("border-radius:").length > 1) {
                borderradius = appliedStyle
                  .split("border-radius:")[1]
                  .split(";")[0];
              }
            } else {
              borderradius = data.border_radius;
            }
            if (appliedStyle.split("text-decoration:").length > 1) {
              underline = appliedStyle
                .split("text-decoration:")[1]
                .split(";")[0];
            }
            css = {
              position: "absolute",
              top: final_x_axis,
              left: final_y_axis,
            };
            if (appliedStyle.split("border:").length > 1) {
              border = appliedStyle.split("border:")[1].split(";")[0];
            }
            if (appliedStyle.split("outline:").length > 1) {
              border = "2px solid blue";
            }
            borderdata = "0px";
            if (data.class == "outLine") {
              borderdata = "2px solid " + data.bordercolor;
            } else {
              borderdata = "0px solid";
            }
            var classname;
            if (data.event == "Close") {
              classname = "button-close" + json.campaignid;
            } else if (data.event == "Submit") {
              classname = "button-submit" + json.campaignid;
            } else if (data.event == "Next") {
              classname = "button-next" + json.campaignid;
            } else if (data.event == "Redirect") {
              classname = "button-redirect" + json.campaignid;
            }
            var zindex = 1;
            if (data.class == "gradient") {
              var backgroundcolorgradiant =
                "linear-gradient(" + data.linearbackground + ", white)";
              QualzzJQuery("<button>")
                .attr({
                  value: "Button",
                  // onclick: data.onclick,
                  class: classname,
                  "url":data.onclick
                })
                .html("Button")
                .css({
                  display: "inline-block",
                  border: data.border,
                  zindex: zindex,
                  "font-size": font,
                  "font-family": fontfamily,
                  "border-radius": borderradius,
                  color: color,
                  background: backgroundcolorgradiant,
                  position: data.position,
                  top: final_x_axis,
                  left: final_y_axis,
                  width: data.width,
                  height: data.height,
                  // "padding-left": data.paddingleft,
                  // "padding-right": data.paddingright,
                  "text-decoration": underline,
                  // "padding-top": data.paddingtop,
                  "cursor":"pointer",
                  // "padding-bottom": data.paddingbottom,
                  'display' : 'flex',
                  'flex-direction' : 'column',
                  'justify-content' : 'center',
                  'align-items' : 'center',
                  outline: outline_data,
                })
                .text(buttonlabel)
                .appendTo(QualzzJQuery("#frameone" + json.campaignid));
            } else {
              QualzzJQuery("<button>")
                .attr({
                  value: "Button",
                  "url":data.onclick,
                  class: classname,

                })
                .html("Button")
                .css({
                  display: "inline-block",
                  border: data.border,
                  "font-size": font,
                  zindex: zindex,
                  "font-family": fontfamily,
                  "border-radius": borderradius,
                  color: color,
                  background: data.backgroundcolor,
                  position: data.position,
                  top: final_x_axis,
                  left: final_y_axis,
                  width: data.width,
                  height: data.height,
                  // "padding-left": data.paddingleft,
                  // "padding-right": data.paddingright,
                  "text-decoration": underline,
                  // "padding-top": data.paddingtop,
                  "cursor":"pointer",
                  // "padding-bottom": data.paddingbottom,
                  'display' : 'flex',
                  'flex-direction' : 'column',
                  'justify-content' : 'center',
                  'align-items' : 'center',
                  outline: outline_data,
                })
                .text(buttonlabel)
                .appendTo(QualzzJQuery("#frameone" + json.campaignid));
            }
          }
        }
      }

      iframecreation(json, brandingimg);
    }
    // }
  }
}
function extractRootDomain(url) {
  var hostname;
  if (url.indexOf("://") > -1) {
    hostname = url.split("/")[2];
  } else {
    hostname = url.split("/")[0];
  }
  hostname = hostname.split(":")[0];
  hostname = hostname.split("?")[0];
  return hostname;
}
function assignCenterPositionMobile(dataposition, positiondata, json, scale) {

  if (
    dataposition == "bottomleft" ||
    dataposition == "bottomright" ||
    dataposition == "bottomcenter"
  ) {
    setPositionForMobile(positiondata, json.campaignid, scale);
    
    frame_div =
      "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
      json.campaignid +
      "' style='background-color:" +
      background +
      ";overflow:hidden;width:" +
      width +
      ";height:" +
      height +
      ";bottom:0;border:" +
      frmBorder +
      ";border-radius:" +
      border_radius +
      ";position:fixed ;left:0;right:0;margin:auto;bottom:-50px;transform:scale(" +
      scale +
      ")'>" +
      html_data +
      "</div></body>";
    var calculatewidth =
      (parseInt(width) + 2 * parseInt(frmBorder)) * scale + 10 - 100 + "px";
    var calculateheightbottom =
      parseInt(height) * scale + (2 * parseInt(frmBorder) + 20) + "px";
    var brandingimg =
      '<div style="bottom:' +
      calculateheightbottom +
      ";left:" +
      calculatewidth +
      ';height: 20px;position:absolute;z-index:9999"  id="brandingtheme' +
      json.campaignid +
      '"><div><img src="' +
      gloabalImageAPI +
      '/powered.png" id="brandingimg" style="height:30px;width:100px;"></div></div>';
  } else if (
    dataposition == "topright" ||
    dataposition == "topleft" ||
    dataposition == "topcenter"
  ) {
    setPositionForMobile(positiondata, json.campaignid, scale);
    
    frame_div =
      "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
      json.campaignid +
      "' style='background-color:" +
      background +
      ";overflow:hidden;width:" +
      width +
      ";height:" +
      height +
      ";border:" +
      frmBorder +
      ";border-radius:" +
      border_radius +
      ";position:fixed ;left:0;right:0;margin:auto;top:-10%;transform:scale(" +
      scale +
      ")'>" +
      html_data +
      "</div></body>";
    var heightdata =
      (parseInt(height) + 2 * parseInt(frmBorder)) * scale + "px";
    var screenone = screen.width;
    var center = (screenone / 10) * 4.2;
    var newwidth = parseInt(width) / 2;
    // console.log("center", center, " ", newwidth);
    var calculatesize = (center + newwidth) * scale + 10 + "px";
    var brandingimg =
      '<div style="top:' +
      heightdata +
      ";left:" +
      calculatesize +
      ';height: 20px;position:absolute;z-index:9999"  id="brandingtheme' +
      json.campaignid +
      '"><div><img src="' +
      gloabalImageAPI +
      '/powered.png" id="brandingimg" style="height:30px;width:100px;"></div></div>';
  } else {
    setPositionForMobile(positiondata, json.campaignid, scale);
    
    frame_div =
      "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
      json.campaignid +
      "' style='background-color:" +
      background +
      ";overflow:hidden;width:" +
      width +
      ";height:" +
      height +
      ";border:" +
      frmBorder +
      ";border-radius:" +
      border_radius +
      ";position:fixed ;    position: fixed;left: 0;right: 0; margin: auto;transform:scale(" +
      scale +
      ")'>" +
      html_data +
      "</div></body>";
    var screenheight = screen.height;
    var centerheight = (screenheight / 10) * 4.5;
    var newheight = parseInt(height) / 2;
    // console.log("center", centerheight, " ", newheight);
    var calculatesizetop = (centerheight + newheight) * scale + "px";
    var screenwidth = screen.width;
    var centerwidth = (screenwidth / 10) * 4.2;
    var newwidth = parseInt(width) / 2;

    var calculatesizeleft = (centerwidth + newwidth) * scale + "px";
    var brandingimg =
      '<div style="top:' +
      calculatesizetop +
      ";left:" +
      calculatesizeleft +
      ';height: 20px;position:absolute;z-index:9999"  id="brandingtheme' +
      json.campaignid +
      '"><div><img src="' +
      gloabalImageAPI +
      '/powered.png" id="brandingimg" style="height:30px;width:100px;"></div></div>';
  }
}
function getDevice() {
  if (navigator.userAgent.match(/Tablet|iPad/i)) {
    device = "tablet";
  } else if (
    navigator.userAgent.match(
      /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
    )
  ) {
    device = "mobile";
  } else {
    device = "desktop";
  }
}

const conversionTable = {
  seconds: 1000,
  minutes: 60*1000,
  hours: 60*60*1000,
  days: 24*60*60*1000,
};
const convertTime = (opts) => 
  Object.keys(opts).reduce((fin, timeKey) => (
    fin + opts[timeKey] * conversionTable[timeKey]
  ), 0)
function iframecreation(json, brandingstatus) {
  var divsToHide = document.getElementsByClassName(json.campaignid); //divsToHide is an array
  for (var i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.visibility = "hidden"; // or
    divsToHide[i].style.display = "none"; // depending on what you're doing
  }
  assigningCampaignMainFrame(json);

    var doc = document.getElementById("framework" + json.campaignid).contentWindow
    .document;
  doc.open();



  var html_data = QualzzJQuery("#frameone" + json.campaignid).html();
  var positiondata = json.displayOptions.position;
  var background = QualzzJQuery("." + json.campaignid).css("background-color");
  var background_image = QualzzJQuery("." + json.campaignid).css(
    "background-image"
  );
  var backgroundAttr =
    ";background-repeat: no-repeat; background-size: 100% 100%;";
  var width = QualzzJQuery("." + json.campaignid).css("width");
  if(json.sizeName == 'Floating Bar'){
    width = "100%";
  }

  var height = QualzzJQuery("." + json.campaignid).css("height");
  var border_radius = QualzzJQuery("." + json.campaignid).css("border-radius");
   var timerDate = "";
   if(json.timerType == 'fixedtime'){
    if(json.timerTime){
      const [days,hours,minutes,seconds] = json.timerTime.split("-")
      var timerDate = new Date().getTime()+convertTime({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      })
    var qualzztimerObject =  {};
    qualzztimerObject = localStorage.getItem("qualzztimerObject"+json.campaignid) ?JSON.parse(localStorage.getItem("qualzztimerObject"+json.campaignid)):null;
  
      }
      if(!qualzztimerObject){
         qualzztimerObject = {
          starttime:new Date().getTime(),
          endtime:timerDate,
          // campaignId:json.campaignid
        }
        localStorage.setItem("qualzztimerObject"+json.campaignid,JSON.stringify(qualzztimerObject));
  
      }else{
        timerDate = qualzztimerObject.endtime;
      }
   }else {
    const [days,hours,minutes,seconds] = json.timerTime.split("-")
    var timerDate = new Date(json.timerDate).getTime()+convertTime({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    })
   }

  var data = "<script>";
  data += 'console.log("====",' + timerDate + ");";
  data += "if(" + timerDate + "!= null){";
  data += "var countDownDate = " + timerDate + ";";
  data += "var x = setInterval(function() {";
  data += "var now = new Date().getTime();";
  data += "var distance = countDownDate - now;";
  data += "var days = Math.floor(distance / (1000 * 60 * 60 * 24));";
  data +=
    "var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));";
  data +=
    "var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));";
  data += "var seconds = Math.floor((distance % (1000 * 60)) / 1000);";
  data += 'if(QualzzJQuery("#timer").length>0){';
  data += 'QualzzJQuery(".timerDay").val(days < 10? "0" + days: days);';
  data += 'QualzzJQuery(".timerHrs").val(hours < 10? "0" + hours: hours);';
  data +=
    'QualzzJQuery(".timerMin").val(minutes < 10? "0" + minutes: minutes);';
  data +=
    'QualzzJQuery(".timerSec").val(seconds < 10? "0" + seconds: seconds);';
  data += "if(days == 0){";
  data += 'QualzzJQuery(".timerDay").css("display","none");';
  data += 'QualzzJQuery(".seperator1").css("display","none");';
  data += 'QualzzJQuery(".timerDayIndicator").css("display","none");';
  data += 'QualzzJQuery(".seperatorIndicator1").css("display","none");';
  data += "}";
  data += "if(hours == 0){";
  data += "if(days == 0){";
  data += 'QualzzJQuery(".timerHrs").css("display","none");';
  data += 'QualzzJQuery(".seperator2").css("display","none");';
  data += 'QualzzJQuery(".timerHrsIndicator").css("display","none");';
  data += 'QualzzJQuery(".seperatorIndicator2").css("display","none");';
  data += "}";
  data += "}";
  // data+='if(minutes == 0){';
  // data+='QualzzJQuery(".timerMin").css("display","none");';
  // data+='QualzzJQuery(".seperator3").css("display","none");';
  // data+='QualzzJQuery(".timerMinIndicator").css("display","none");';
  // data+='QualzzJQuery(".seperatorIndicator3").css("display","none");';
  // data+='}';
  data += "}";
  data += "if (distance < 0) {";
  data += "clearInterval(x);";
  data += 'document.getElementById("timer").innerHTML = "EXPIRED";';
  data += "closeEXPIREDPopup(" + JSON.stringify(json) + ");";
  data += "}";
  data += "}, 1000);";
  data += "}";
  data += "</script>";

  var scriptcss =
    "<head><link href='https://fonts.googleapis.com/css?family=Rock+Salt' rel='stylesheet'><link href='https://fonts.googleapis.com/css?family=Butterfly+Kids|Raleway|Amaranth|Courgette|Dancing+Script|Emilys+Candy|Roboto|Rye|Lily+Script+One|Lobster+Two|The+Girl+Next+Door|Sacramento|Special+Elite|Ubuntu|Yellowtail' rel='stylesheet'><link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Arvo' /><link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Abril+Fatface' /><link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Tangerine' /><link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Old+Standard+TT' /><link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Josefin+Slab' /><link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Bitter' /><link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Bangers' /><link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'></head>";
  var nextbuttonscript =
    "<head><style>label p{display: block;-webkit-margin-before: 0px !important;-webkit-margin-after: 0px !important;-webkit-margin-start: 0px !important;-webkit-margin-end: 0px !important;}</style><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script><script src='" +
    serverPointTo +
    "/assets/trackingScript/eventaction.js' type='text/javascript'></script> <link rel='stylesheet'  href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'><link href='https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,700i,900,900i' rel='stylesheet'><script>function reassignEvent(){QualzzJQuery('#iframe" +
    json.campaignid +
    "').click(function(e){event(e," +
    JSON.stringify(json) +
    ");});QualzzJQuery('#iframe" +
    json.campaignid +
    "').keydown(function(e){console.log('Key down!'); });QualzzJQuery('#frameone" +
    json.campaignid +
    "').click(function(e){e.stopPropagation();});;QualzzJQuery('.button-close" +
    json.campaignid +
    "').click(function(e){ closePopup(" +
    JSON.stringify(json) +
    ");});QualzzJQuery('.button-redirect" +
    json.campaignid +
    "').click(function(e){ redirect(e,'"+json.campaignid+"');});QualzzJQuery('#frameone" +
    json.campaignid +
    "').click(function(e){e.stopPropagation();});QualzzJQuery('#brandingimgchild').mouseover(function(e){QualzzJQuery('#brandingimgchild').css({'color':'#788494'})});QualzzJQuery('#brandingimgchild').mouseout(function(e){QualzzJQuery('#brandingimgchild').css({'color':'lightsteelblue'})});QualzzJQuery('#frameone" +
    json.campaignid +
    "').mouseover(function(e){QualzzJQuery('.brandingtop').css({'display':'block'})});QualzzJQuery('#frameone" +
    json.campaignid +
    "').mouseout(function(e){QualzzJQuery('.brandingtop').css({'display':'none'})}); QualzzJQuery('.button-next" +
    json.campaignid +
    "').click(function(event){ displayNextPop(" +
    JSON.stringify(json) +
    ",'1');}); }</script><link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Bangers' rel='stylesheet'> <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'><script> QualzzJQuery( document ).ready(function() { reassignEvent();QualzzJQuery('#frameone" +
    json.campaignid +
    "').click();QualzzJQuery(document).keyup(function(e){ if(e.target.id=='email_text'){checkEmailValidation('"+json.campaignid+"');} if(e.keyCode==27){closePopup(" +
    JSON.stringify(json) +
    ");}});QualzzJQuery('.button-submit" +
    json.campaignid +
    "').click(function(e){submitData('" +
    json.campaignid +
    "'," +
    JSON.stringify(json) +
    ")});});</script>" +
    data +
    "</head>";
  var borderWidth = QualzzJQuery("." + json.campaignid).css("border-width");
  var frmBorder = QualzzJQuery("." + json.campaignid).css("border");
  var frmWidth =
    parseInt(width, 10) + parseInt(borderWidth, 10) + parseInt(borderWidth, 10);
  var frmHeight =
    parseInt(height, 10) +
    parseInt(borderWidth, 10) +
    parseInt(borderWidth, 10);
  var deviceHeight = screen.height;
  var deviceWidth = screen.width;
  getDevice();
  var scale =
    Math.min(
      parseInt(deviceWidth + "") / parseInt(frmWidth),
      parseInt(deviceHeight + "") / parseInt(frmHeight)
    ) + "";
  if (scale > 1) {
    scale = 1.0;
  }
  var jsonCampaign = JSON.parse(json.campaignJson);
  var retrivejson = jsonCampaign[0];
  var parsejsonretrieved = JSON.parse(retrivejson[0]);
  var fullscreen = parsejsonretrieved.fullscreen;
  if (fullscreen == "present") {
    positiondata = "middlecenter";
  }

  // if(parsejsonretrieved.folatingbarfullscreen && (!parsejsonretrieved.stick_header && !parsejsonretrieved.push_page_down)){
  //   // frmWidth =  parseInt(QualzzJQuery(window).width());
  //   width = parseInt(QualzzJQuery(window).width());
  //   // frmWidth;
  // }
  var frame_div;
  var brandingimg;
  var bottomval;

  if (json.sizeName == "Inline") {
    if (brandingstatus == "present") {
      if (device == "desktop") {
        popwidthdiv = width.replace("px", "");
        console.log(popwidthdiv);
        if(brandingtext && brandingURL){
          brandingimg =
          "<span class='branding' id=" +
          "brand-" +
          json.campaignid +
          "><div style='margin-left:" +
          (popwidthdiv - 80) / 2 +
          "px;padding-top:0px;margin-bottom: 12px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('"+brandingURL+"','_blank') id='brandingimgchild'>"+brandingtext+"</span></div></span>";
        }else{
        brandingimg =
          "<span class='branding' id=" +
          "brand-" +
          json.campaignid +
          "><div style='margin-left:" +
          (popwidthdiv - 80) / 2 +
          "px;padding-top:0px;margin-bottom: 12px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild'><img style='width: 70px;' src='" +
          serverPointTo +
          "/assets/images/logoname.png'></span></div></span>";
        }
        frame_div =
          "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
          json.campaignid +
          "' style='background-color:" +
          background +
          ";background-image:" +
          background_image +
          backgroundAttr +
          ";width:" +
          width +
          ";height:" +
          height +
          ";border:" +
          frmBorder +frameone
          ";overflow-y: auto !important; margin: auto;'>" +
          html_data +
          "</div></body>";
      } else {
        let leftForBranding =
          (parseInt(QualzzJQuery("#QZ-" + json.campaignid).css("width")) -
            140) /
            2 +
          14;
          if(brandingtext && brandingURL){
            brandingimg =
            "<span class='branding' id=" +
            "brand-" +
            json.campaignid +
            "><div style='margin-left:" +
            leftForBranding +
            "px;padding-top:0px;margin-bottom: 12px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('"+brandingURL+"','_blank') id='brandingimgchild'>"+brandingtext+"</span></div></span>";
          }else{
        brandingimg =
          "<span class='branding' id=" +
          "brand-" +
          json.campaignid +
          "><div style='margin-left:" +
          leftForBranding +
          "px;padding-top:0px;margin-bottom: 12px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild'><img style='width: 70px;' src='" +
          serverPointTo +
          "/assets/images/logoname.png'></span></div></span>";
          }

        frame_div =
          "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
          json.campaignid +
          "' style='background-color:" +
          background +
          ";background-image:" +
          background_image +
          backgroundAttr +
          ";width:100%;height:" +
          height +
          ";border:" +
          frmBorder +
          ";overflow-y: auto !important; margin: auto;'>" +
          html_data +
          "</div></body>";
      }

      // brandingimg =
      //   "<span class='branding'><div style='margin-left:" +
      //   (popwidthdiv - 80) / 2 +
      //   "px;padding-top:10px;margin-bottom: 12px;padding-top:0px;'><span style='border-radius: 3px;background-color:rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;padding-top: 2px;' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild'><img style='width: 70px;' src='"+serverPointTo+"/assets/images/logoname.png'></span></div></span>";
    } else {
      if (device == "desktop") {
        frame_div =
          "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
          json.campaignid +
          "' style='background-color:" +
          background +
          ";background-image:" +
          background_image +
          backgroundAttr +
          ";overflow:hidden;width:" +
          width +
          ";height:" +
          height +
          ";border:" +
          frmBorder +
          ";overflow-y: auto !important;  margin: auto;'>" +
          html_data +
          "</div></body>";
      } else {
        frame_div =
          "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
          json.campaignid +
          "' style='background-color:" +
          background +
          ";background-image:" +
          background_image +
          backgroundAttr +
          ";overflow:hidden;width:100%;height:" +
          height +
          ";border:" +
          frmBorder +
          ";overflow-y: auto !important;  margin: auto;'>" +
          html_data +
          "</div></body>";
      }
    }
  } else {
    if (positiondata == "bottomleft") {
      if (device == "mobile" || device == "tablet") {
        setPositionForMobile(positiondata, json.campaignid, scale);
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>"+brandingtext+"</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          ("<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -20px;text-align: center;'><div style='padding-top:10px;'><span style='font-size: 16px;color: lightsteelblue;font-family:cursive; !important;cursor:pointer;font-family: Georgia;' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild'><span style='font-weight:100'>powered by</span> <span style='font-weight:600'>Qualzz</span></span></div></span>");
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";bottom:0;border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ; bottom:23px; right:0;left:0;margin:auto;'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";bottom:0;border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ; bottom:0px; right:0;left:0;margin:auto;'>" +
            html_data +
            "</div></body>";
        }
      } else if (device == "desktop") {
        if (brandingstatus == "present") {
          bottomval = "23px";
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingtext+"','_blank')' id='brandingimgchild'>"+brandingURL+"</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;bottom:" +
            bottomval +
            ";left:0'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          bottomval = "0px";
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;bottom:" +
            bottomval +
            ";left:0'>" +
            html_data +
            "</div></body>";
        }
      }
    }
    if (positiondata == "bottomright") {
      if (device == "mobile" || device == "tablet") {
        setPositionForMobile(positiondata, json.campaignid, scale);
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>"+brandingtext+"</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ; bottom: 23px;right: 0;left:0;margin:auto; '>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";bottom:0;border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ; bottom: 0px;right: 0;left:0;margin:auto;'>" +
            html_data +
            "</div></body>";
        }
      } else if (device == "desktop") {
        if (brandingstatus == "present") {
          bottomval = "23px";
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>"+brandingtext+"</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;bottom:" +
            bottomval +
            ";right:0'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          bottomval = "0px";
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;bottom:" +
            bottomval +
            ";right:0'>" +
            html_data +
            "</div></body>";
        }
      }
    }

    if (positiondata == "bottomcenter") {
      if (device == "mobile" || device == "tablet") {
        setPositionForMobile(positiondata, json.campaignid, scale);
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>"+brandingtext+"</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";bottom:30px;border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ; bottom: 23px;left:0;right:0;margin:auto;'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";bottom:0px;border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ; bottom: 0px; left:0;right:0;margin:auto;'>" +
            html_data +
            "</div></body>";
        }
      } else if (device == "desktop") {
        var screenwidth = screen.width;
        var centerwidth = (screenwidth / 10) * 5;
        var newwidth = parseInt(width) / 2;
        var calculatesizeleft =
          centerwidth + newwidth + parseInt(frmBorder) + "px";
        if (brandingstatus == "present") {
          bottomval = "23px";
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>"+brandingtext+"</span></div></span>";
          }else{
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -24px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
        }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;transform: translate(-50%, 0%);left: 50%;bottom: " +
            bottomval +
            ";'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          bottomval = "0px";
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;  transform: translate(-50%, 0%);left: 50%;bottom: " +
            bottomval +
            ";'>" +
            html_data +
            "</div></body>";
        }
      }
    }
    if (positiondata == "topright") {
      if (device == "mobile" || device == "tablet") {
        setPositionForMobile(positiondata, json.campaignid, scale);
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>'"+brandingtext+"'</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ;left:0;right:0;top:0px;margin:auto;transform:scale(1)'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ;left:0;right:0;top:0px;margin:auto;transform:scale(1)'>" +
            html_data +
            "</div></body>";
        }
      } else if (device == "desktop") {
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>"+brandingtext+"</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;right:0px;top:0px;'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;right:0px;top:0px;'>" +
            html_data +
            "</div></body>";
        }
      }
    }
    if (positiondata == "topleft") {
      if (device == "mobile" || device == "tablet") {
        setPositionForMobile(positiondata, json.campaignid, scale);
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>"+brandingtext+"</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;right:0px;left:0;margin:auto;transform-origin:" +
            formorigin +
            ";transform:scale(1)'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;right:0px;left:0;margin:auto;transform-origin:" +
            formorigin +
            ";transform:scale(1)'>" +
            html_data +
            "</div></body>";
        }
      } else if (device == "desktop") {
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>"+brandingtext+"</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;left:0px;top:0px;'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;left:0px;top:0px'>" +
            html_data +
            "</div></body>";
        }
      }
    }
    if (positiondata == "topcenter") {
      if (device == "mobile" || device == "tablet") {
        setPositionForMobile(positiondata, json.campaignid, scale);
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>"+brandingtext+"</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;right:0px;left:0;margin:auto;transform-origin:" +
            formorigin +
            ";transform:scale(1)'>" +
            html_data +
            brandingimg +
            "</div></body>";

          // frame_div ="<body style='margin:0px;overflow:hidden;'><div id='frameone"+json.campaignid+"' style='background:"+background+";width:"+width+";height:"+height+";border:"+frmBorder+";border-radius:"+border_radius+";position:fixed ;left:0;right:0;top:0;margin:auto;transform:scale("+scale+")'>"+html_data+brandingimg+"</div></body>" ;
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ;left:0;right:0;top:0;margin:auto;transform:scale(" +
            scale +
            ")'>" +
            html_data +
            "</div></body>";
        }
      } else if (device == "desktop") {
        var heightdata = parseInt(height) + 2 * parseInt(frmBorder) + 5 + "px";
        var screenone = screen.width;
        var center = (screenone / 10) * 4.2;
        var newwidth = parseInt(width) / 2;
        // console.log("center", center, " ", newwidth);
        var calculatesize = center + newwidth + "px";
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>"+brandingtext+"</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;transform: translate(-50%, 0%);left: 50%;'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;transform: translate(-50%, 0%);left: 50%;'>" +
            html_data +
            "</div></body>";
        }
      }
    }
    if (positiondata == "middleleft") {
      if (device == "mobile" || device == "tablet") {
        setPositionForMobile(positiondata, json.campaignid, scale);
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>'"+brandingtext+"'</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ;right:0;left:0;top:0;bottom:0;margin:auto;transform-origin:" +
            formorigin +
            ";transform:scale(1)'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ;right:0;left:0;top:0;bottom:0;margin:auto;transform-origin:" +
            formorigin +
            ";transform:scale(1)'>" +
            html_data +
            brandingimg +
            "</div></body>";
        }
      } else if (device == "desktop") {
        var newleft =
          parseInt(width) + 2 * parseInt(frmBorder) + 5 - 100 + "px";
        var screenone = screen.height;
        var center = (screenone / 10) * 4.5;
        var newwidth = parseInt(height) / 2;
        // console.log("center", center, " ", newwidth);

        var calculatesize = center + newwidth + parseInt(frmBorder) + "px";
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>'"+brandingtext+"'</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;top:50%;left:0%;transform:translate(0px, -50%);'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;top:50%;left:0%;transform:translate(0px, -50%);'>" +
            html_data +
            "</div></body>";
        }
      }
    }
    if (positiondata == "middleright") {
      if (device == "mobile" || device == "tablet") {
        setPositionForMobile(positiondata, json.campaignid, scale);
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>'"+brandingtext+"'</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";

          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ;top: 0;left: 0; bottom:0;right:0;margin:auto;transform-origin:" +
            formorigin +
            ";transform:scale(1)'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed ;top: 0;left: 0;bottom:0;right:0;margin:auto;transform-origin:" +
            formorigin +
            ";transform:scale(1)'>" +
            html_data +
            "</div></body>";
        }
      } else if (device == "desktop") {
        if (brandingstatus == "present") {
          if(brandingtext && brandingURL){
          brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('"+brandingURL+"','_blank')' id='brandingimgchild'>'"+brandingtext+"'</span></div></span>";
          }else{
            brandingimg =
            "<span class='branding' style='height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick='window.open('https://qualzz.com','_blank')' id='brandingimgchild'><img style='width: 70px;' src='https://app.qualzz.com/assets/images/logoname.png'></span></div></span>";
          }
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;top:50%;right:0%;transform:translate(0px, -50%);'>" +
            html_data +
            brandingimg +
            "</div></body>";
        } else {
          frame_div =
            "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
            json.campaignid +
            "' style='background-color:" +
            background +
            ";background-image:" +
            background_image +
            backgroundAttr +
            ";overflow:hidden;width:" +
            width +
            ";height:" +
            height +
            ";border:" +
            frmBorder +
            ";border-radius:" +
            border_radius +
            ";position:fixed;top:50%;right:0%;transform:translate(0px, -50%);'>" +
            html_data +
            "</div></body>";
        }
      }
    }
    //middlecenter use diffrent branding way than others
    if (positiondata == "middlecenter") {
      if (device == "mobile" || device == "tablet") {
        setPositionForMobile(positiondata, json.campaignid, scale);
        if (parsejsonretrieved.enableFullScreenStatus == "present") {
          QualzzJQuery("#framework" + json.campaignid).css({
            "background-color": background,
            "background-image": background_image + backgroundAttr,
          });
          QualzzJQuery("#iframe" + json.campaignid).append(
            '<span id="imageFadeInb3da9d0f-8d2f-49bb-9a3c-ffb8e833a0d9" style="height:100%;width:100%;position:absolute;opacity:0.3;background-color:rgb(75, 45, 162)"></span>'
          );

          if (brandingstatus == "present") {
            if(brandingtext && brandingURL){
              brandingimg =
              "<span class='branding' " +
              "style='margin-top:" +
              parseInt(height) / 2 +
              "px;height: 30px;position: absolute;width: 100%;bottom: 0%;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild' onclick=window.open('"+brandingURL+"','_blank') id='brandingimgchild'>" +brandingtext+
              "</span></div></span>";
            }else{
            brandingimg =
              "<span class='branding' " +
              "style='margin-top:" +
              parseInt(height) / 2 +
              "px;height: 30px;position: absolute;width: 100%;bottom: 0%;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild'>" +
              "<img style='width: 70px;' src='" +
              serverPointTo +
              "/assets/images/logoname.png'>" +
              "</span></div></span>";
            }
            frame_div =
              "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
              json.campaignid +
              "' style='overflow:hidden;width:" +
              width +
              ";height:" +
              height +
              ";border:" +
              frmBorder +
              ";border-radius:" +
              border_radius +
              ";position:fixed ; position: fixed;left: 0;right: 0;top: 0;bottom:0;  ; margin: auto;transform:scale(" +
              scale +
              ")'>" +
              html_data +
              "</div></body>";
          } else {
            frame_div =
              "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
              json.campaignid +
              "' style='overflow:hidden;width:" +
              width +
              ";height:" +
              height +
              ";border:" +
              frmBorder +
              ";border-radius:" +
              border_radius +
              ";position:fixed ; position: fixed;left: 0;right: 0;top: 0;bottom:0;  margin: auto;transform:scale(" +
              scale +
              ")'>" +
              html_data +
              "</div></body>";
          }
        } else {
          if (brandingstatus == "present") {
            if(brandingtext && brandingURL){
            brandingimg =
              "<span class='branding' " +
              "style='margin-top:" +
              parseInt(height) / 2 +
              "px;top:50%;height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('"+brandingURL+"','_blank') id='brandingimgchild' onclick=window.open('"+brandingURL+"','_blank') id='brandingimgchild'>'"+brandingtext+"'</span></div></span>";
            }else{
            brandingimg =
              "<span class='branding' " +
              "style='margin-top:" +
              parseInt(height) / 2 +
              "px;top:50%;height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild'>" +
              "<img style='width: 70px;' src='" +
              serverPointTo +
              "/assets/images/logoname.png'>" +
              "</span></div></span>";
            }
            frame_div =
              "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
              json.campaignid +
              "' style='background-color:" +
              background +
              ";background-image:" +
              background_image +
              backgroundAttr +
              ";width:" +
              width +
              ";height:" +
              height +
              ";border:" +
              frmBorder +
              ";border-radius:" +
              border_radius +
              ";position:fixed ; position: fixed;left: 0;right: 0;top: 0;bottom:0;  ; margin: auto;transform:scale(" +
              scale +
              ")'>" +
              html_data +
              "</div></body>";
          } else {
            frame_div =
              "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
              json.campaignid +
              "' style='background-color:" +
              background +
              ";background-image:" +
              background_image +
              backgroundAttr +
              ";overflow:hidden;width:" +
              width +
              ";height:" +
              height +
              ";border:" +
              frmBorder +
              ";border-radius:" +
              border_radius +
              ";position:fixed ; position: fixed;left: 0;right: 0;top: 0;bottom:0;  margin: auto;transform:scale(" +
              scale +
              ")'>" +
              html_data +
              "</div></body>";
          }
        }
      } else if (device == "desktop") {

       // console.log(parsejsonretrieved);
        // console.log("json -->", parsejsonretrieved);
        if (parsejsonretrieved.enableFullScreenStatus == "present") {
          QualzzJQuery("#framework" + json.campaignid).css({
            "background-color": parsejsonretrieved.backgroundcolor,
          });

          if (brandingstatus == "present") {
            if(brandingtext && brandingURL){
              brandingimg =
              "<span class='branding' " +
              "style='margin-top:" +
              parseInt(height) / 2 +
              "px;top:50%;height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('"+brandingURL+"','_blank') id='brandingimgchild' onclick=window.open('"+brandingURL+"','_blank') id='brandingimgchild'>'"+brandingtext+"'</span></div></span>";
            }else{
            brandingimg =
              "<span class='branding' " +
              "style='margin-top:" +
              parseInt(height) / 2 +
              "px;top:50%;height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild'>" +
              "<img style='width: 70px;' src='" +
              serverPointTo +
              "/assets/images/logoname.png'>" +
              "</span></div></span>";
            }
            frame_div =
              "<body style='margin:0px;overflow:hidden;'>" +
              brandingimg +
              "<div id='frameone" +
              json.campaignid +
              "' style='width:" +
              width +
              ";height:" +
              height +
              ";border:" +
              frmBorder +
              ";border-radius:" +
              border_radius +
              ";position:fixed;top:50%;right:0%;transform:translate(0px, -50%);top:50%;left:50%;transform:translate(-50%, -50%);'>" +
              html_data +
              "</div></body>";
          } else {
            frame_div =
              "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
              json.campaignid +
              "' style='overflow:hidden;width:" +
              width +
              ";height:" +
              height +
              ";border:" +
              frmBorder +
              ";border-radius:" +
              border_radius +
              ";position:fixed;top:50%;right:0%;transform:translate(0px, -50%);top:50%;left:50%;transform:translate(-50%, -50%);'>" +
              html_data +
              "</div></body>";
          }
        } else {
          if (brandingstatus == "present") {
            if(brandingtext && brandingURL){
              brandingimg =
              "<span class='branding' " +
              "style='margin-top:" +
              parseInt(height) / 2 +
              "px;top:50%;height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('"+brandingURL+"','_blank') id='brandingimgchild' onclick=window.open('"+brandingURL+"','_blank') id='brandingimgchild'>"+brandingtext+"</span></div></span>";
            }else{
            brandingimg =
              "<span class='branding' " +
              "style='margin-top:" +
              parseInt(height) / 2 +
              "px;top:50%;height: 30px;position: absolute;width: 100%;bottom: -30px;text-align: center;'><div style='padding-top:10px;'><span style='border-radius: 3px;background-color: rgba(154, 148, 148, 0.35);width: 140px;padding: 3px 20px;cursor: pointer;' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild' onclick=window.open('https://qualzz.com','_blank') id='brandingimgchild'>" +
              "<img style='width: 70px;' src='" +
              serverPointTo +
              "/assets/images/logoname.png'>" +
              "</span></div></span>";
            }

            frame_div =
              "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
              json.campaignid +
              "' style='background-color:" +
              background +
              ";background-image:" +
              background_image +
              backgroundAttr +
              ";width:" +
              width +
              ";height:" +
              height +
              ";border:" +
              frmBorder +
              ";border-radius:" +
              border_radius +
              ";position:fixed;right:0%; max-height: 90vh !important;box-shadow: rgb(34, 34, 34) 0px 1px 20px 0px;overflow-y: auto !important;top:50%;left:50%;transform:translate(-50%, -50%);'>" +
              html_data +
              "</div> </body>";
          } else {
            frame_div =
              "<body style='margin:0px;overflow:hidden;'><div id='frameone" +
              json.campaignid +
              "' style='background-color:" +
              background +
              ";background-image:" +
              background_image +
              backgroundAttr +
              ";overflow:hidden;width:" +
              width +
              ";height:" +
              height +
              ";border:" +
              frmBorder +
              ";border-radius:" +
              border_radius +
              ";position:fixed;top:50%;right:0%;transform:translate(0px, -50%);top:50%;left:50%;transform:translate(-50%, -50%);'>" +
              html_data +
              "</div></body>";
          }
        }
      }
    }
  }
  var frameonediv;
  if (json.sizeName == "Inline") {
    if (brandingstatus == "present") {
      QualzzJQuery("#frameone" + json.campaignid).css({
        height: "90% !important",
      });
      frameonediv =
        "<div id='iframe" +
        json.campaignid +
        "' style='width:100%;height:90%;'>" +
        frame_div +
        "</div>";
    } else {
      frameonediv =
        "<div id='iframe" +
        json.campaignid +
        "' style='width:100%;height:100%;'>" +
        frame_div +
        "</div>";
    }
  } else {
    if (brandingstatus == "present") {
      QualzzJQuery("#frameone" + json.campaignid).css({
        height: "90% !important",
      });
      frameonediv =
        "<div id='iframe" +
        json.campaignid +
        "' style='width:100%;height:90%;'>" +
        frame_div +
        brandingimg +
        "</div>";
    } else {
      frameonediv =
        "<div id='iframe" +
        json.campaignid +
        "' style='width:100%;height:100%;'>" +
        frame_div +
        "</div>";
    }
  }

  doc.write(scriptcss);
  doc.write(nextbuttonscript);
  // doc.write(frame_div);
  doc.write(
    "<form id='iframe" + json.campaignid + "'>" + frameonediv + "</form>"
  );
  // console.log(background);

  doc.close();
  document.getElementById("framework" + json.campaignid).contentWindow.focus();
  if (json.sizeName == "Inline") {
    QualzzJQuery("#QZ-" + json.campaignid).append(brandingimg);
  }
  var data = JSON.parse(json.campaignJson);
  var body = data[0];
  var tabdata = JSON.parse(body[2]);
  var tabbackgroundcolor = tabdata.tabbackgroundcolor;
  var tabattribute = tabdata.tabattribute;
  var tabclass = tabdata.tabclass;
  var tabtextcolor = tabdata.tabtextcolor;
  var tabtextcontent = tabdata.tabtextcontent;
  this.backgroundColorTabs = tabbackgroundcolor;
  this.tabTextColor = tabtextcolor;
  var animation = json.displayOptions.effect;

  if (tabattribute == undefined && animation != null) {
    if (animation == "slideIn") {
      QualzzJQuery("#framework" + json.campaignid).slideDown(2000);
    } else if (animation == "fadeIn" || animation == "Fade In") {
      QualzzJQuery("#framework" + json.campaignid).fadeIn(1000);
    } else if (animation == "slow" || animation == "Slow") {
      QualzzJQuery("#framework" + json.campaignid).fadeIn(2000);
    } else {

      if((json.sizeName == 'Floating Bar' || json.sizeName == 'Fullscreen')&& (JSON.parse(body[0])['push_page_down'])){
        let _postion =  (JSON.parse(body[0])['stick_header'])?'fixed':'relative';
         QualzzJQuery("#framework" + json.campaignid).slideToggle("fast");
        if(_postion == "fixed"){
          window.parent.document.body.style. paddingTop = height;
        }
      }else{
        QualzzJQuery("#framework" + json.campaignid).fadeIn("fast");
      }

    }
  }
  if (animation == null) {
    QualzzJQuery("#framework" + json.campaignid).fadeIn("fast");
  }
  var my_div_two = "<div id='cornertabs" + json.campaignid + "'></div>";
  QualzzJQuery("body").append(my_div_two);
  if (this.tabTextColor == undefined) {
    this.tabTextColor = "black";
  }

  if (tabtextcontent == undefined || tabtextcontent == " ") {
    tabtextcontent = "";
    var campaignId = json.campaignid;
    setTimeout(function () {
      var CheckIfVisitorExistOrNot = "userExist" + json.campaignid;
      var TimeAccessed = "timeaccessed" + json.campaignid;
      var CheckIfVisitorExist = localStorage.getItem(CheckIfVisitorExistOrNot);
      var visitorState;
      var date = new Date();
      var time = date.getTime();
      if (CheckIfVisitorExist == "true") {
        visitorState = "repeated";
        localStorage.setItem(CheckIfVisitorExistOrNot, true);
        localStorage.setItem(TimeAccessed, time);
      } else {
        visitorState = "new";
        localStorage.setItem(CheckIfVisitorExistOrNot, true);
        localStorage.setItem(TimeAccessed, time);
      }
      var referer = document.referrer;
      var referralSource;
      if (referer.length > 0) {
        referralSource = extractRootDomain(referer);
      } else {
        referralSource = null;
      }
      if (referralSource == "t.co") {
        referralSource = "www.twitter.com";
      }
      // console.log("Referrer is", referralSource);  
      var obj = {
        campaignId: campaignId,
        location: userCity,
        country: userCountry,
        visitor: visitorState,
        visitorSource: referralSource,
        convertingPageUrl: ipIfoResponse.url,
      };
      // getClientInfo();
      // console.log(visitorjs());
      QualzzJQuery.ajax({
        url: gloabalAddressAPI + "/user/campaign/Targeting",
        type: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {},
      });
    }, 1000);
  }
  QualzzJQuery("#cornertabs" + json.campaignid).removeAttr("style");
  QualzzJQuery("#text-name" + json.campaignid).removeAttr("style");
  if (tabdata != null) {
    if (
      !navigator.userAgent.match(
        /Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i
      )
    ) {
      if (tabattribute != undefined) {
        if (tabclass != "") {
          if (
            tabattribute == "mobiletop" ||
            tabattribute == "mobilebottom" ||
            tabattribute == "notab"
          ) {
            tabattribute = tabclass;
          } else {
          }
        }
        var divsToHide = document.getElementsByClassName(json.campaignid); //divsToHide is an array
        for (var i = 0; i < divsToHide.length; i++) {
          divsToHide[i].style.visibility = "hidden"; // or
          divsToHide[i].style.display = "none"; // depending on what you're doing
        }
        // QualzzJQuery('.' + json.campaignid).hide();
        QualzzJQuery("#framework" + json.campaignid).hide();
        QualzzJQuery("#frameone" + json.campaignid).hide();
        AttributeCheck(json, tabattribute);
      }
    } else {
      if (tabattribute != undefined) {
        var divsToHide = document.getElementsByClassName(json.campaignid); //divsToHide is an array
        for (var i = 0; i < divsToHide.length; i++) {
          divsToHide[i].style.visibility = "hidden"; // or
          divsToHide[i].style.display = "none"; // depending on what you're doing
        }
        // QualzzJQuery('.' + json.campaignid).hide();
        QualzzJQuery("#framework" + json.campaignid).hide();
        QualzzJQuery("#frameone" + json.campaignid).hide();
        // console.log("Tab Atrribute", tabattribute);
        AttributeCheck(json, tabattribute);
        // End of commentedcode which was removed
        QualzzJQuery("#text-name" + json.campaignid).css({
          color: this.tabTextColor,
        });
        onPageReload(json.campaignid, animation);
      }
    }
    if (tabattribute == "notab") {
      QualzzJQuery("#framework" + json.campaignid).show();
      QualzzJQuery("#cornertabs" + json.campaignid).removeAttr("style");
    }
  } else {
  }
}

var formorigin;
function setPositionForMobile(data, id, scale) {
  // console.log(data);
  if (data == "bottomcenter") {
    QualzzJQuery("#framework" + id).css("transform-origin", "right bottom 0px");
    formorigin = "right bottom 0px";
  } else if (data == "topleft") {
    // QualzzJQuery('#framework'+id).css('transform','scale('+ scale +')');
    // QualzzJQuery('#framework'+id).css('transform-origin', 'left top 0px');
    // formorigin = 'left top 0px';
  } else if (data == "topcenter") {
    QualzzJQuery("#framework" + id).css("transform-origin", "left top 0px");
    formorigin = "left top 0px";
  } else if (data == "topright") {
    // QualzzJQuery('#framework'+id).css('transform','scale('+ scale +')');
    QualzzJQuery("#framework" + id).css("transform-origin", "right top 0px");
    formorigin = "right top 0px";
  } else if (data == "bottomleft") {
    // QualzzJQuery('#framework'+id).css('transform','scale('+ scale +')');
    // QualzzJQuery('#framework'+id).css('transform-origin', 'left bottom 0px');
    QualzzJQuery("#framework" + id).css({
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
    });
    // formorigin = 'left bottom 0px';
  } else if (data == "bottomright") {
    QualzzJQuery("#framework" + id).css({
      left: "0",
      right: "0",
      margin: "auto",
    });
    // QualzzJQuery('#framework'+id).css('transform-origin', 'right bottom 0px');
    // formorigin = 'right bottom 0px';
  } else if (data == "middleleft") {
    // QualzzJQuery('#framework'+id).css({'transform':'scale('+ scale +')',"top":"40%"});
    // QualzzJQuery('#framework'+id).css('transform-origin', 'left top 0px');
    QualzzJQuery("#framework" + id).css({
      left: "0",
      right: "0",
      bottom: "0",
      top: "0",
      margin: "auto",
    });
    // formorigin = 'left top 0px';
  } else if (data == "middleright") {
    QualzzJQuery("#framework" + id).css({
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
    });
    // QualzzJQuery('#framework'+id).css('transform-origin', 'right top 0px');
    // formorigin = 'right top 0px';
  } else if (data == "middlecenter") {
    QualzzJQuery("#framework" + id).css({
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
      transform: "",
    });
    QualzzJQuery("#iframe" + id).css({
      width: "fit-content",
      height: "fit-content",
      position: "fixed",
      top: "0",
      bottom: "0",
      margin: "auto",
      transform: "scale(" + scale + ")",
    });

    // formorigin = 'left top 0px';
  }
}
function assigningCampaignMainFrame(json) {
  QualzzJQuery("#framework" + json.campaignid).remove();
  QualzzJQuery("#cornertabs" + json.campaignid).remove();
  var data = JSON.parse(json.campaignJson);
  var body = data[0];
  var tabdata = JSON.parse(body[2]);
  var tabbackgroundcolor = tabdata.tabbackgroundcolor;
  var tabattribute = tabdata.tabattribute;
  var width = QualzzJQuery("." + json.campaignid).css("width");
  var height = QualzzJQuery("." + json.campaignid).css("height");
  var top = QualzzJQuery("." + json.campaignid).css("top");
  var left = QualzzJQuery("." + json.campaignid).css("left");
  var right = QualzzJQuery("." + json.campaignid).css("right");
  var bottom = QualzzJQuery("." + json.campaignid).css("bottom");
  var position = QualzzJQuery("." + json.campaignid).css("position");
  var transformtranslate = QualzzJQuery("." + json.campaignid).css("transform");
  var animation = json.displayOptions.effect;

  var positiondata = json.displayOptions.position;
  var borderWidth = QualzzJQuery("." + json.campaignid).css("border-width");
  var frmBorder = QualzzJQuery("." + json.campaignid).css("border");
  var frmWidthformobile = parseInt(width, 10);
  var frmHeightformobile = parseInt(height, 10);

  var newbody = JSON.parse(body[0]);

  var fullscreen = newbody.fullscreen;

// if(json.sizeName == "Floating Bar")
// {
// fullscreen = "present";
// newbody.fullscreen ="present";
// }
  var overlaycolor = newbody.overlaybackgroundcolor;
  let bgColor = newbody.backgroundcolor;
  var frmWidth = "100%";
  var frmHeight = "100%";

  // var frmWidth ="500px";
  // var frmHeight ="250px";
  // var frmWidth = (parseInt(newbody.width)+(2*parseInt(newbody.borderwidth)))+"px";
  // var frmHeight = (parseInt(newbody.height)+(2*parseInt(newbody.borderwidth)))+"px";
  // console.log("new ", frmWidth, "height", frmHeight);
  // var backgroundoverlaycolor = "rgba(0,0,0,0.5)";x
  var frameonewidth = parseFloat(newbody.width);
  var frameoneheight = parseFloat(newbody.height);
  var windowheight = parseInt(QualzzJQuery(window).height());
  var windowwidth = parseInt(QualzzJQuery(window).width());
 
  var scalevaluex;
  var scalevaluey;
let local_position = json.displayOptions.position;

  if (json.sizeName == "Inline" && device == "desktop") {
    var data =
      " <iframe id='framework" +
      json.campaignid +
      "' style='width: " +
      width +
      ";height:" +
      height +
      ";box-shadow: 0px 1px 20px 0px #222222;border: none;position: " +
      ";z-index:10000;display:none;transform:" +
      "background-color:" +
      backgroundoverlaycolor +
      "'></iframe>";
    console.log(QualzzJQuery("#QZ-" + json.campaignid));
    QualzzJQuery("#QZ-" + json.campaignid).append(data);
  } else if (json.sizeName == "Inline") {
    var data =
      " <iframe id='framework" +
      json.campaignid +
      "' style='width:100%;height:" +
      height +
      ";box-shadow: 0px 1px 20px 0px #222222;border: none;position: " +
      ";z-index:10000;display:none;transform:" +
      "background-color:" +
      backgroundoverlaycolor +
      "'></iframe>";
    console.log(QualzzJQuery("#QZ-" + json.campaignid));
    QualzzJQuery("#QZ-" + json.campaignid).append(data);

  } else if((json.sizeName == "Floating Bar" || json.sizeName == "Fullscreen") && newbody.push_page_down && local_position !="bottomcenter"){

    let _postion =  newbody.stick_header?'fixed':'relative'
    var data =
      " <iframe id='framework" +
      json.campaignid +
      "' style='width:100%;height:" +
      height +
      ";box-shadow: 0px 1px 20px 0px #222222;border: none;left:-1px;position:" + _postion+
      ";z-index:10000001;top:0px;display:none;top: 0px;margin-bottom: -10px;" +
      "background-color:" +
      bgColor +
      "'></iframe>";
       var animation = json.displayOptions.effect;

      if(_postion == "fixed" && animation != "none" && animation != null){

        window.parent.document.body.style. paddingTop = height;
      }
    QualzzJQuery("body").prepend(data);
  }
  else if((json.sizeName == "Floating Bar" || json.sizeName == "Fullscreen") && newbody.stick_header && local_position !="bottomcenter"){
    let _postion =  'fixed';
    var data =
      " <iframe id='framework" +
      json.campaignid +
      "' style='width:100%;height:" +
      height +
      ";box-shadow: 0px 1px 20px 0px #222222;border: none;left:-1px;position:" + _postion+
      ";z-index:10000001;top:0px;display:none;overflow:hidden;top: 0px;margin-bottom: -10px;" +
      "background-color:" +
      bgColor +
      "'></iframe>";
      if(_postion == "fixed"){
        window.parent.document.body.style.paddingTop = height;
      }
    QualzzJQuery("body").prepend(data);
  }
  else if(newbody.folatingbarfullscreen && (!newbody.stick_header && !newbody.push_page_down) && local_position !="bottomcenter"){

    let _postion =  'fixed';
    var data =
      " <iframe id='framework" +
      json.campaignid +
      "' style='width:100%;height:" +
      height +
      ";box-shadow: 0px 1px 20px 0px #222222;border: none;left:-1px;position:" + _postion+
      ";z-index:10000001;top:0px;display:none;overflow:hidden;top: 0px;" +
      "background-color:" +
      bgColor +
      "'></iframe>";
    QualzzJQuery("body").prepend(data);
  }
  else if(newbody.folatingbarfullscreen && local_position =="bottomcenter"){



    var data =
    " <iframe id='framework" +
    json.campaignid +
    "' style='left:0px;width: 100%;height:" +
    height +
    ";position: " +
    position +
    ";top: " +
    top +
    ";bottom:" +
    bottom +
    ";border:none;z-index:10000001;background-color:" +
    bgColor +
    "'></iframe>"; QualzzJQuery("body").append(data);
  }
  else {
    if (fullscreen == "present") {
      var scalevaluex = windowwidth / frameonewidth;
      var scalevaluey = windowheight / frameoneheight;
    } else {
      scalevaluex = 1;
      scalevaluey = 1;
    }

    var backgroundoverlaycolor;

    if (newbody.overlaystatus == "present") {
      if (newbody.overlaybackgroundcolor == "rgba(0, 0, 0, 0)") {
        // overlay removed
        //backgroundoverlaycolor = "rgba(0,0,0,0.5)";
      } else {
        backgroundoverlaycolor = newbody.overlaybackgroundcolor;
      }
    }

    if (
      animation == "fadeIn" || animation == "Fade In" ||
      animation == "slow" || animation == "Slow" ||
      animation == "slideIn"
    ) {
      if (positiondata == "topleft" || positiondata == "bottomleft") {
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: " +
          top +
          ";bottom:" +
          bottom +
          ";border:none;left:" +
          left +
          ";right:" +
          right +
          ";z-index:10000;display:none;transform:" +
          transformtranslate +
          " scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ");background-color:" +
          backgroundoverlaycolor +
          "'></iframe>";
        QualzzJQuery("body").append(data);
      } else if (
        positiondata == "middleleft" ||
        positiondata == "middleright"
      ) {
        // var data = " <iframe id='framework"+json.campaignid+"' style='width: "+frmWidth+";height:"+frmHeight+";position: "+position+";top: "+top+";bottom:"+bottom+";border:none;left:"+left+";right:"+right+";z-index:10000;display:none;transform: translate(0px, -50%) scale("+ scalevaluex+","+scalevaluey +");background:"+backgroundoverlaycolor +"'></iframe>";
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: 0;bottom:" +
          bottom +
          ";border:none;left:" +
          left +
          ";right:" +
          right +
          ";z-index:10000;display:none;transform:  scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ");background-color:" +
          backgroundoverlaycolor +
          "'></iframe>";

        QualzzJQuery("body").append(data);
      } else if (
        positiondata == "bottomcenter" ||
        positiondata == "topcenter"
      ) {var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
         frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: " +
          top +
          ";bottom:" +
          bottom +
          ";border:none;left:" +
          left +
          ";right:" +
          right +
          ";z-index:10000;display:none;transform: translate(-50%, 0) scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ");background-color:" +
          backgroundoverlaycolor +
          "'></iframe>";
        QualzzJQuery("body").append(data);
      } else if (positiondata == "middlecenter") {
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: " +
          top +
          ";bottom:" +
          bottom +
          ";border:none;left:" +
          left +
          ";right:" +
          right +
          ";z-index:10000;display:none;transform: translate(-50%, -50%) scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ");background-color:" +
          backgroundoverlaycolor +
          "'></iframe>";
        QualzzJQuery("body").append(data);
      } else if (positiondata == "topright") {
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: 0;bottom:" +
          bottom +
          ";border:none;left:" +
          left +
          ";right:0;z-index:10000;display:none;background-color:" +
          backgroundoverlaycolor +
          ";transform:scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ")'></iframe>";
        QualzzJQuery("body").append(data);
      } else if (positiondata == "bottomright") {
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: " +
          top +
          ";bottom:0;border:none;left:" +
          left +
          ";right:0;z-index:10000;display:none;background-color:" +
          backgroundoverlaycolor +
          ";transform:scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ")'></iframe>";
        QualzzJQuery("body").append(data);
      } else {
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: 50%;left:50%;border:none;right:auto;z-index:10000;display:none;transform:translate(-50%,-50%) scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ");background-color:" +
          backgroundoverlaycolor +
          "'></iframe>";
        QualzzJQuery("body").append(data);
      }
    } else {
      if (positiondata == "topleft" || positiondata == "bottomleft") {
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: " +
          top +
          ";bottom:" +
          bottom +
          ";border:none;left:" +
          left +
          ";right:" +
          right +
          ";z-index:10000;transform:" +
          transformtranslate +
          " scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ");background-color:" +
          backgroundoverlaycolor +
          "'></iframe>";
        QualzzJQuery("body").append(data);
      } else if (
        positiondata == "middleleft" ||
        positiondata == "middleright"
      ) {
        // var data = " <iframe id='framework"+json.campaignid+"' style='width: "+frmWidth+";height:"+frmHeight+";position: "+position+";top: "+top+";bottom:"+bottom+";border:none;left:"+left+";right:"+right+";z-index:10000;transform: translate(0px, -50%) scale("+ scalevaluex+","+scalevaluey +");background:"+backgroundoverlaycolor +"'></iframe>";
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: 0;bottom:" +
          bottom +
          ";border:none;left:" +
          left +
          ";right:" +
          right +
          ";z-index:10000;transform:  scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ");background-color:" +
          backgroundoverlaycolor +
          "'></iframe>";

        QualzzJQuery("body").append(data);
      } else if (
        positiondata == "bottomcenter" ||
        positiondata == "topcenter"
      ) {
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: " +
          top +
          ";bottom:" +
          bottom +
          ";border:none;left:" +
          left +
          ";right:" +
          right +
          ";z-index:10000;transform: translate(-50%, 0px) scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ");background-color:" +
          backgroundoverlaycolor +
          "'></iframe>";
        QualzzJQuery("body").append(data);
      } else if (positiondata == "middlecenter") {
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: " +
          top +
          ";bottom:" +
          bottom +
          ";border:none;left:" +
          left +
          ";right:" +
          right +
          ";z-index:10000;transform: translate(-50%, -50%) scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ");background-color:" +
          backgroundoverlaycolor +
          "'></iframe>";
        QualzzJQuery("body").append(data);
      } else if (positiondata == "topright") {
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top:0;bottom:" +
          bottom +
          ";border:none;left:" +
          left +
          ";right:0;z-index:10000;background-color:" +
          backgroundoverlaycolor +
          "; transform:scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ")'></iframe>";
        QualzzJQuery("body").append(data);
      } else if (positiondata == "bottomright") {
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: " +
          top +
          ";bottom:0;border:none;left:" +
          left +
          ";right:0;z-index:10000;background-color:" +
          backgroundoverlaycolor +
          ";transform:scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ")'></iframe>";
        QualzzJQuery("body").append(data);
      } else {
        var data =
          " <iframe id='framework" +
          json.campaignid +
          "' style='width: " +
          frmWidth +
          ";height:" +
          frmHeight +
          ";position: " +
          position +
          ";top: 50%;left:50%;border:none;right:auto;z-index:10000;transform: translate(-50%,-50%) scale(" +
          scalevaluex +
          "," +
          scalevaluey +
          ");background-color:" +
          backgroundoverlaycolor +
          "'></iframe>";
        QualzzJQuery("body").append(data);
      }
    }

    if (device == "mobile" || device == "tablet") {
      var scale =
        Math.min(
          parseInt(screen.width + "") / parseInt(frmWidth),
          parseInt(screen.height + "") / parseInt(frmHeight)
        ) + "";
      if (scale > 1) {
        scale = 1;
      }
      var mHeight = parseInt(frmHeight) * scale;
      // QualzzJQuery('#framework'+json.campaignid).css('transform','scale('+ scale +') translate(-50%, 0px)');
      // QualzzJQuery('#framework'+json.campaignid).css({"width":frmWidthformobile,"height":frmHeightformobile,"background":"none"});
      QualzzJQuery("#framework" + json.campaignid).css({
        width: frmWidth,
        height: frmHeight,
        "background-color": "none",
      });
      setPositionForMobile(positiondata, json.campaignid, scale);
    }

    if (tabattribute == undefined && animation != null) {
      if (animation == "slideIn") {
        QualzzJQuery("#framework" + json.campaignid).slideDown(2000);
      } else if (animation == "fadeIn" || animation == "Fade In") {
        QualzzJQuery("#framework" + json.campaignid).fadeIn(1000);
      } else if (animation == "slow" || animation == "Slow") {
        QualzzJQuery("#framework" + json.campaignid).fadeIn(2000);
      } else {
        QualzzJQuery("#framework" + json.campaignid).fadeIn("fast");
      }
    }
  }
}
function AttributeCheck(json, value) {
  var tabattribute = value;
  var data = JSON.parse(json.campaignJson);
  var body = data[0];
  var tabdata = JSON.parse(body[2]);
  var tabbackgroundcolor = tabdata.tabbackgroundcolor;
  var tabclass = tabdata.tabclass;
  var tabtextcolor = tabdata.tabtextcolor;
  var tabtextcontent = tabdata.tabtextcontent;
  this.backgroundColorTabs = tabbackgroundcolor;
  this.tabTextColor = tabtextcolor;
  var animation = json.displayOptions.effect;

  if (tabattribute == "roundedtabtopleft") {
    QualzzJQuery("#cornertabs" + json.campaignid)
      .attr({ attribute: "roundedtabtopleft" })
      .css({
        'transition' : 'all 0.3s ease, transform 2ms',
        'font-family' : 'Roboto',
        'display' : 'flex',
        'border-radius' : '8px',
        'position' : 'fixed',
        'margin' : 'auto',
        'top' : '3%',
        'left' : '2%',
        'width':'fit-content',
        'padding' : '15px 30px 15px 30px',
        'background-color' : this.backgroundColorTabs,
        'z-index' : '10',
        'font-size' : '15px',
        'cursor' : 'pointer',
        'font-weight' : '500',
        'flex-direction' : 'row',
        'justify-content' : 'center',
        'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
        'gap' : '10px',
        'align-items' : 'center'
      });
    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color;'  style='position: relative;top: 20%;'>" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );
    QualzzJQuery("#text-name" + json.campaignid).css({ color: tabtextcolor });
    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1,-9.797174393178826e-16,9.797174393178826e-16,1,-1.1368683772161603e-13,8.526512829121202e-14)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'position':' relative',
    })
    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("roundedtabtopleft");
    QualzzJQuery(".roundedtabtopleft").mouseover(function() {
            
      QualzzJQuery(".roundedtabtopleft").css({
          'top' : '5%',
      })
  });
  QualzzJQuery(".roundedtabtopleft").mouseout(function() {
      QualzzJQuery(".roundedtabtopleft").css({
          'top' : '3%',
      })
  });
  } else if (tabattribute == "roundedtabtopright") {
    QualzzJQuery("#cornertabs" + json.campaignid)
      .attr({ attribute: "roundedtabtopright" })
      .css({
        'transition' : 'all 0.3s ease, transform 2ms',
        'font-family' : 'Roboto',
        'display' : 'flex',
        'border-radius' : '8px',
        'position' : 'fixed',
        'margin' : 'auto',
        'top' : '3%',
        'right' : '2%',
        'width':'fit-content',
        'padding' : '15px 30px 15px 30px',
        'background-color' : this.backgroundColorTabs,
        'z-index' : '10',
        'font-size' : '15px',
        'cursor' : 'pointer',
        'font-weight' : '500',
        'flex-direction' : 'row',
        'justify-content' : 'center',
        'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
        'gap' : '10px',
        'align-items' : 'center'
      });
    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );
    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1,-9.797174393178826e-16,9.797174393178826e-16,1,-1.1368683772161603e-13,8.526512829121202e-14)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'position':' relative',
    })
    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("roundedtabtopright");
    QualzzJQuery(".roundedtabtopright").mouseover(function() {
            
      QualzzJQuery(".roundedtabtopright").css({
      'top' : '5%',
      })
  });
  QualzzJQuery(".roundedtabtopright").mouseout(function() {
      QualzzJQuery(".roundedtabtopright").css({
      'top' : '3%',
      })
  });
    
  } else if (tabattribute == "roundedtabtopcenter") {
    QualzzJQuery("#cornertabs" + json.campaignid)
      .attr({ attribute: "roundedtabtopcenter" })
      .css({
        "background-color": this.backgroundColorTabs,
        width: "fit-content",
        "text-align": "center",
        margin: "auto",
        height: "50px",
        padding: "12px 28px",
        "border-bottom-right-radius": "50%",
        "border-bottom-left-radius": "50%",
        left: "0",
        right: "0",
        position: "fixed",
        top: "0",
        "z-index": "9999000",
      });
    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span>"
    );
  } else if (tabattribute == "roundedtabbottomright") {
    QualzzJQuery("#cornertabs" + json.campaignid)
      .attr({ attribute: "roundedtabbottomright" })
      .css({
        'transition' : 'all 0.3s ease, transform 2ms',
        'font-family' : 'Roboto',
        'display' : 'flex',
        'border-radius' : '8px',
        'position' : 'fixed',
        'margin' : 'auto',
        'bottom' : '3%',
        'right' : '2%',
        'width':'fit-content',
        'padding' : '15px 30px 15px 30px',
        'background-color' : this.backgroundColorTabs,
        'z-index' : '10',
        'font-size' : '15px',
        'cursor' : 'pointer',
        'font-weight' : '500',
        'flex-direction' : 'row',
        'justify-content' : 'center',
        'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
        'gap' : '10px',
        'align-items' : 'center'
      });
    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );
    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1,1.347111479062088e-15,-1.347111479062088e-15,-1,213.33299255371108,213.33300018310533)">
                <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
                    </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                </g></svg>`);

                QualzzJQuery(".text-color").removeAttr("style");

                QualzzJQuery(".text-color").css({
                    'position':' relative',
                    'color': 'rgb(255, 255, 255)'
                })
                QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("roundedtabbottomright");
                QualzzJQuery(".roundedtabbottomright").mouseover(function() {
            
                  QualzzJQuery(".roundedtabbottomright").css({
                  'bottom' : '5%',
                  })
              });
              QualzzJQuery(".roundedtabbottomright").mouseout(function() {
                  QualzzJQuery(".roundedtabbottomright").css({
                  'bottom' : '3%',
                  })
                });
  } else if (tabattribute == "roundedtabbottomleft") {
    QualzzJQuery("#cornertabs" + json.campaignid)
      .attr({ attribute: "roundedtabbottomleft" })
      .css({
        'transition' : 'all 0.3s ease, transform 2ms',
        'font-family' : 'Roboto',
        'display' : 'flex',
        'border-radius' : '8px',
        'position' : 'fixed',
        'margin' : 'auto',
        'bottom' : '3%',
        'left' : '2%',
        'width':'fit-content',
        'padding' : '15px 30px 15px 30px',
        'background-color' : this.backgroundColorTabs,
        'z-index' : '10',
        'font-size' : '15px',
        'cursor' : 'pointer',
        'font-weight' : '500',
        'flex-direction' : 'row',
        'justify-content' : 'center',
        'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
        'gap' : '10px',
        'align-items' : 'center'
      });
    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );
    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1,1.347111479062088e-15,-1.347111479062088e-15,-1,213.33299255371108,213.33300018310533)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'position':' relative',
    })
    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("roundedtabbottomleft");
    QualzzJQuery(".roundedtabbottomleft").mouseover(function() {
            
      QualzzJQuery(".roundedtabbottomleft").css({
      'bottom' : '5%',
      })
  });
  QualzzJQuery(".roundedtabbottomleft").mouseout(function() {
      QualzzJQuery(".roundedtabbottomleft").css({
      'bottom' : '3%',
      })
    });
  } else if (tabattribute == "roundedtabbottomcenter") {
    QualzzJQuery("#cornertabs" + json.campaignid)
      .attr({ attribute: "roundedtabbottomcenter" })
      .css({
        "background-color": this.backgroundColorTabs,
        "border-top-right-radius": "50%",
        "border-top-left-radius": "50%",
        width: "fit-content",
        position: "fixed",
        "text-align": "center",
        padding: "17px 24px",
        "z-index": 9999000,
        left: "0",
        right: "0",
        margin: "auto",
        bottom: "0",
        height: "50px",
      });
    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span>"
    );
    QualzzJQuery("#text-name" + json.campaignid).css({
      top: "0px",
      left: "0px",
    });
  } else if (tabattribute == "basictabtopright") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabtopright" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-bottom-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'right' : '2%',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-bottom-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabtopright" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-bottom-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'right' : '2%',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-bottom-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' style='top: 25%; position: relative;' >" +
        tabtextcontent +
        "</span> <div id='svg'></div> "
    );

    QualzzJQuery("#svg").html(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1,-9.797174393178826e-16,9.797174393178826e-16,1,-1.1368683772161603e-13,8.526512829121202e-14)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'position':' relative',
    })
    QualzzJQuery("#cornertabs" + json.campaignid).removeAttr("class").addClass("basictabtopright");
   
    QualzzJQuery(".basictabtopright").mouseover(function() {
            
      QualzzJQuery(".basictabtopright").css({
      'padding' : '20px 30px 20px 30px',
      })
  });
  QualzzJQuery(".basictabtopright").mouseout(function() {
      QualzzJQuery(".basictabtopright").css({
      'padding' : '15px 30px 15px 30px',
      })
  });


    
  } else if (tabattribute == "basictabtopleft") {
    if (device == "desktop") {
      QualzzJQuery(".text-color").css({
          'position':' relative',
      })
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabtopleft" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-bottom-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'left' : '2%',
          'padding' : '15px 30px 15px 30px',
          'background' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-bottom-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });

    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabtopleft" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-bottom-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'left' : '2%',
          'padding' : '15px 30px 15px 30px',
          'background' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-bottom-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' style='top: 25%; position: relative;' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );
    QualzzJQuery("#svg").html(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1,-9.797174393178826e-16,9.797174393178826e-16,1,-1.1368683772161603e-13,8.526512829121202e-14)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery("#cornertabs" + json.campaignid).removeAttr("class").addClass("basictabtopleft");
    
    QualzzJQuery(".basictabtopleft").mouseover(function() {
            
      QualzzJQuery(".basictabtopleft").css({
      'padding' : '20px 30px 20px 30px',
      })
  });
  QualzzJQuery(".basictabtopleft").mouseout(function() {
    QualzzJQuery(".basictabtopleft").css({
      'padding' : '15px 30px 15px 30px',
      })
  });


  } else if (tabattribute == "basictabtopcenter") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabtopcenter" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-bottom-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'right' : '0px',
          'left' : '0px',
          'width':'fit-content',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-bottom-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    if (device == "mobile" || device == "tablet") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabtopcenter" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-bottom-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'right' : '0px',
          'left' : '0px',
          'width':'fit-content',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-bottom-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' style='top: 25%;' >" +
        tabtextcontent +
        "</span><div id= 'svg'></div>"
    );

    QualzzJQuery("#svg").html(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1,-9.797174393178826e-16,9.797174393178826e-16,1,-1.1368683772161603e-13,8.526512829121202e-14)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);


    QualzzJQuery(".text-color").css({
        'position':' relative',
    })
    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("basictabtopcenter");
    
    QualzzJQuery(".basictabtopcenter").mouseover(function() {
            
      QualzzJQuery(".basictabtopcenter").css({
      'padding' : '20px 30px 20px 30px',
      })
  });
  QualzzJQuery(".basictabtopcenter").mouseout(function() {
      QualzzJQuery(".basictabtopcenter").css({
      'padding' : '15px 30px 15px 30px',
      })
  });


  } else if (tabattribute == "basictabbottomleft") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabbottomleft" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-top-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'left' : '2%',
          'width':'fit-content',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-top-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabbottomleft" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-top-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'left' : '2%',
          'width':'fit-content',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-top-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );

    QualzzJQuery("#svg").html(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1,1.347111479062088e-15,-1.347111479062088e-15,-1,213.33299255371108,213.33300018310533)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'position':' relative',
    })
    QualzzJQuery("#cornertabs" + json.campaignid).removeAttr("class").addClass("basictabbottomleft");
    
    QualzzJQuery(".basictabbottomleft").mouseover(function() {
            
      QualzzJQuery(".basictabbottomleft").css({
      'padding' : '20px 30px 20px 30px',
      })
  });
  QualzzJQuery(".basictabbottomleft").mouseout(function() {
      QualzzJQuery(".basictabbottomleft").css({
      'padding' : '15px 30px 15px 30px',
      })
    });


  } else if (tabattribute == "basictabbottomright") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabbottomright" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-top-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'right' : '2%',
          'width':'fit-content',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-top-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabbottomright" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-top-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'right' : '2%',
          'width':'fit-content',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-top-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );


    QualzzJQuery("#svg").html(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1,1.347111479062088e-15,-1.347111479062088e-15,-1,213.33299255371108,213.33300018310533)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);


    QualzzJQuery(".text-color").removeAttr("style");

                QualzzJQuery(".text-color").css({
                    'position':' relative',
                })
    QualzzJQuery("#cornertabs" + json.campaignid).removeAttr("class").addClass("basictabbottomright");
                
    QualzzJQuery(".basictabbottomright").mouseover(function() {
            
      QualzzJQuery(".basictabbottomright").css({
      'padding' : '20px 30px 20px 30px',
      })
  });
  QualzzJQuery(".basictabbottomright").mouseout(function() {
      QualzzJQuery(".basictabbottomright").css({
      'padding' : '15px 30px 15px 30px',
      })
    });



  } else if (tabattribute == "basictabbottomcenter") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabbottomcenter" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-top-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'right' : '0px',
          'left':'0px',
          'width':'fit-content',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-top-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabbottomcenter" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-top-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'right' : '0px',
          'left':'0px',
          'width':'fit-content',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-top-left-radius' : '8px',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );


    QualzzJQuery("#svg").html(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1,1.347111479062088e-15,-1.347111479062088e-15,-1,213.33299255371108,213.33300018310533)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'position':' relative',
    })
    QualzzJQuery("#cornertabs" + json.campaignid).removeAttr("class").addClass("basictabbottomcenter");
    
    QualzzJQuery(".basictabbottomcenter").mouseover(function() {
            
      QualzzJQuery(".basictabbottomcenter").css({
      'padding' : '20px 30px 20px 30px',
      })
  });
  QualzzJQuery(".basictabbottomcenter").mouseout(function() {
      QualzzJQuery(".basictabbottomcenter").css({
      'padding' : '15px 30px 15px 30px',
      })
    });





  } else if (tabattribute == "basictabsideleft") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabsideleft" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-bottom-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'bottom' : '0px',
          'left' : '0px',
          'height' : 'fit-content',
          'padding' : '30px 15px 30px 15px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '9999000',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-top-right-radius' : '8px',
          'flex-direction' : 'column',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabsideleft" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-bottom-right-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'bottom' : '0px',
          'left' : '0px',
          'height' : 'fit-content',
          'padding' : '30px 15px 30px 15px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '9999000',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-top-right-radius' : '8px',
          'flex-direction' : 'column',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' style='writing-mode:vertical-rl;min-height:max-content;transform: rotate(180deg)' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );

    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,-0.000003814697265625,213.33299636840823)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");
    QualzzJQuery('.text-color').css({
        'writing-mode': 'vertical-rl',
        'min-height': 'max-content',
        'transform': 'rotate(180deg)',
    })

    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("basictabsideleft");
    QualzzJQuery(".basictabsideleft").mouseover(function() {
            
      QualzzJQuery(".basictabsideleft").css({
          'padding' : '30px 20px 30px 20px',
      })
  });
  QualzzJQuery(".basictabsideleft").mouseout(function() {
      QualzzJQuery(".basictabsideleft").css({
          'padding' : '30px 15px 30px 15px',
      })
  });


  } else if (tabattribute == "basictabsideright") {
    if (device == "desktop") {

      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabsideright" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-bottom-left-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'bottom' : '0px',
          'right' : '0px',
          'height' : 'fit-content',
          'padding' : '30px 15px 30px 15px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '9999000',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-top-left-radius' : '8px',
          'flex-direction' : 'column',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "basictabsideright" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'border-bottom-left-radius' : '8px',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'bottom' : '0px',
          'right' : '0px',
          'height' : 'fit-content',
          'padding' : '30px 15px 30px 15px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '9999000',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'border-top-left-radius' : '8px',
          'flex-direction' : 'column',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' style='writing-mode:tb-rl;min-height:max-content'>" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );

    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(7.960204194457796e-16,1,-1,7.960204194457796e-16,213.33299636840812,0.0000038146971803598717)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");
    QualzzJQuery('.text-color').css({
        'writing-mode': 'vertical-rl',
        'min-height': 'max-content',
        'transform': 'rotate(360deg)',
    })

    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("basictabsideright");
    
    QualzzJQuery(".basictabsideright").mouseover(function() {
            
      QualzzJQuery(".basictabsideright").css({
          'padding' : '30px 20px 30px 20px',
      })
  });
  QualzzJQuery(".basictabsideright").mouseout(function() {
      QualzzJQuery(".basictabsideright").css({
          'padding' : '30px 15px 30px 15px',
      })
  });

  } else if (tabattribute == "floatingtabbottomright") {
    QualzzJQuery("#cornertabs" + json.campaignid)
      .attr({ attribute: "floatingtabbottomright" })
      .css({
        width: "75px",
        height: "75px",
        "border-radius": "50%",
        position: "fixed",
        "z-index": 9999,
        "background-color": this.backgroundColorTabs,
        bottom: "0",
        right: "0",
      });
    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span>"
    );
    QualzzJQuery("#text-name" + json.campaignid).css({
      "min-width": "120px",
      "background-color": "rgb(0, 0, 0)",
      color: "rgb(255, 255, 255)",
      "text-align": "center",
      "border-radius": "6px",
      padding: "5px 0px",
      "z-index": "1",
      top: "-5px",
      position: "absolute",
      right: "90px",
    });
  } else if (tabattribute == "floatingtabbottomleft") {
    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span>"
    );
    QualzzJQuery("#cornertabs" + json.campaignid)
      .attr({ attribute: "floatingtabbottomleft" })
      .css({
        width: "75px",
        height: "75px",
        "border-radius": "50%",
        position: "fixed",
        "z-index": 9999000,
        background: this.backgroundColorTabs,
        bottom: "0",
        left: "20px",
      });
    QualzzJQuery("#text-name" + json.campaignid).css({
      "min-width": "120px",
      "background-color": "black",
      color: "#fff",
      "text-align": "center",
      "border-radius": "6px",
      padding: "5px 0",
      "z-index": "1",
      top: "-5px",
      left: "107%",
      position: "absolute",
    });
  } else if (tabattribute == "fullwidthtopleft") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthtopleft" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'flex-start',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthtopleft" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'flex-start',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );

    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1,-9.797174393178826e-16,9.797174393178826e-16,1,-1.1368683772161603e-13,8.526512829121202e-14)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'position':' relative',
       
    })
    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("fullwidthtopleft");
    QualzzJQuery(".fullwidthtopleft").mouseover(function() {
            
      QualzzJQuery(".fullwidthtopleft").css({
          'padding' : '20px 30px 20px 30px',
      })
  });
  QualzzJQuery(".fullwidthtopleft").mouseout(function() {
      QualzzJQuery(".fullwidthtopleft").css({
        'padding' : '15px 30px 15px 30px',
      })
  });
  } else if (tabattribute == "fullwidthtopright") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthtopright" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'flex-end',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthtopright" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'flex-end',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );
    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1,-9.797174393178826e-16,9.797174393178826e-16,1,-1.1368683772161603e-13,8.526512829121202e-14)">
                <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
                    </g>
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                <g xmlns="http://www.w3.org/2000/svg">
                </g>
                </g></svg>`);

                QualzzJQuery(".text-color").removeAttr("style");

                QualzzJQuery(".text-color").css({
                    'position':' relative',
                })
                QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("fullwidthtopright");
                QualzzJQuery(".fullwidthtopright").mouseover(function() {
            
                  QualzzJQuery(".fullwidthtopright").css({
                      'padding' : '20px 30px 20px 30px',
                  })
              });
              QualzzJQuery(".fullwidthtopright").mouseout(function() {
                  QualzzJQuery(".fullwidthtopright").css({
                      'padding' : '15px 30px 15px 30px',
                  })
              });

  } else if (tabattribute == "fullwidthtopcenter") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthtopcenter" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthtopcenter" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'top' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );
    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1,-9.797174393178826e-16,9.797174393178826e-16,1,-1.1368683772161603e-13,8.526512829121202e-14)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'position':' relative',
        'color': 'rgb(255, 255, 255)'
    })
    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("fullwidthtopcenter");
    QualzzJQuery(".fullwidthtopcenter").mouseover(function() {
            
      QualzzJQuery(".fullwidthtopcenter").css({
          'padding' : '20px 30px 20px 30px',
      })
  });
  QualzzJQuery(".fullwidthtopcenter").mouseout(function() {
      QualzzJQuery(".fullwidthtopcenter").css({
          'padding' : '15px 30px 15px 30px',
      })
    });
  } else if (tabattribute == "fullwidthbottomleft") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthbottomleft" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'flex-start',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthbottomleft" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'flex-start',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );

    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1,1.347111479062088e-15,-1.347111479062088e-15,-1,213.33299255371108,213.33300018310533)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'position':' relative',
    })
    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("fullwidthbottomleft");
    QualzzJQuery(".fullwidthbottomleft").mouseover(function() {
            
      QualzzJQuery(".fullwidthbottomleft").css({
          'padding' : '20px 30px 20px 30px',

      })
  });
  QualzzJQuery(".fullwidthbottomleft").mouseout(function() {
      QualzzJQuery(".fullwidthbottomleft").css({
          'padding' : '15px 30px 15px 30px',

      })
    });
  } else if (tabattribute == "fullwidthbottomright") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthbottomright" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'flex-end',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthbottomright" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'flex-end',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );
    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1,1.347111479062088e-15,-1.347111479062088e-15,-1,213.33299255371108,213.33300018310533)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({ 
        'position':' relative',
    })
    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("fullwidthbottomright");
    QualzzJQuery(".fullwidthbottomright").mouseover(function() {
            
      QualzzJQuery(".fullwidthbottomright").css({
          'padding' : '20px 30px 20px 30px',
      })
  });
  QualzzJQuery(".fullwidthbottomright").mouseout(function() {
      QualzzJQuery(".fullwidthbottomright").css({
          'padding' : '15px 30px 15px 30px',
      })
    });
  } else if (tabattribute == "fullwidthbottomcenter") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthbottomcenter" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    } else {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ attribute: "fullwidthbottomcenter" })
        .css({
          'transition' : 'all 0.3s ease, transform 2ms',
          'font-family' : 'Roboto',
          'display' : 'flex',
          'position' : 'fixed',
          'margin' : 'auto',
          'bottom' : '0px',
          'left' : '0px',
          'right' : '0px',
          'padding' : '15px 30px 15px 30px',
          'background-color' : this.backgroundColorTabs,
          'z-index' : '10',
          'font-size' : '15px',
          'cursor' : 'pointer',
          'font-weight' : '500',
          'flex-direction' : 'row',
          'justify-content' : 'center',
          'box-shadow' : 'rgb(200 200 200) 4px 4px 10px 2px',
          'gap' : '10px',
          'align-items' : 'center'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );
    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1,1.347111479062088e-15,-1.347111479062088e-15,-1,213.33299255371108,213.33300018310533)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'position':' relative',
        'color': 'rgb(255, 255, 255)'
    })
    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("fullwidthbottomcenter");
    QualzzJQuery(".fullwidthbottomcenter").mouseover(function() {
            
      QualzzJQuery(".fullwidthbottomcenter").css({
          'padding' : '20px 30px 20px 30px',
      })
  });
  QualzzJQuery(".fullwidthbottomcenter").mouseout(function() {
      QualzzJQuery(".fullwidthbottomcenter").css({
          'padding' : '15px 30px 15px 30px',
      })
    });
  } else if (tabattribute == "topleftcorner") {
    // console.log("DEvice -->", device);
    var leftvalue;
    if (device == "desktop") {
      leftvalue = "-9%";
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "topleft", attribute: "topleftcorner" })
        .css({
          'bottom' : '12px',
          'position' : 'fixed',
          'top' : '0px',
          'left' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 0px 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' : this.backgroundColorTabs,
          'border-width' : '160px 160px 0px 0px'
        });
    } else if (device == "mobile") {

      leftvalue = "-31%";
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "topleft", attribute: "topleftcorner" })
        .css({
          'bottom' : '12px',
          'position' : 'fixed',
          'top' : '0px',
          'left' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 0px 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' : this.backgroundColorTabs,
          'border-width' : '160px 160px 0px 0px'
        });
    } else if (device == "tablet") {

      leftvalue = "-12%";
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "topleft", attribute: "topleftcorner" })
        .css({
          'bottom' : '12px',
          'position' : 'fixed',
          'top' : '0px',
          'left' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 0px 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' : this.backgroundColorTabs,
          'border-width' : '160px 160px 0px 0px'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );
    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("topleftcorner");

    QualzzJQuery("#svg").append(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1,-9.797174393178826e-16,9.797174393178826e-16,1,-1.1368683772161603e-13,8.526512829121202e-14)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`); 

    // QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'transform' : 'rotate(315deg)',
        'position' : 'absolute',
        'margin-top' : '40'

    })

    QualzzJQuery("#svg").css({
        'transform' : 'rotate(315deg)',
        'position' : 'absolute',
        'margin-top' : '60', 
        'margin-left' : '60'
    })

    
    QualzzJQuery(".topleftcorner").mouseover(function() {
      QualzzJQuery(".topleftcorner").css({
          'padding-top': '10',
         'padding-left': '10'
      });
  });

  QualzzJQuery(".topleftcorner").mouseout(function() {
      QualzzJQuery(".topleftcorner").css({
          'padding-top': '0',
          'padding-left': '0'
          
      });
  });
  } else if (tabattribute == "toprightcorner") {
    QualzzJQuery("body").css({ "overflow-x": "hidden" });

    if (device == "desktop") {

      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "topright", attribute: "toprightcorner" })
        .css({
          'bottom' : '12px',
          'position' : 'fixed',
          'top' : '0px',
          'right' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 100% 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' : this.backgroundColorTabs,
          'border-width' : '0px 0px 160px 160px'
        });
    } else if (device == "mobile") {

      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "topright", attribute: "toprightcorner" })
        .css({
          'bottom' : '12px',
          'position' : 'fixed',
          'top' : '0px',
          'right' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 100% 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' :  this.backgroundColorTabs,
          'border-width' : '0px 0px 160px 160px'
        });
    } else if ((device = "tablet")) {

      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "topright", attribute: "toprightcorner" })
        .css({
          'bottom' : '12px',
          'position' : 'fixed',
          'top' : '0px',
          'right' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 100% 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' :  this.backgroundColorTabs,
          'border-width' : '0px 0px 160px 160px'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );

    QualzzJQuery("#svg").append(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(1,-9.797174393178826e-16,9.797174393178826e-16,1,-1.1368683772161603e-13,8.526512829121202e-14)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");

    QualzzJQuery(".text-color").css({
        'transform' : 'rotate(46deg)',
        'position' : 'absolute',
        'margin-top': '35px',
        'margin-left': '70px'
    })

    QualzzJQuery("#svg").css({
        'transform' : 'rotate(45deg)',
        'position' : 'absolute',
        'margin-top': '57px',
        'margin-left': '88px'
    })

    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("toprightcorner");
    
    QualzzJQuery(".toprightcorner").mouseover(function() {
      QualzzJQuery(".toprightcorner").css({
          'padding-top': '10',
         'padding-right': '10',
      //    'padding-left': '10',
      //    'padding-bottom': '20'


      });
  });

  QualzzJQuery(".toprightcorner").mouseout(function() {
      QualzzJQuery(".toprightcorner").css({
          'padding-top': '0',
          'padding-right': '0',
          // 'padding-left': '0',
      //    'padding-bottom': '0'


          
      });
  });

  } else if (tabattribute == "bottomleftcorner") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "bottomleft", attribute: "bottomleftcorner" })
        .css({
          'transform': 'rotate(180deg)',
          'bottom' : '0',
          'position' : 'fixed',
          'left' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 100% 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' : this.backgroundColorTabs,
          'border-width' : '0px 0px 160px 160px'
        });
    } else if (device == "mobile") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "bottomleft", attribute: "bottomleftcorner" })
        .css({
          'transform': 'rotate(180deg)',
          'bottom' : '0',
          'position' : 'fixed',
          'left' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 100% 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' : this.backgroundColorTabs,
          'border-width' : '0px 0px 160px 160px'
        });
    } else if (device == "tablet") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "bottomleft", attribute: "bottomleftcorner" })
        .css({
          'transform': 'rotate(180deg)',
          'bottom' : '0',
          'position' : 'fixed',
          'left' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 100% 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' : this.backgroundColorTabs,
          'border-width' : '0px 0px 160px 160px'
        });
    }
    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );

    QualzzJQuery("#text-name" + json.campaignid).css({
      color: this.tabTextColor,
    });
    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1,1.347111479062088e-15,-1.347111479062088e-15,-1,213.33299255371108,213.33300018310533)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);

    QualzzJQuery(".text-color").removeAttr("style");
    QualzzJQuery(".text-color").css({
        'transform' : 'rotate(226deg)',
        'position' : 'absolute',
        'margin-top': '35px',
        'margin-left': '70px'
    })

    QualzzJQuery("#svg").css({
        'transform' : 'rotate(226deg)',
        'position' : 'absolute',
        'margin-top': '57px',
        'margin-left': '88px'
    })

    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("bottomleftcorner");
    QualzzJQuery(".bottomleftcorner").mouseover(function() {
      QualzzJQuery(".bottomleftcorner").css({
          'padding-top': '10',
         'padding-right': '10',
      //    'padding-left': '10',
      //    'padding-bottom': '20'


      });
  });

  QualzzJQuery(".bottomleftcorner").mouseout(function() {
      QualzzJQuery(".bottomleftcorner").css({
          'padding-top': '0',
          'padding-right': '0',
          // 'padding-left': '0',
      //    'padding-bottom': '0'


          
      });
  });
  } else if (tabattribute == "bottomrightcorner") {
    if (device == "desktop") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "bottomright", attribute: "bottomrightcorner" })
        .css({
          'bottom' : '0px',
          'position' : 'fixed',
          'right' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 0px 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' :this.backgroundColorTabs,
          'border-width' : '160px 160px 0px 0px',
          'transform':' rotate(180deg)'
        });
    } else if (device == "mobile") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "bottomright", attribute: "bottomrightcorner" })
        .css({
          'bottom' : '0px',
          'position' : 'fixed',
          'right' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 0px 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' :this.backgroundColorTabs,
          'border-width' : '160px 160px 0px 0px',
          'transform':' rotate(180deg)'
        });
    } else if (device == "tablet") {
      QualzzJQuery("#cornertabs" + json.campaignid)
        .attr({ corner: "bottomright", attribute: "bottomrightcorner" })
        .css({
          'bottom' : '0px',
          'position' : 'fixed',
          'right' : '0px',
          'width' : '160px',
          'clip-path' : 'polygon(100% 0px, 0px 0px, 0px 100%)',
          'transition' : 'all 0.3s ease 0s, transform 2ms ease 0s',
          'height' : '160px',
          'background-color' :this.backgroundColorTabs,
          'border-width' : '160px 160px 0px 0px',
          'transform':' rotate(180deg)'
        });
    }

    QualzzJQuery("#cornertabs" + json.campaignid).html(
      "<span id='text-name" +
        json.campaignid +
        "' class='text-color' >" +
        tabtextcontent +
        "</span><div id='svg'></div>"
    );

    QualzzJQuery("#text-name" + json.campaignid).css({
      color: this.tabTextColor,
    });
    QualzzJQuery("#svg").append(` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="10" height="10" x="0" y="0" viewBox="0 0 213.333 213.333" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g transform="matrix(-1,1.347111479062088e-15,-1.347111479062088e-15,-1,213.33299255371108,213.33300018310533)">
    <g xmlns="http://www.w3.org/2000/svg">
        <g>
            <polygon points="0,53.333 106.667,160 213.333,53.333   " fill="#ffffff" data-original="#000000" style="" class=""></polygon>
        </g>
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    <g xmlns="http://www.w3.org/2000/svg">
    </g>
    </g></svg>`);


    QualzzJQuery(".text-color").css({
        'transform' : 'rotate(135deg)',
        'position' : 'absolute',
        'margin-top' : '40'

    })

    QualzzJQuery("#svg").css({
        'transform' : 'rotate(135deg)',
        'position' : 'absolute',
        'margin-top' : '60',
        'margin-left' : '60'
    })

    QualzzJQuery("#cornertabs"+ json.campaignid).removeAttr("class").addClass("bottomrightcorner");
    QualzzJQuery(".bottomrightcorner").mouseover(function() {
      QualzzJQuery(".bottomrightcorner").css({
          'padding-top': '10',
         'padding-left': '10'
      });
  });

  QualzzJQuery(".bottomrightcorner").mouseout(function() {
      QualzzJQuery(".bottomrightcorner").css({
          'padding-top': '0',
          'padding-left': '0'
          
      });
  });
  }
  QualzzJQuery("#cornertabs" + json.campaignid).css({ "z-index": "9999000" });
  QualzzJQuery("#text-name" + json.campaignid).css({
    color: this.tabTextColor,
  });
  onPageReload(json.campaignid, animation);
}

function onPageReload(campaignid, animation) {
  QualzzJQuery("#cornertabs" + campaignid).click(function (event) {
    setTimeout(function () {
      var CheckIfVisitorExistOrNot = "userExist" + campaignid;
      var TimeAccessed = "timeaccessed" + campaignid;
      var CheckIfVisitorExist = localStorage.getItem(CheckIfVisitorExistOrNot);
      var visitorState;
      var date = new Date();
      var time = date.getTime();
      if (CheckIfVisitorExist == "true") {
        visitorState = "repeated";
        localStorage.setItem(CheckIfVisitorExistOrNot, true);
        localStorage.setItem(TimeAccessed, time);
      } else {
        visitorState = "new";
        localStorage.setItem(CheckIfVisitorExistOrNot, true);
        localStorage.setItem(TimeAccessed, time);
      }
      var referer = document.referrer;
      var referralSource;
      if (referer.length > 0) {
        referralSource = extractRootDomain(referer);
      } else {
        referralSource = null;
      }
      if (referralSource == "t.co") {
        referralSource = "twitter";
      }
      // console.log("Referrer is", referralSource);

      var obj = {
        campaignId: campaignid,
        location: userCity,
        country: userCountry,
        visitor: visitorState,
        visitorSource: referralSource,
        convertingPageUrl: ipIfoResponse.url,

      };
      // console.log(visitorjs());
      // getClientInfo();
      QualzzJQuery.ajax({
        url: gloabalAddressAPI + "/user/campaign/Targeting",
        type: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (result) {},
      });
    }, 1000);
    if (animation == "slideIn") {
      QualzzJQuery("#framework" + campaignid).slideDown(2000);
    } else if (animation == "fadeIn" || animation == "Fade In") {
      QualzzJQuery("#framework" + campaignid).fadeIn(1000);
    } else if (animation == "slow" || animation == "Slow") {
      QualzzJQuery("#framework" + campaignid).fadeIn(2000);
    } else if (animation == "none" || animation == "None"  || animation == "null") {
      QualzzJQuery("#framework" + campaignid).fadeIn("fast");
    } else {
      QualzzJQuery("#framework" + campaignid).fadeIn("fast");
    }
    var iframe = QualzzJQuery("#framework" + campaignid);
    var frameOne = iframe.contents().find("#frameone" + campaignid);
    frameOne.show();
    document.getElementById("framework" + campaignid).contentWindow.focus();
  });
  QualzzJQuery("." + campaignid).click(function (e) {
    return false;
  });
}


function visitorscriptload() {

  getUTMParamters();
  // window.visitor_loaded = function () {
    let vistorInfo = visitor;
    //  this.console.log("rohit"+vistorInfo);
    ipIfoResponse["language"] = vistorInfo.locale.lang;
    ipIfoResponse["locale"] =
      vistorInfo.locale.country + "(" + vistorInfo.locale.lang + ")";
    ipIfoResponse["referrer"] = vistorInfo.cur_session.referrer;
    ipIfoResponse["url"] = vistorInfo.cur_session.url;
    ipIfoResponse["path"] = vistorInfo.cur_session.path;
    ipIfoResponse["start_time"] = vistorInfo.cur_session.start.toString();
    ipIfoResponse["browser"] = vistorInfo.browser.browser;
    ipIfoResponse["version"] = vistorInfo.browser.version
      ? vistorInfo.browser.version.toString()
      : "NA";
    ipIfoResponse["os"] = vistorInfo.browser.OS;
    ipIfoResponse["width"] = vistorInfo.device.screen.width.toString();
    ipIfoResponse["height"] = vistorInfo.device.screen.height.toString();
    ipIfoResponse["is_phone"] = vistorInfo.device.is_phone.toString();
    ipIfoResponse["is_tablet"] = vistorInfo.device.is_tablet.toString();
    ipIfoResponse["is_mobile"] = vistorInfo.device.is_mobile.toString();
    localStorage.setItem("ipIfoResponse", JSON.stringify(ipIfoResponse));
  // };

  window.visitor_opts = { enable_location: true, session_days: 5 };
}

function getUTMParamters() {
  var url = window.location.href;
  var querystring = url.split("?");
  if (querystring.length > 1) {
    var pairs = querystring[1].split("&");
    for (i in pairs) {
      var keyval = pairs[i].split("=");
      // console.log(keyval);
      if (keyval[0] == "utm_source") {
        ipIfoResponse["utm_source"] = keyval[1];
      } else if (keyval[0] == "utm_medium") {
        ipIfoResponse["utm_medium"] = keyval[1];
      } else if (keyval[0] == "utm_campaign") {
        ipIfoResponse["utm_campaign"] = keyval[1];
      }
    }
    // console.log(ipIfoResponse);
    localStorage.setItem("ipIfoResponse", JSON.stringify(ipIfoResponse));
  }
}
