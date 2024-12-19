

const operate =  (n1, n2, operator) => {
		if (operator.length == 0) {
			return (0);
		};
		const operations = {
			"+": n1 + n2,
			"-": n1 - n2,
			"x": n1 * n2,
			"÷": n1 / n2,
			"%": n1 % n2,
		}
		let ans = operations[operator]
		console.log(typeof ans);
		if (typeof ans == "number") {
			if (Number.isInteger(ans)) {
				console.log(ans);
				return ans;
			} else {
				console.log(ans.toFixed(2));
				return ans.toFixed(2);
			}
		}
}



let topNumber = 0;
let lowerNumber = 0;
let currentOperator = "";


let btnContainerEl = document.querySelector("#btnContainer");
let displayEl = document.querySelector("#display");
let answerDisplay = document.querySelector("#answerDisplay");


btnContainerEl.addEventListener("click", (e) => {


	if (e.target.textContent == "=") {
			displayEl.textContent = 0;
			answerDisplay.textContent = operate(Number(topNumber), 
						Number(lowerNumber), currentOperator);
			lowerNumber = 0; topNumber = 0; currentOperator = "";

	} else if (e.target.textContent == "AC") {
		lowerNumber = 0; topNumber = 0; currentOperator = "";
		display.textContent = 0; answerDisplay.textContent = 0;


	} else if (Number.isInteger(Number(e.target.textContent))) {
		if (displayEl.textContent == 0) {
			displayEl.textContent = e.target.textContent;
			lowerNumber = displayEl.textContent;
		} else {
			displayEl.textContent = displayEl.textContent + 
					e.target.textContent;
			lowerNumber = displayEl.textContent;
		}


	} else if (e.target.textContent.length > 0) {
		currentOperator = e.target.textContent;
		if (topNumber == 0) {
			topNumber = lowerNumber;
		} else {	
			topNumber = operate(Number(lowerNumber),
						 Number(topNumber), currentOperator);
		}
		answerDisplay.textContent = topNumber
		lowerNumber = 0;
		displayEl.textContent = lowerNumber;
	}
});
