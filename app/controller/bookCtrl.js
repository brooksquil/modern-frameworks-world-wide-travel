"use strict";

app.controller("BookCtrl", function($scope, BookFactory) {
    BookFactory.getBooks()
        .then(function(itemCollection) {
            $scope.guides = itemCollection;
            console.log("flavors", $scope.guides);
        });

});