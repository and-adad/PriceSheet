let Coffee = {
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
console.log(input.value);