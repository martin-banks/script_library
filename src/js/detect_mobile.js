/* devices to test */
const mobileDevices = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone/i

/* perform different action depending on device detected */
function mobileDetection(mobileCallback, desktopCallback){
	let isMobile = mobileDevices.test(navigator.userAgent) ? true : false
	if(isMobile){
		console.warn('Loading mobile app')
		mobileCallback ? mobileCallback() : ''
		return
	} else {
		console.warn('Loading desktop app')
		desktopCallback ? desktopCallback() : ''
		return
	}
}

/* check for mobile device and return true/false  */
let isMobileDevice = ()=> {
	let isMobile = mobileDevices.test(navigator.userAgent) && !window.MSStream
	return mobile ? true : false
}



module.exports = isMobileDevice