const form = document.getElementById('form');
const DropyourMessage = document.getElementById('DropyourMessage');
const email = document.getElementById('email');
const fullname = document.getElementById('fullname');
const Subject = document.getElementById('Subject');

function checkInputs() {
	// Removing any whitespaces that are not allowed in the input
    const fullnameValue = fullname.value.trim();
	const emailValue = email.value.trim();
	const SsubjectValue = Subject.value.trim();
	const DropyourMessageValue =DropyourMessage.value.trim();
    
	// The following conditional statements are used to determine whether the fullname and 
	// email values' are typed in correctly by the user when filling up the form. If not,
	// then we set error messages informing the user that they need to follow the correct format.
    if(fullnameValue === '') {
		setErrorFor(fullname, 'Sorry, "Name" cannot be blank.');
		return false;
	} else {
		setSuccessFor(fullname);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Sorry, "Email" cannot be blank.');
		return false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email, try again.');
		return false;
	} else {
		setSuccessFor(email);
	}

	alert("Form submitted succesfully");
    return true;
}

// Set the error for the inputs field, this allows us to set custom error messages.
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

// Set the success message when the user has submitted the form successfully.
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// The Regular Expression (regex) pattern is used to match the email field, we often use this to avoid any
// sql injections or xss from hackers and to prevent the user from entering an incorrect email format.
// The same applies for the isnum function.
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isnum(num) {
	return /^(([0-9]{5}-[0-9]{5}))$/.test(num);
}

function handleOnSubmit(e) {
	e.preventDefault();
}