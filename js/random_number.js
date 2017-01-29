
/* generate random integer within range passed in */
let randomNumber = (low, high)=>{
	return (Math.floor(Math.random()*high)) + low
}


module.exports = randomNumber