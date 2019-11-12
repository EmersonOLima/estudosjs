function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //CRIANÇA
                img.setAttribute('src', 'foto-bb-m.png')
            }else if (idade < 21) {
                //ADOLESCENTE
                img.setAttribute('src','foto-homem-j.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'foto-homem.png')
            }else{
                //IDOSO
                img.setAttribute('src','foto-idoso.png' )
            }
        }else if (fsex[1].checked) { 
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //CRIANÇA
                img.setAttribute('src', 'foto-bb-f.png')
            }else if (idade < 21) {
                //ADOLESCENTE
                img.setAttribute('src', 'foto-mulher-j.png')
            }else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'foto-mulher.png')
            }else{
                //IDOSO
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}