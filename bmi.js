function bmi (name, age, weight, height){
    let calcHeight = Math.pow(height/100, 2);

    let resultBmi = Math.round(weight / calcHeight);

    let status;

    if (resultBmi < 18.5){
        status = "underweight"
    }

    else if (resultBmi < 25){
        status = "normal"
    }

    else if (resultBmi < 30){
        status = "overweight"
    }

    else{
        status = "obese"
    }

    let result = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: resultBmi,
        status: status
    }

    if (status === "obese"){
        Object.defineProperty(result, "recommendation", {value: "admission required", writable: true, enumerable: true, configurable: true})
    }

    return result;
}

console.log(bmi('Honey Boo Boo', 9, 57, 137))