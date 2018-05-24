

document.querySelector('#loan-form').addEventListener('submit',function(e){
	// hide result
	document.getElementById('results').style.display='none';

	// show result
	document.getElementById('loading').style.display='block';

	setTimeout(calculateResults,1000);

	e.preventDefault();

});

function calculateResults(e){
	// alert('Why');
	// console.log('kkk');

	const amount=document.getElementById('amount');
	const interest=document.getElementById('interest');
	const years=document.getElementById('years');
	const monthlyPayment=document.getElementById('monthly-payment');
	const totalPayment=document.getElementById('total-payment');
	const totalInterest=document.getElementById('total-interest');

	const principal=parseFloat(amount.value);
	//console.log(principal);

	const calculatedInterest=parseFloat(interest.value) / 100 / 12;
	//console.log(calculatedInterest);

	const calculatedPayment=parseFloat(years.value)*12;
	//console.log(calculatedPayment);

	//Compute Monthly Payment

	const x=Math.pow(1+calculatedInterest,calculatedPayment);
	//console.log(x);
	const monthly=(principal*x*calculatedInterest)/(x-1);

	if(isFinite(monthly)){
		monthlyPayment.value=monthly.toFixed(2);
		totalPayment.value=(monthly*calculatedPayment).toFixed(2);
		totalInterest.value=((monthly*calculatedPayment)-principal).toFixed(2);
		// hide result
		document.getElementById('results').style.display='block';

		// show result
		document.getElementById('loading').style.display='none';

	}else{
		showError('Please check your Numbers');
	}




	
}


// show eroor

function showError(error){

	// hide result
	document.getElementById('results').style.display='none';

	// show result
	document.getElementById('loading').style.display='none';


	const errorDiv=document.createElement('div');
	// get element
	const card=document.querySelector('.card');
	const heading=document.querySelector('.heading');
	//
	errorDiv.className='alert alert-danger';
	errorDiv.appendChild(document.createTextNode(error));

	// insert error above heading
	card.insertBefore(errorDiv,heading);

	// clear error after 3 sec
	setTimeout(clearError,2000);
}

function clearError(){
	document.querySelector('.alert').remove();
}