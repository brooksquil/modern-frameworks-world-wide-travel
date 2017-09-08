"use strict";

app.factory("BookFactory", function($q, $http) {
    let getBooks = () => {
        let items = [];
        return $q((resolve, reject) => {
            $http.get('./data/guides.json')
                .then((itemObject) => {
                    let itemCollection = itemObject.data;
                    console.log(itemCollection);
                    resolve(itemCollection.guides);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };



    return { getBooks };
});