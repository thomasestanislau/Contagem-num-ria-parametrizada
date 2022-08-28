function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('resposta')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[Erro] Faltam dados")
    }else{
        res.innerHTML = 'Sequência: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            alert("Passo inválido")
        }

        if(i<f){
            for(var c = i; c <= f; c += p){
            
                res.innerHTML += ` ${c} \u{1f449}` //\u{} contem o código de emoji
            }
        }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}` //\u{} contem o código de emoji
            }
        }
        res.innerHTML += ` \u{1F3C1}` 
    }


}