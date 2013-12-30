(function (window, $, undefined) {
    'use strict';
    
    window._UA = {};
    
    _UA.name = window.navigator.userAgent.toLowerCase();
    
    _UA.isIE = (_UA.name.indexOf('msie') >= 0 || _UA.name.indexOf('trident') >= 0);
    _UA.isiPhone = _UA.name.indexOf('iphone') >= 0;
    _UA.isiPod = _UA.name.indexOf('ipod') >= 0;
    _UA.isiPad = _UA.name.indexOf('ipad') >= 0;
    _UA.isiOS = (_UA.isiPhone || _UA.isiPod || _UA.isiPad);
    _UA.isAndroid = _UA.name.indexOf('android') >= 0;
    _UA.isTablet = (_UA.isiPad || (_UA.isAndroid && _UA.name.indexOf('mobile') < 0));
    
    if (_UA.isIE) {
        _UA.verArray = /(msie|rv:?)\s?([0-9]{1,})([\.0-9]{1,})/.exec(_UA.name);
        if (_UA.verArray !== null) {
            _UA.ver = parseInt(_UA.verArray[2], 10);
        }
    }
    if (_UA.isiOS) {
        _UA.verArray = /(os)\s([0-9]{1,})([\_0-9]{1,})/.exec(_UA.name);
        if (_UA.verArray !== null) {
            _UA.ver = parseInt(_UA.verArray[2], 10);
        }
    }
    if (_UA.isAndroid) {
        _UA.verArray = /(android)\s([0-9]{1,})([\.0-9]{1,})/.exec(_UA.name);
        if (_UA.verArray !== null) {
            _UA.ver = parseInt(_UA.verArray[2], 10);
        }
    }
    
    if (_UA.isIE) {
        $('body').addClass('ie ie_' + _UA.ver);
    }
    if (_UA.isiPhone) {
        $('body').addClass('iPhone');
    }
    if (_UA.isiPod) {
        $('body').addClass('iPod');
    }
    if (_UA.isiPad) {
        $('body').addClass('iPad');
    }
    if (_UA.isiOS) {
        $('body').addClass('iOS iOS_' + _UA.ver);
    }
    if (_UA.isAndroid) {
        $('body').addClass('android android_' + _UA.ver);
    }
    if (_UA.isTablet) {
        $('body').addClass('tablet');
    }

}(this, jQuery));

