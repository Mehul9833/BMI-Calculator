import React, { useState } from 'react';
import './Section.css';

export default function Section() {

    const [bmi, setBmi] = useState(18);
    const [weight, setWeight] = useState(52);
    const [height, setHeight] = useState(170);
    const result1 = document.getElementById('result-1');
    const resultContainer1 = document.getElementById('result-container-1')

    function weightChange(e) {
        console.log('The weight is', e.target.value);
        setWeight(e.target.value);
    }

    function heightChange(e) {
        console.log('The height is', e.target.value);
        setHeight(e.target.value);
    }


    function calculateBMI() {
        if (height === "" || isNaN(height)) {
            result1.innerHTML = "Provide a valid Height!";
        } else if (weight === "" || isNaN(weight)) {
            result1.innerHTML = "Provide a valid Weight!";
        } else {
            let outputBMI = (weight / ((height * height) / 10000)).toFixed(2);
            setBmi(outputBMI);
            console.log(outputBMI);
            result1.style.display = "block";
            resultContainer1.style.display = "block";
        }
    }






    return (
        <div className="section">
            <div className="inner-container">
                <div className="user-inputs">
                    <div>
                        <label htmlFor="weight">Weight: </label>
                        <input type="number" id="weight" name="weight" placeholder="Enter weight in kilogram" onChange={weightChange} />
                    </div>
                    <div>
                        <label htmlFor="height">Height: </label>
                        <input type="number" id="height" name="weight" placeholder="Enter height in centimeter" onChange={heightChange} />
                    </div>
                </div>
                <div className="button">
                    <button onClick={calculateBMI}>Calculate Now</button>
                </div>
                <div className="result" id="result-1">
                    <p>Your BMI: {bmi}</p>
                </div>
                <div className="result-container" id="result-container-1">
                    <h2>BMI Categories:</h2>
                    <p>Underweight =	&#60;  18.5</p>
                    <p>Normal weight = 18.5–24.9</p>
                    <p>Overweight = 25–29.9</p>
                    <p>Obesity = BMI of 30 or greater</p>
                </div>
            </div>

        </div>


    )
}
