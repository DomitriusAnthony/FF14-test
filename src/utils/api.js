const axios = require('axios');

function ranDom (arr) {
    var index = Math.floor(Math.random()*arr.length);
    return arr[index];
}

module.exports = {
    fetchRandomItem: function (item) {
        var encodedURI = window.encodeURI('https://api.xivdb.com/item/' + ranDom(item));
        console.log(encodedURI);


        return axios.get(encodedURI)
            .then(function (response) {
                return response.data.items;
            });
     }
};