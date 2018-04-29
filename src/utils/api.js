const axios = require('axios')

function ranDom (arr) {
    var index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

module.exports = {
    fetchItems: function (item) {
        var encodedURI = window.encodeURI('https://api.xivdb.com/item/' + ranDom(item.id) );
        console.log(encodedURI);


        return axios.get(encodedURI)
            .then(function (response) {
                console.log(response.data);
                return response.data;
            });
     }
};