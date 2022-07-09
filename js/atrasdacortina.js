function soma(){
    var vlr1 = document.getElementById('nb1')
    var vlr2 = document.getElementById('nb2')
    var numero1 = Number(vlr1.value)
    var numero2 = Number(vlr2.value)
    var soma = numero1 + numero2
    var r = document.querySelector('div#res')

    r.innerHTML = `A soma de ${numero1} + ${numero2} = ${soma}`
}