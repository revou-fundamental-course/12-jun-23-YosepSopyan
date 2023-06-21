function temperatureConverter(valNum) {
   valNum = parseFloat(valNum);
   var outputFahrenheit = valNum * 1.8 + 32;
   document.getElementById("outputFahrenheit").textContent = isNaN(outputFahrenheit) ? "0" : outputFahrenheit;
   var inputFahrenheit = document.getElementsByName("Fahrenheit")[0];
   inputFahrenheit.value = isNaN(outputFahrenheit) ? "0" : outputFahrenheit;

   let formula = (isNaN(valNum) ? "0" : valNum) + "*C x (9/5) + 32 = " + (isNaN(outputFahrenheit) ? "32" : outputFahrenheit) + "*F";
   document.getElementsByName("cara_kalkulasi")[0].value = formula;
}
