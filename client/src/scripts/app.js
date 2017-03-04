import {state} from './state'

import {navigation} from './templates/navigation'


const page = props => {
	return [
		Navigation
	].join('')
}

document.getElementById(state.appContainer).innerHTML = page()