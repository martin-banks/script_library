import {hasText} from '../hasText'

const checkProps = props => {
	if (hasText(props.text)){
		return true
	} else {
		console.error('This template requires a string text value')
		return false
	}
}

export const Kicker = props => {
	if(checkProps(props)){
		let template = `<h5 class="cc-mainTitle ${!!props.class ? props.class : ''}">${props.text}</h5>`
		return template
	}
}

export const Title = props => {
	if(checkProps(props)){
		let template = `<h1 class="cc-mainTitle ${!!props.class ? props.class : ''}">${props.text}</h1>`
		return template
	}
}

export const Intro = props => {
	if(checkProps(props)){
		let template = `<h2 class="cc-mainTitle ${!!props.class ? props.class : ''}">${props.text}</h2>`
		return template
	}
}

export const Crosshead = props => {
	if(checkProps(props)){
		let template = `<h3 class="cc-mainTitle ${!!props.class ? props.class : ''}">${props.text}</h3>`
		return template
	}
}


export const Par = props => {
	if(checkProps(props)){
		let template = `<p class="cc-mainTitle ${!!props.class ? props.class : ''}">${props.text}</p>`
		return template
	}
}


