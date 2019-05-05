'use strict';

let inputByn = document.getElementById('byn'),
    inputUsd = document.getElementById('usd');

// function getUrl(url) {
//     return new Promise(function (resolve, reject) {
//         let request = new XMLHttpRequest();

//         request.open('GET', url);
//         request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
//         request.send();

//         request.addEventListener('readystatechange', function () {
//             if (this.readyState < 4) {
//                 inputUsd.value = 'Loading';
//             } else if (this.readyState === 4 && this.status == 200) {
//                 resolve(this.response);
//             } else {
//                 let error = new Error(this.statusText);
//                 error.code = this.status;
//                 reject(error);
//             }
//         });
//     });
// }

// inputByn.addEventListener('input', function () {
//     getUrl('current.json')
//         .then(response => {
//             let data = JSON.parse(response);
//             return data;
//         })
//         .then(data => {
//             inputUsd.value = (inputByn.value / data.usd).toFixed(2);
//         })
//         .catch(error => {
//             console.log(error);
//             inputUsd.value = 'Произошла ошибка';
//         });
// });

inputByn.addEventListener('input', function () {
    fetch('current.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            inputUsd.value = (inputByn.value / data.usd).toFixed(2);
        })
        .catch(alert);
});