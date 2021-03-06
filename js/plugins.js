// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*
 * jQuery searchUA - v1.0
 * https://github.com/masakihongo/searchUA
 * 
 * Copyright (c) 2013 EGAO inc.
 * Dual licensed under the MIT and GPL licenses.
 */
(function(e,t,n){"use strict";e._UA={};_UA.name=e.navigator.userAgent.toLowerCase();_UA.isIE=_UA.name.indexOf("msie")>=0||_UA.name.indexOf("trident")>=0;_UA.isiPhone=_UA.name.indexOf("iphone")>=0;_UA.isiPod=_UA.name.indexOf("ipod")>=0;_UA.isiPad=_UA.name.indexOf("ipad")>=0;_UA.isiOS=_UA.isiPhone||_UA.isiPod||_UA.isiPad;_UA.isAndroid=_UA.name.indexOf("android")>=0;_UA.isTablet=_UA.isiPad||_UA.isAndroid&&_UA.name.indexOf("mobile")<0;if(_UA.isIE){_UA.verArray=/(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(_UA.name);_UA.verArray!==null&&(_UA.ver=parseInt(_UA.verArray[2],10))}if(_UA.isiOS){_UA.verArray=/(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(_UA.name);_UA.verArray!==null&&(_UA.ver=parseInt(_UA.verArray[2],10))}if(_UA.isAndroid){_UA.verArray=/(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(_UA.name);_UA.verArray!==null&&(_UA.ver=parseInt(_UA.verArray[2],10))}_UA.isIE&&t("body").addClass("ie ie_"+_UA.ver);_UA.isiPhone&&t("body").addClass("iPhone");_UA.isiPod&&t("body").addClass("iPod");_UA.isiPad&&t("body").addClass("iPad");_UA.isiOS&&t("body").addClass("iOS iOS_"+_UA.ver);_UA.isAndroid&&t("body").addClass("android android_"+_UA.ver);_UA.isTablet&&t("body").addClass("tablet")})(this,jQuery);
