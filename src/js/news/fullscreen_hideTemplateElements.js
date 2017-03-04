let selectors = {
	zIndex: [
		'.longform-group.standard-child.last',
		'.longform-group.highlight',
		'.header-static',
		'.w_header-static-desktop',
		'.w_header-fixed',
		'.w_nav-toggle',
		'.w_auth',
		'.w_nav',
		'.atom-persistentnav',
		'.w_nav-toggler'
	],
	display: [
		'.content-bottom',
		'.footer-follow-us'
	]
}


const addToList = (additions, customVal) => {
	if (!!additions) {
		let addToKeys = Object.keys(additions)
		addToKeys.map(key => {
			if (typeof additions[key] === 'string'){
				selectors[key].push(additions[key])
			} else {
				additions[key].map(add => selectors[key].push(additions[key][add]) )
			}		
		})
	} else {
		return
	}
	/*if (typeof additions === 'string'){
		selectorList.push(additions)
	} else if (typeof additions === 'object') {
		let keys = Object.keys(additions)
		keys.map(key => selectorList.push(additions[key]))
	}	else {
		console.error(additions, 'is not a supported query type')
	}*/
}


const setDisable = value => {
	if (value === 'disable'){
		return true
	} else if (value === 'enable') {
		return false
	} else {
		console.error('Please specify enable or disable')
	}
}


const chooseValue = {
	zIndex: action => action === 'disable' ? '-1' : '',
	display: action => actipn === 'disable' ? 'none' : ''
} 

const setNewValue = (value)=>{
	if (value === 'disable'){
		return '-1'
	} else if (value === 'enable') {
		return ''
	} else {
		console.error('Please specify enable or disable')
	}
}



/*
TODO
	- set values to multiplestyle attributes for single selector search
	- include checking for new selectors and values from arguments passed into function
	- erorr checking 
*/
const changeValues = (value, list, customVal)=>{
	/*
		list: object key/value of attribute/selector or array of selectors
	*/
	addToList(list, customVal)
	let newVal = setNewValue(value)
	
	if(!!newVal){
		for (let i=0; i<list.length; i++){
			let search = document.querySelectorAll(list[i])
			if (!!search){
				if (search.length > 1) {
					let searchKeys = Object.keys(search)
					searchKeys.map( key => search[key].style.zIndex = newVal )
				
				} else if (search.length === 1) {
					search[0].style.zIndex = newVal

				} else {
					console.warn(list[i], 'was not found')
				}
			} else {
				console.warn('Search for -' list[i], '- returned no results')
			}		
	}
}



module.exports = {
	disable: (list, customVal) => changeValues('disable', list, customVal),
	enable: (list, customVal) => changeValues('enable', list, customVal)
}


/*
EXAMPLE SETUP/FUNCTION CALL
const toggleElems = require('./path/to/fullscreen_hideTemplateElements')
toggleElems.disable() // will disable default set of elements
toggleElems.enable() // will enable all in default set

// toggle element not seen before - possible needs including on default script
toggleElems.disable({
	display: '#someNewElemSelector'
}) 

// can also add arrays and new style attributes to change. add extra param to set new value to toggle to
toggleElems.disable({
	opacity: [
		'.fistNewClass',
		'secondNewClass'
	]
}, '0') 

*/










/* previous for ref until testing complete */

/* Longform article */
/*let peskyDiv = document.querySelector('.longform-group.standard-child.last')
let peskyDiv2 = document.querySelector('.longform-group.highlight')
let peskyNav = document.querySelector('.header-static')
let peskyBannerReveal = document.querySelector('.w_header-static-desktop')
let peskyHeader = document.querySelector('.w_header-fixed')
let peskyToggle = document.querySelector('.w_nav-toggle')
let peskyAuth = document.querySelector('.w_auth')
let peskyBigNav = document.querySelector('.w_nav')*/

/* Standard article */
/*let peskyArticleNav = document.querySelector('.atom-persistentnav')
let peskyArticleToggle = document.querySelector('.w_nav-toggler')
*/
/*
let peskyContentBottom = document.querySelector('.content-bottom')
let peskyFollowUs = document.querySelector('.footer-follow-us')
*/



/*


function removePeskies() {
	if(!!peskyDiv && !!peskyDiv2 && !!peskyNav && !!peskyBannerReveal){
		peskyDiv.style.zIndex = '-1'
		peskyDiv2.style.zIndex = '-1'
		peskyNav.style.zIndex = '-1'
		peskyBannerReveal.style.zIndex = '-1'
		return
	} else {
		return
	}
}


function removeExtraPeskies() {
	if(!!peskyHeader && !!peskyToggle && !!peskyAuth && !!peskyBigNav){
		peskyHeader.style.zIndex = '-1'
		peskyToggle.style.zIndex = '-1'
		peskyAuth.style.zIndex = '-1'
		peskyBigNav.style.zIndex = '-1'
		return
	} else {
		return
	}
}

function removeArticlePagePeskies() {
	if(!!peskyArticleNav && !!peskyArticleToggle && !!peskyContentBottom && !!peskyFollowUs){
		peskyArticleNav.style.zIndex = '-1'
		peskyArticleToggle.style.zIndex = '-1'

		peskyContentBottom.style.display = 'none'
		peskyFollowUs.style.display = 'none'
	} else {
		return
	}
}


function resetPeskies(){
	if(!!peskyDiv && !!peskyDiv2){
	peskyDiv.style.zIndex = ''
	peskyDiv2.style.zIndex = ''
	peskyNav.style.zIndex = ''
	peskyBannerReveal.style.zIndex = ''
	} else {
		return
	}
}


function resetExtraPeskies(){
	if(!!peskyHeader && !!peskyToggle && !!peskyAuth && !!peskyBigNav){
		peskyHeader.style.zIndex = ''
		peskyToggle.style.zIndex = ''
		peskyAuth.style.zIndex = ''
		peskyBigNav.style.zIndex = ''
		return
	} else {
		return
	}
}

function resetArticlePagePeskies() {
	if(!!peskyArticleNav && !!peskyArticleToggle && !!peskyContentBottom && !!peskyFollowUs){
		peskyArticleNav.style.zIndex = ''
		peskyArticleToggle.style.zIndex = ''
		peskyContentBottom.style.display = ''
		peskyFollowUs.style.display = ''
		return
	} else {
		return
	}
}


*/





/*let selectorList = [
	'.longform-group.standard-child.last',
	'.longform-group.highlight',
	'.header-static'
]*/
