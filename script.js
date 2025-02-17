function convert(){
    let inputValue = 0;
    let result = 0;

    inputValue = document.getElementById("userInput").value;
    let unit = document.getElementById("unit").value;
    if (unit === "milesToKm") {
        result = 1.60934 * inputValue;
    } else {
        result = inputValue / 1.60934;
    }
    const resultString = inputValue + " millas son " + result + " km";
    console.log(resultString);

    const resultElement = document.getElementById('resultElement');
    resultElement.innerHTML = resultString;
}