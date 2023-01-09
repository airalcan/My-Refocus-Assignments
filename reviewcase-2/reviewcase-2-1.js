function convertCelsiusToKelvin(tempCelsius){
    let tempKelvin = (tempCelsius + 273.15);
    return tempKelvin;
}
    console.log(convertCelsiusToKelvin(66))

function convertfahrenheitToKelvin(tempFahrenheit){
    let tempKelvin = (tempFahrenheit + 459.67) * 5/9;
    return tempKelvin;
}
 
console.log(convertfahrenheitToKelvin(88))