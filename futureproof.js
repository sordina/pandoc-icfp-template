;(function(){
	var link = document.createElement('a')
	link.setAttribute('href', 'http://sordina.net')

	var img  = document.createElement('img')
	img.setAttribute('src', 'http://sordina.net/images/logosmall.png')
	img.style.width = '30px'

	link.appendChild(img)

	link.style.position = 'absolute'
	link.style.bottom   = '0px'
	link.style.left     = '0px'
	link.style.margin   = '5px'
	link.style.zIndex   = '100'

	document.body.appendChild(link)
})();
