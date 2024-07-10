function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    if (isNaN(weight) || isNaN(height)) {
        alert('Please enter valid numbers for weight and height.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let category;
    let resultColor;
    if (bmi < 18.5) {
        category = 'Underweight';
        resultColor = 'blue';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        resultColor = 'green';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        resultColor = 'orange';
    } else {
        category = 'Obesity';
        resultColor = 'red';
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your BMI is ${bmi}. You are classified as: ${category}.`;
    resultElement.style.color = resultColor;
    resultElement.style.animation = 'popIn 0.5s';
}
