function mostrar() {
    let res = document.querySelector('div#res')

    res.innerHTML = `<p>A COISA MAIS LINDA DESSE MUNDO INTEIRO </p>`
    document.body.style.background = '#ffc0cb'
    res.innerHTML += '<img src="lindos.jpg" alt="a lalah bem linda"></img>'
    res.innerHTML += '<audio src="musica.mp3" autoplay controls></audio> <br>'
    res.innerHTML += '<input type="button" value="Voltar" onclick="zero()">'

}
function zero(){
    let res = document.querySelector('div#res')

    res.innerHTML = ''
    document.body.style.background = '#6e70e4ab' 
}