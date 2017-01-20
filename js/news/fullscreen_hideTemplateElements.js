/* Longform article */
let peskyDiv = document.querySelector('.longform-group.standard-child.last')
let peskyDiv2 = document.querySelector('.longform-group.highlight')
let peskyNav = document.querySelector('.header-static')
let peskyBannerReveal = document.querySelector('.w_header-static-desktop')
let peskyHeader = document.querySelector('.w_header-fixed')
let peskyToggle = document.querySelector('.w_nav-toggle')
let peskyAuth = document.querySelector('.w_auth')
let peskyBigNav = document.querySelector('.w_nav')

/* Standard article */
let peskyArticleNav = document.querySelector('.atom-persistentnav')
let peskyArticleToggle = document.querySelector('.w_nav-toggler')
let peskyContentBottom = document.querySelector('.content-bottom')
let peskyFollowUs = document.querySelector('.footer-follow-us')


/* from reset */
let peskyDiv = document.querySelector('.longform-group.standard-child.last')
let peskyDiv2 = document.querySelector('.longform-group.highlight')
let peskyNav = document.querySelector('.header-static')
let peskyBannerReveal = document.querySelector('.w_header-static-desktop')

let peskyHeader = document.querySelector('.w_header-fixed')
let peskyToggle = document.querySelector('.w_nav-toggle')
let peskyAuth = document.querySelector('.w_auth')
let peskyBigNav = document.querySelector('.w_nav')

let peskyArticleNav = document.querySelector('.atom-persistentnav')
let peskyArticleToggle = document.querySelector('.w_nav-toggler')
let peskyContentBottom = document.querySelector('.content-bottom')
let peskyFollowUs = document.querySelector('.footer-follow-us')






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





let selectorList = [
	'.longform-group.standard-child.last',
	'.longform-group.highlight',
	'.header-static'
]


const addToList = additions => {
	if (typeof additions === 'string'){
		selectorList.push(additions)
	} else if (typeof additions === 'object') {
		let keys = Object.keys(additions)
		keys.map(key => selectorList.push(additions[key]))
	}	else {
		console.error(additions, 'is not a supported query type')
	}
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

const changeValues = (value, list)=>{
	addToList(list)
	let newVal = setNewValue(value)
	if(!!newVal){
		for (let i=0; i<list.length; i++){
			let search = document.querySelectorAll(list[i])
			if (search.length > 1) {
				let searchKeys = Object.keys(search)
				searchKeys.map(key => search[key].style.zIndex = newVal )
			
			} else if (search.length === 1) {
				search[0].style.zIndex = newVal

			} else {
				console.warn(list[i], 'was not found')
			}
		}
	}

	

}






module.exports = {
	disable: list => changeValues('disable', list),
	enable: list => changeValues('enable', list)
}