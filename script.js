
const operate =  (n1, n2, operator) => {
	let jab = "no good";
	if (operator.length == 0) {
		return (0);
	};
	// evaluates multiplication to prevent the program from 
	// crashing if the second operand is 0
	function multiply (n1, n2) {
		if (Number(n2) == 0) {
			topNumber = 0; lowerNumber = 0; currentOperator = "";
			return jab;
		} else {
			return n1 / n2;
		}
	}
	const operations = {
		"+": n1 + n2,
		"-": n1 - n2,
		"x": n1 * n2,
		"%": n1 / n2,
		"÷": multiply(n1, n2), 
	}
	let ans = operations[operator]
	if (ans == jab) {
		return ans;
	} else if (typeof ans == "number" && !isNaN(ans)) {
		if (Number.isInteger(ans)) {
			return ans;
		} else {
			return ans.toFixed(2);
		}
	}
}





function calculate(e) {
	// for when = is clicked
	if (e == "=" || e == "Enter") {
		displayEl.textContent = 0;
		answerDisplay.textContent = operate(Number(topNumber), 
					Number(lowerNumber), currentOperator);
		console.log(operate(Number(topNumber), 
					Number(lowerNumber), currentOperator));
		lowerNumber = 0; topNumber = 0; currentOperator = "";
		decimal = 0


	// adding decimal point
	} else if (e == ".") {
		if (decimal == 0 && displayEl.textContent> 0) {
			displayEl.textContent = displayEl.textContent + "."
			decimal = 1;
		}
	
	
	} else if (e =="del" || e == "backspace") {
		if (displayEl.textContent.length > 1) {
			displayEl.textContent = 
				displayEl.textContent.slice(0, -1);
			lowerNumber = displayEl.textContent;
		} else {
			displayEl.textContent = 0;
			lowerNumber = 0;
		}
	// for when AC is clicked
	} else if (e == "AC" || e == "Delete") {
		lowerNumber = 0; topNumber = 0; currentOperator = "";
		display.textContent = 0; answerDisplay.textContent = "";
		decimal = 0

	
	// for when a number is clicked
	} else if (Number.isInteger(Number(e))) {
		if (displayEl.textContent == 0) {
			displayEl.textContent = e;
			lowerNumber = displayEl.textContent;
		} else {
			displayEl.textContent = displayEl.textContent + e;
			lowerNumber = displayEl.textContent;
		}
		console.log(typeof displayEl.textContent);


	// for when an operator is clicked
	} else if (e == "%" || e == "%" || e == "÷" || e == "x" ||
			e == "-" || e == "+" || e == "*") {
		if (currentOperator.length > 0 && 
		topNumber > 0 && lowerNumber > 0) {
			topNumber = operate(Number(lowerNumber),
				 Number(topNumber), currentOperator);
			currentOperator = e;
		} else if (topNumber == 0) {
			currentOperator = e;
			topNumber = lowerNumber;
		} else {	
			currentOperator = e;
			topNumber = operate(Number(lowerNumber),
						 Number(topNumber), currentOperator);
		}
		answerDisplay.textContent = topNumber
		lowerNumber = 0;
		displayEl.textContent = lowerNumber;
		decimal = 0
	}
};



let topNumber = 0;
let lowerNumber = 0;
let currentOperator = "";



let btnContainerEl = document.querySelector("#btnContainer");
let displayEl = document.querySelector("#display");
let answerDisplay = document.querySelector("#answerDisplay");

let decimal = 0;




btnContainerEl.addEventListener("click", (e) => calculate(
											e.target.textContent));

document.addEventListener("keydown", (e) => calculate(e.key));
