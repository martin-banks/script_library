function siblings(selector) {
	var element = document.querySelector(selector)
	var childElements = Array.from(element.parentNode.children)
	return childElements.filter(function(child) {
		return child !== element
	})
}

function closest(element, query) {
	while (!!element && element !== document) {
		if (!Element.prototype.matches) { /* polyfill of matches method for IE */
			Element.prototype.matches = 
				Element.prototype.matchesSelector || 
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector || 
				Element.prototype.oMatchesSelector || 
				Element.prototype.webkitMatchesSelector ||
				function(s) {
					var matches = (this.document || this.ownerDocument).querySelectorAll(query),
						i = matches.length;
					while (--i >= 0 && matches.item(i) !== this) {}
					return i > -1;            
				};
		}else if (element.matches(query)) {
			return element
		}
		element = element.parentNode
	}
	return null
}

function delegate(selector, eventName, targetSelector, listener) {
	document.querySelector(selector).addEventListener(eventName, function (event) {
		var closestMatch = closest(event.target, targetSelector)
		if (closestMatch) {
			event.delegateTarget = closestMatch
			listener(event)
		}
	})
}

module.exports = delegate