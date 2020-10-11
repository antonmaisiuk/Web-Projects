let submitBtn = document.querySelector('.submit'),
	form = document.querySelector('.form'),
	answer = document.querySelector('.answer');
	
	submitBtn.addEventListener('click', result, false);

function result(e) {
	e.preventDefault();
	let inputA = document.querySelector("#input_a").value;
	let inputB = document.querySelector("#input_b").value;
	let inputC = document.querySelector("#input_c").value;

	if (inputB != 0 && inputA != 0 && inputC != 0){
		let D = (inputB * inputB) - (4 * inputA * inputC);

		if (D > 0) {
			let x1 = (-inputB - Math.sqrt(D)) / (2 * inputA);
			let x2 = (-inputB + Math.sqrt(D)) / (2 * inputA);

			// answer.classList.remove("not_visible");
			answer.classList.toggle("visible");
			answer.innerHTML = "x1 = " + x1 + " " + "x2 = " + x2;
			// alert(x1.toFixed(2) + ' ' + x2.toFixed(2));
		}
		if (D == 0) {
			x1 = -inputB / (2 * inputA);
			answer.classList.toggle("visible");
			answer.innerHTML = "x1 = " + x1;
		}

		if (D < 0) {
			answer.classList.toggle("visible")
			answer.innerHTML = "Nie ma rozwiązań";
		}
	} else {
		alert("Wpisz poprawnie)");
	}
}