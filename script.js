function aleatorizar(limite){
	const numeros = []
	const sorteados = []
	for (var x = 1; x <=limite; x++){
		numeros.push(x)
	}
	for (i = 5; i--; ) {
    	var random = numeros.splice(Math.floor(Math.random() * (40 + 1)), 1)[0];
    	sorteados.push(random)
	}
	sorteados.sort(function(a, b){
		return a-b
	})
	document.getElementById('valor1').innerHTML = sorteados[0]
	document.getElementById('valor2').innerHTML = sorteados[1]
	document.getElementById('valor3').innerHTML = sorteados[2]
	document.getElementById('valor4').innerHTML = sorteados[3]
	document.getElementById('valor5').innerHTML = sorteados[4]
	vericarPalpites(sorteados)
}
function novoJogador(){
	
	var span = document.createElement('span')
	span.id = 'palpite'+document.getElementsByTagName('span').length
	
	document.getElementById('palpites').appendChild(span)
	document.getElementById('palpites').appendChild(document.createElement('br'))
	document.getElementById('palpites').appendChild(document.createElement('br'))
	
	for (var i = 0; i< 5; i++){

		const area = document.createElement('div')
		area.className = "nes-field is-inline"
		area.style = "width: 12%; display: inline-block;  margin-right: 16px"

		ultimaDiv = document.getElementsByTagName('div').length
		area.id = "div"+ultimaDiv
		document.getElementById(span.id).appendChild(area)

		const entradas = document.createElement('input')
		entradas.className = "nes-input"
		entradas.type = "number"
		entradas.min = "1"
		entradas.max = "50"
		document.getElementById('div'+ultimaDiv).appendChild(entradas)
	}
	

}
function vericarPalpites(sorteados){
	palpites = (document.getElementsByTagName('input').length)
	for (var i = 0; i < palpites; i+=5) {
		document.getElementsByTagName('input')[i].style = "background-color: white"
		document.getElementsByTagName('input')[i+1].style = "background-color: white"
		document.getElementsByTagName('input')[i+2].style = "background-color: white"
		document.getElementsByTagName('input')[i+3].style = "background-color: white"
		document.getElementsByTagName('input')[i+4].style = "background-color: white"
		if (document.getElementsByTagName('input')[i].value == sorteados[0]) {
			document.getElementsByTagName('input')[i].style = "background-color: green"
		}
		if (document.getElementsByTagName('input')[i+1].value == sorteados[1]) {
			document.getElementsByTagName('input')[i+1].style = "background-color: green"
		}
		if (document.getElementsByTagName('input')[i+2].value == sorteados[2]) {
			document.getElementsByTagName('input')[i+2].style = "background-color: green"
		}
		if (document.getElementsByTagName('input')[i+3].value == sorteados[3]) {
			document.getElementsByTagName('input')[i+3].style = "background-color: green"
		}
		if (document.getElementsByTagName('input')[i+4].value == sorteados[4]) {
			document.getElementsByTagName('input')[i+4].style = "background-color: green"
		}
	}
}
