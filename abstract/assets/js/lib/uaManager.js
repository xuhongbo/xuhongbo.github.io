var ua = (function(u){
	return {
		ltIE6:typeof window.addEventListener == "undefined" && typeof document.documentElement.style.maxHeight == "undefined",
		ltIE7:typeof window.addEventListener == "undefined" && typeof document.querySelectorAll == "undefined",
		ltIE8:typeof window.addEventListener == "undefined" && typeof document.getElementsByClassName == "undefined",
		ltIE9:document.uniqueID && typeof window.matchMedia == "undefined",
		gtIE10:document.uniqueID && window.matchMedia,
		Trident:document.uniqueID,
		Gecko:'MozAppearance' in document.documentElement.style,
		Presto:window.opera,
		Blink:window.chrome,
		Webkit:typeof window.chrome == "undefined" && 'WebkitAppearance' in document.documentElement.style,
		Touch:typeof document.ontouchstart != "undefined",
		Mobile:(typeof window.orientation != "undefined") || (navigator.userAgent.indexOf("Windows Phone") != -1),
		ltAd4_4:typeof window.orientation != "undefined" && typeof(EventSource) == "undefined",
		Pointer:window.navigator.pointerEnabled,
		MSPoniter:window.navigator.msPointerEnabled,
		isWindows : (navigator.userAgent.indexOf("Windows") != -1),
		isMac : (navigator.userAgent.indexOf("Mac") != -1),
		isSafari : (navigator.userAgent.indexOf("Safari") != -1),
		isTablet : (navigator.userAgent.indexOf("windows") != -1 && u.indexOf("touch") != -1)
		|| u.indexOf("ipad") != -1
		|| (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
		|| (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
		|| u.indexOf("kindle") != -1
		|| u.indexOf("silk") != -1
		|| u.indexOf("playbook") != -1,
		isMobile : (u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
		|| u.indexOf("iphone") != -1
		|| u.indexOf("ipod") != -1
		|| (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
		|| (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
		|| u.indexOf("blackberry") != -1
	}
})(window.navigator.userAgent.toLowerCase());


var isMobile = false;

if(ua.Touch){
	if(!ua.isTablet) isMobile = true;
}