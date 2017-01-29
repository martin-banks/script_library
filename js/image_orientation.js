
let orientation = (img)=> {
	/*determine the orientation of an image and return  string name*/
	/* TODO: 
		- additional logic to allow square orientation
		- tollerance for portrait/landcape that are close to square
	*/
	if (img.naturalWidth > img.naturalHeight) {
		return 'landscape'
	} else if (img.naturalWidth < img.naturalHeight) {
		return 'portrait'
	} else {
		/*return landscape as default.
		
		*/
		return 'landscape'
	}
}

module.exports = orientation