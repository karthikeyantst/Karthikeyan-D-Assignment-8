function calculateBMI() {
  
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    height = height / 100;
 
    if (height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight values.");
        return;
    }

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else if (bmi >= 30 && bmi <= 34.9) {
        category = "Obesity";
    } else {
        category = "Severe Obesity";
    }
    document.getElementById('bmi').innerText = "Your BMI: " + bmi;
    document.getElementById('category').innerText = "Category: " + category;
    document.querySelector('.result').style.display = 'block';
   }