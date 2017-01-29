/*
	IMPORTANT
	Install images loaded module; 
	In terminal, navigate to project and rund:
	npm i -S imagesloaded

	documentation: https://www.npmjs.com/package/imagesloaded
*/
// require imagesloaded module
const imagesLoaded = require('imagesloaded')


// require other modules from this library
const closest = require('./closest_element')
const orientation = require('./orientation')


/*
// pass in object as pramaters with these keys
let props = {
	imagesToCheck:	class name of images to check loading progress
	imagesToHide:		// typically thumbnails/placeholders to hide after hi-res images have loaded
	appId: 					'#someId',
	sections: 			//js object of contetn sections
}
*/

module.exports = (props) => {
	/*Reveal image, remove blur placeholders*/
	let thumbnails = document.querySelectorAll(props.imagesToHide)
	console.log('checking images...')
	let imgLoad = imagesLoaded(props.appId, { background: props.imagesToCheck });
	
	imgLoad.on('always', function() {
		/*console.log( `${imgLoad.images.length} images loaded` );*/
		/*console.log('images obj\n', imgLoad.images)*/
		// detect which image is broken
		for ( let i = 0, len = imgLoad.images.length; i < len; i++ ) {
			let image = imgLoad.images[i];
			let result = image.isLoaded ? 'loaded' : 'broken';
			/*console.log( 'image is ' + result + ' for ' + image.img.src )*/
			
			if(image.isLoaded){
				/*console.log('-------------------')*/
				/*console.info(i-1, 'loaded image:\n', image)*/
				/*console.log(i-1, 'thumbnail', thumbnails[i-1])*/
				let currentImage = document.getElementById(image.img.id)
				/*console.log(image.img.id, currentImage.naturalWidth, 'x', currentImage.naturalHeight)*/
				
				currentImage.classList.add(`cc-image-${orientation(currentImage)}`)
				currentImage.setAttribute('data-orientation', orientation(currentImage))
				let tile = closest(currentImage, '.cc-gridTile')
				console.log('tile', !!tile, tile)
				let sectionIndex =	!!tile ? parseInt(tile.getAttribute('data-sectionIndex')) : null
				let imgIndex = 			!!tile ? parseInt(tile.getAttribute('data-imageIndex')) : null
				console.log(sectionIndex, imgIndex)
				if (!!tile) {
					props.sections[sectionIndex].images[imgIndex].orientation = orientation(currentImage)
				}
				
				
				/*animate fade out of blur*/
				if(!!thumbnails[i-1]){
					let animStart = null;
					function step(timestamp) {
						if (!animStart) animStart = timestamp;
						let progress = timestamp - animStart;
						let duration = 300;
						let newIncrement = Math.ceil(progress/duration*1000)/1000
						let increment = ()=> newIncrement > 1 ? 1 : newIncrement
						thumbnails[i-1].style.opacity = 1-newIncrement
						progress < duration ? window.requestAnimationFrame(step) : false
					}	
					window.requestAnimationFrame(step);
				} else {
					console.error(`thumnail ${i-1} not found`)
				}
				
			} else {
				/* image was not loaded */
				console.error(image.img.src, 'is missing\n', image, '\n ')
			}
		}
	})
}





	