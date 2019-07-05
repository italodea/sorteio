function aleatorizar(limite){
	const numeros = []
	const sorteados = []
	for (var x = 1; x <=limite; x++){
		numeros.push(x)
	}
	console.log(numeros)
	for (i = 5; i--; ) {
    	var random = numeros.splice(Math.floor(Math.random() * (40 + 1)), 1)[0];
    	sorteados.push(random)
	}
	document.getElementById('valor1').innerHTML = sorteados[0]
	document.getElementById('valor2').innerHTML = sorteados[1]
	document.getElementById('valor3').innerHTML = sorteados[2]
	document.getElementById('valor4').innerHTML = sorteados[3]
	document.getElementById('valor5').innerHTML = sorteados[4]
}
function novoJogador(){
	
	document.getElementById('palpites').appendChild(document.createElement('br'))
	document.getElementById('palpites').appendChild(document.createElement('br'))
	for (var i = 0; i< 5; i++){
		const entradas = document.createElement('input')
		entradas.type = "number"
		entradas.min = "1"
		entradas.max = "50"
		document.getElementById('palpites').appendChild(entradas)
	}

}