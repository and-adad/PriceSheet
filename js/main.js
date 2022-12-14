var GAP = 10;
var FONT_GAP = 15;
var BAR_HEIGHT = 20;
var TEXT_WIDTH = 150;
var TEXT_HEIGHT = 200;
var barWidth = 180;

var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    
    return maxElement;  
};

var getMinElement = function (arr) {
    var minElement = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }
    return minElement;
};

var renderStatistics = function (ctx, CoffeeName, price, intensity) {

    var canvas = document.getElementById('canvas');

    var ctx = canvas.getContext('2d');

    ctx.fillStyle = '#000';

    var CoffeeName = ['BUSHIDO Kodo', 'NESCAFE Gold Aroma', 'JARDIN Colombia Medellin', 'JARDIN kenya Kilimanjaro'];
    var price = [590, 200, 790, 305];
    var intensity = ['не известно', '8/10', '5/5', '3/5'];
    var weight = [0.095, 0.085, 0.24, 0.095];

    var totalPrice = [];

    for (var i = 0; i < price.length; i++) {

        totalPrice[i] = price[i] / weight[i];

    }

    for (var i = 0; i < CoffeeName.length; i++) {
        
        var maxTotalPrice = getMaxElement(totalPrice);
        var bestChoice = getMinElement(totalPrice);
        ctx.fillStyle = '#000';
        ctx.fillText(CoffeeName[i], GAP, GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
        ctx.fillText('Интенсивность: ' + intensity[i], GAP + TEXT_WIDTH + barWidth * totalPrice[i] / maxTotalPrice + GAP, GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
        totalPrice[i] === bestChoice ? ctx.fillStyle = 'green' : ctx.fillStyle = 'red'
        ctx.fillRect(GAP + TEXT_WIDTH, GAP + (GAP + BAR_HEIGHT) * i, barWidth * totalPrice[i] / maxTotalPrice, BAR_HEIGHT);
        
    }

};

renderStatistics();

