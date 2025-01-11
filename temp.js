function convert() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  console.log("temp value", temperature);
  const unit = document.getElementById("unit").value;
  const convertTo = document.getElementById("convert-to").value;
  let result;


  

  if (isNaN(temperature)) {
    result = "Invalid input";
  } else if (unit == "Celsius" && convertTo == "Fahrenheit") {
    result = (temperature * 9) / 5 + 32;
    result = `${result.toFixed(1)} <sup>°F</sup>`;
  } else if (unit == "Fahrenheit" && convertTo == "Celsius") {
    result = ((temperature - 32) * 5) / 9;
    result = `${result.toFixed(1)} <sup>°C</sup>`;
  } else {
    result = `${temperature.toFixed(1)} ${convertTo.charAt(0)}`;
  }

  return (document.getElementById("result").innerHTML = `<div>${result}</div>`);
}

document.getElementById("unit").addEventListener("change",function(){
  const unit = document.getElementById("unit").value;
  const convertTo = document.getElementById("convert-to")

  if(unit==='Celsius'){
    convertTo.value='Fahrenheit'

  }
  else if(unit==='Fahrenheit') {
    convertTo.value='Celsius'
  }
})