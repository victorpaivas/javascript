function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    }else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //para adicionar imagem
        img.setAttribute('id', 'foto') //para adicionar imagem
        if (fsex [0].checked) {    /*identificando o elements by name e o número e também identificando em qual caixa foi marcado o .checked*/
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'homem-bebe.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'homem-jovem.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            }else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        }else if (fsex [1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'mulher-bebe.png')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            }else {
                //Idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
   