const dummyData = {
    'header': {
        'apid': 'E1112',
        'branchId': '56788',
        'retrunCode': '0000'
    },
    'body': {
        'title': 'Dummy data',
        'time': '20190909',
        'dataList': [
            {
                'type': '00',
                'amount': '2111923',
                'time': '20190909143000'
            },
            {
                'type': '01',
                'amount': '110233',
                'time': '20190909143000'
            },
            {
                'type': '02',
                'amount': '38729',
                'time': '20190909143000'
            },
            {
                'type': '03',
                'amount': '203',
                'time': '20190909143000'
            },
            {
                'type': '04',
                'amount': '3321',
                'time': '20190909143000'
            },
            {
                'type': '05',
                'amount': '9545',
                'time': '20190909143000'
            },
            {
                'type': '06',
                'amount': '033322',
                'time': '20190909143000'
            },
            {
                'type': '07',
                'amount': '20311',
                'time': '20190909143000'
            },
            {
                'type': '08',
                'amount': '0',
                'time': '20190909143000'
            },
            {
                'type': '09',
                'amount': '0223',
                'time': '20190909143000'
            },
            {
                'type': '10',
                'amount': '04',
                'time': '20190909143000'
            }
        ]
    }
};


const corsOptions = {
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    allowedHeaders: '*',
};

var express = require('express');
var cors = require('cors');
var app = express();
const axios = require('axios');
app.use(cors(corsOptions));

// const url = 'https://account.kkbox.com/oauth2/token';
//     axios.post(
//         url,
//         {
//             grant_type: 'client_credentials',
//             client_id: '99598334258d3f35aa01f439d81273c2',
//             client_secret: '8d4dd4b5143120c784fd9c22c888a5b7'
//         },
//         {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         }
//     ).then(token => {
//         console.log('token', token);

//     })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })

const token = 'a_V9cDy4Fm6yudjCRHN2cg=='

app.post('/post', function (req, res, next) {

    console.log('posts');
    res.json(dummyData)
});

app.post('/oauth2/token', function (req, res, next) {


});

app.get('/get', function (req, res, next) {
    console.log('get');
    res.json(dummyData)
});

const listenPort = 3001;

console.log('server start');
console.log('listen port: ' + listenPort);
app.listen(listenPort);
