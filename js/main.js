/*let Coffee = {
    Price: 540,
    Intensity: {
        CoffeeIntensityByPackage: 2,
        maxCoffeeIntensity: 5
    }
};

let input = document.querySelector('input');

console.log(typeof Coffee.Price);
console.log(Coffee);
console.log(Coffee.Intensity.CoffeeIntensityByPackage);
console.log(input.value);*/

var GAP = 10;
var FONT_GAP = 15;
var BAR_HEIGHT = 20;

var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    
    return maxElement;  
};


var renderStatistics = function (ctx, CoffeeName, price, intensity) {

    var canvas = document.getElementById('canvas');

    var ctx = canvas.getContext('2d');

    ctx.fillStyle = '#000';

    var CoffeeName = ['BUSHIDO Kodo', 'NESCAFE Gold Aroma', 'JARDIN Colombia Medellin', 'JARDIN kenya Kilimanjaro'];
    var price = [519, 200, 790, 305];
    var intensity = ['не известно', 8/10, 5/5, 3/5];

    for (var i = 0; i < CoffeeName.length; i++) {
        ctx.fillText(CoffeeName[i], GAP, GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    }

};

renderStatistics();

