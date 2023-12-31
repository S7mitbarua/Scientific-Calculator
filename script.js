document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelector('.buttons');

    buttons.addEventListener('click', handleButtonClick);

    function handleButtonClick(event) {
        const buttonValue = event.target.innerText;

        if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearDisplay();
        } else {
            appendToDisplay(buttonValue);
        }
    }

    function appendToDisplay(value) {
        display.value += value;
    }

    function clearDisplay() {
        display.value = '';
    }

    function calculateResult() {
        try {
            let expression = display.value.replace(/sqrt/g, 'Math.sqrt');
            expression = expression.replace(/Math.pow/g, 'Math.pow');
            expression = expression.replace(/Math.sin/g, 'Math.sin');
            expression = expression.replace(/Math.cos/g, 'Math.cos');
            expression = expression.replace(/Math.tan/g, 'Math.tan');
            expression = expression.replace(/Math.log/g, 'Math.log');

            display.value = eval(expression);
        } catch (error) {
            display.value = 'Error';
        }
    }
});
