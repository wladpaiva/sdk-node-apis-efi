const EfiPay = require('sdk-node-apis-efi')
const options = require('../../../credentials')

const efipay = new EfiPay(options)

let params = {
    identificadorPagamento: 'urn:efi:ae71713f-875b-4af3-9d85-0bcb43288847',
}


// O método ofCancelSchedulePix indica os campos que devem ser enviados e que serão retornados
efipay.ofCancelSchedulePix(params)
    .then((resposta) => {
        console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
    })
    .catch((error) => {
        console.log(error)
    })