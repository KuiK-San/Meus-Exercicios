function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fnas = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fnas.value.length == 0 || fnas.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fnas.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Masculino'
            if(idade >= 0 && idade < 10 ) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade < 21 ){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 50 ){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                
            }

        }else if (fsex[1].checked){
            genero = 'Feminino'
            if(idade >= 0 && idade < 10 ) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade < 21 ){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade < 50 ){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}