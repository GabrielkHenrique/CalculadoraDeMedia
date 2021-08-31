function verificar(){
	var n1 = parseFloat(document.getElementById('idade1').value)
	var n2 = parseFloat(document.getElementById('idade2').value)
	var n3 = parseFloat(document.getElementById('idade3').value)
	var res = document.getElementById('res')
	var md = (n1 + n2 + n3)/3;
	if (md >=7 && md < 10){
		res.innerHTML = `Sua média foi ${md} por isso você passou!`
		document.body.style.background ='#0be881'
	}	
		else if(md <= 6 && md > 1){
		res.innerHTML = `Sua média foi ${md} por isso você foi reprovado! se esfore mais ano que vem`
		document.body.style.background ='#ff3f34'
	}
	else if(md == 10){
		res.innerHTML = `Sua média foi ${md} por isso você passou, parabéns pelo 10 você mandou bem!`
		document.body.style.background ='#34e7e4'
	}else if(md == 0){
		res.innerHTML = `Sua média foi ${md} por isso você reprovou!,você foi muito mal se esforce mais ano que vem! `
		document.body.style.background ='#1e272e'
			

		}else{
		res.innerHTML =`Sua media foi ${md} o que não é uma nota valida tente novamente com os valores certos!(de 1 a 10)`
		document.body.style.background ='#3c40c6'
	}
}