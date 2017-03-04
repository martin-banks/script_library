/*
	Check param exits, is text/string or number and is not empty
*/

export const = text => {
	if (!!text) {
		if(typeof text === 'number'){ 
			return true
		} else if (typeof text === 'string' && text.length > 0){
			return true
		} else {
			return false
		}	
	} 
}