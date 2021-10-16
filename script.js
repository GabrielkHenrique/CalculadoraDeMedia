function verificar(){
	var n1 = parseFloat(document.getElementById('nota1').value)
	var n2 = parseFloat(document.getElementById('nota2').value)
	var n3 = parseFloat(document.getElementById('nota3').value)
	var res = document.getElementById('res')
	var md = (n1 + n2 + n3)/3;

	if (md >=7 && md < 10){
		res.innerHTML = `Sua média foi ${md.toFixed(2)} por isso você passou, parabéns!`
		document.body.style.background ='#05c46b'
	}
		else if(md >= 5 && md < 7){
		res.innerHTML = `Sua média foi ${md.toFixed(2)} por isso você foi aprovado! mas se esforce mais ano que vem`
		document.body.style.background ='#ff7f50'
	}
		else if(md < 5){
		res.innerHTML = `Sua média foi ${md.toFixed(2)}, você está de recuperação`
		document.body.style.background ='#ff4757'
		}
	else if(md == 10){
		res.innerHTML = `Sua média foi ${md.toFixed(2)} por isso você passou, parabéns pelo 10 você mandou bem!`
		document.body.style.background ='#7bed9f'
		}else if(md > 10){
		res.innerHTML =`Sua media foi ${md.toFixed(2)} o que não é uma nota valida tente novamente com os valores certos!(de 1 a 10)`
		document.body.style.background ='#F8EFBA'
	}
	var form = document.getElementsByClassName('box').reset;
	
}
