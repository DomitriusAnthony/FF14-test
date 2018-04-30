const axios = require('axios')

// Mess with this function to find a random item for character and items
// function ranDom (arr) {
//     var index = Math.floor(Math.random()*arr.length);
//     return arr[index];
// }

module.exports = {
    fetchItems: function (item) {
        // Will use this when applying random item and enemy grabbing
        // var encodedURI = window.encodeURI('https://api.xivdb.com/item/' + ranDom() );
        // console.log(encodedURI);
        return axios.get('https://api.xivdb.com/item/')
            .then(function (response) {
                console.log(response.data);
                return response.data;
            });
     },
     fetchEnemies: function (enemy) {
        return axios.get('https://api.xivdb.com/enemy')
            .then(function(response) {
                return response.data;
            })
     },    
};