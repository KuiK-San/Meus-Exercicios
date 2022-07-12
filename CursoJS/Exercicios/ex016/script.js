function contar(){
    var inicio = document.getElementById('init')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pass')
    var res = document.querySelector('div#res')

    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Fatam dados!')
        res.innerHTML = `Impossivel Contar!`
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if (p <= 0){
            window.alert('Passo invalido! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c +=p)
            res.innerHTML += `${c} \u{1F449}`
        } else {
            for(let c = i; c >= f; c -= p)
            res.innerHTML += `${c} \u{1F449}`
        }
        
        res.innerHTML += `\u{1F3C1}`
    }   
    
}