function gerar(){
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')
 
    if (num.value.length == 0) {
        window.alert('Favor inserir um numero valido')
    }else {
        let n = Number(num.value)
        tab.innerHTML = ``
        for (let c = 1; c <= 10; c += 1){
            let item = document.createElement('option')
            item.text = `${c} X ${n} = ${n*c}`
            item.valeu = `tab${c}`
            tab.appendChild(item)
        }

    }

        
}