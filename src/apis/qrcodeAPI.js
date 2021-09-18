import axios from 'axios'

const qrCodeUrl = 'https://api.happi.dev/v1/qrcode'
const apiKEY = '5fa6f2h70jGj3lLrNefcduan6MbZ7UYhprDx0Yf0twWocQIDtRDFRBMU'


const instance = axios.create({
    baseURL: qrCodeUrl,
    headers: {
        'x-happi-key': apiKEY
    }
})

export default instance