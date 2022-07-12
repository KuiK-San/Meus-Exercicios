function calcular(){
    let num = document.querySelector('input#num')
    let res = document.querySelector('div#res')

    if (num.value.length == 0){
        window.alert('[ERRO!] Insira um numero válido!')
        res.innerHTML = 'Número Invalido!'
    } else{
        let n = Number(num.value)
        res.innerHTML = `Calculando a tabuada do ${n}!<br>`
        for (let c = 1; c <= 10 ; c++){
            
            res.innerHTML += `${n} X ${c} = ${n * c}<br>`
        }

    }
}