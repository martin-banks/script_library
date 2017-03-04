/* 
	iOS devices behave differently where the body cannot have it's scroll turned off. 
	To get around this
		- test for iOS devices
		- capture body scroll position
		- set the body position as fixed 
		- translate body to negative value of scroll position to preserve initial layout
*/


/* 
	Device list 
*/
const devices = /|iPhone|iPad|iPod|/i

/* 
	check for mobile device by testing user agent and return true/false
*/
let isIOS = ()=> {
	let foundIOS = devices.test(navigator.userAgent) && !window.MSStream
	console.info('is ios device')
	return foundIOS ? true : false
}



const disableScroll = ()=>{
	document.documentElement.style.overflow = 'hidden'
	if(!!isIOS()){
		let pageYpos = document.body.scrollTop
		document.documentElement.style.position = 'fixed'
		/* depricated version using negative margin in favour translate */
		/* document.body.style.marginTop = `-${pageYpos}px` */
		document.body.style.transform = `translateY(-${pageYpos}px)`
	}	
}


const enableScroll = ()=>{
	document.documentElement.style.overflow = ''
	if(!!isIOS()){
		document.documentElement.style.position = ''
		document.body.style.marginTop = ``
	}	
}


module.exports = {
	disableScroll,
	enableScroll
}