const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const swap = document.getElementById('swap');
const rateEl = document.getElementById('rate');

// Function fetch data & calculate rate
function calculate() {
	const currency1 = currencyEl_one.value;
	const currency2 = currencyEl_two.value;

	fetch(`https://api.exchangeratesapi.io/latest?base=${currency1}`)
	.then(res => res.json())
	.then(data => {
		const rate = data.rates[currency2]
		rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`
		amountEl_two.value =(amountEl_one.value * rate).toFixed(2);

	})

}

function exchangeCurrency() {
	const temp =  currencyEl_one.value;
	currencyEl_one.value = currencyEl_two.value;
	currencyEl_two.value = temp
	calculate()

}

//Event listeners
currencyEl_one.addEventListener('change', calculate); 
currencyEl_two.addEventListener('change', calculate); 
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate)

swap.addEventListener('click', exchangeCurrency)
calculate()