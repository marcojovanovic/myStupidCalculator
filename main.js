// prvo uradi html, css +
// pokupi promenljive +
// pokupi evente za sva polja +
// prikazi na ekranu u okviru outputa +
// formatiranje brojeva, dodavanje i oduzimanje zareza // mrzi me to
// konkatenacija +
// clear +
// backspace
// result +

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

function getOutput() {
  return document.getElementById('output-number').innerText;
}

function printOutput(num) {
  document.getElementById('output-number').innerText = num;
}

numbers.forEach((number) => {
  number.addEventListener('click', function (e) {
    let output = getOutput();

		output = output + e.target.id;
    

    printOutput(output);
  });
});

operators.forEach((operator) => {
  operator.addEventListener('click', function (e) {
    let output = getOutput();

		
		 if(this.id !== "=" && this.id !== 'backspace'){
	     output = output + e.target.id;

		 } 
	
    printOutput(output);

		if(this.id === '='){

			 let result = eval(output)

			 printOutput(result)
		}

    if (this.id === 'clear') {
      printOutput('');
    }

    if (this.id === 'backspace') {
      output = output.slice(1);
      printOutput(output);
    }
  });
});



