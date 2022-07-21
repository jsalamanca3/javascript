const XMLHttpRequest = require('xmlhttprequest');
const API = 'https://api.escuelajs.co/api/v1';

//para recibir informacion -traer información de la anterior url-

function fetchData(urlApi, callback) {
    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', urlApi, true);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.resposeText))
            }
        } else {
            const error = new Error('Error' + urlApi)
            return callback(error, null);
        }
    }
    xhttp.send();
}

//llamado de la funsión (productos)

fetchData(`${API}/products`, function(error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2); {
        if (error2) return console.error(error2);
        fetchData(`${API}/products/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.tittle);
            console.log(data3.name);
        });
    });
});
