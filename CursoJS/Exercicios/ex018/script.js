let res = document.querySelector('p#res') 
var list = []

function adicionar(){
    let numi = document.querySelector('input#txtadn')
    res.innerHTML = ''
    if (numi.value.length == 0){
        window.alert('Adicione um numero')

    }else{
        let num = Number(numi.value)
        let item = document.createElement('option')
        let def = document.querySelector('option#def')
        if (list.indexOf(num) == -1 && num >= 0 && num <= 100){
            
            list.push(num)
            item.text = `Número ${num} adcionado!`
            item.value = `sel${num}`
            let tab = document.querySelector('select#idsel')
            tab.appendChild(item)
            list.sort()
            numi.value = ''
            def = null
        }else{
            numi.value = ''
            window.alert('Insira um numero que valido e que nao esteja na lista')
            
        }
            
        
    }
}

function analisar(){
    let soma = 0
    
    res.innerHTML = ''
    res.innerHTML += `Ao todo, temos ${list.length} valores cadastrados<br>`

    for(var i = 0; i < list.length; i++){
        soma += list[i]
    }
    res.innerHTML += `O menor valor adicionado é de ${list[0]}<br>`
    res.innerHTML += `A soma dos números é de ${soma}<br>`
    res.innerHTML += `A Média entre eles é de ${soma / list.length}<br>`
    let max = 0
    for(let i = 0; i < list.length; i++){
        max = i
    }
    res.innerHTML += `O maior número é o ${list[max]}`
}