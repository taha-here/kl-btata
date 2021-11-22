const init = () => {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleSubmit);
}

const handleSubmit = (e) => {
    e.preventDefault();
    const fNameField = document.getElementById('fname');
    const lNameField = document.getElementById('lname');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');
    const messageField = document.getElementById('message');

    if (!validateFields(fNameField, lNameField, emailField, phoneField, messageField)) return;

    alert('Your message has been recorded...');

    e.target.reset();
    
}

const validateFields = (fNameField, lNameField, emailField, phoneField, messageField) => {
    if (!validateName(fNameField.value)) {
        throwError('Please enter a valid first name', fNameField)
        return false;
    }

    if (!validateName(lNameField.value)) {
        throwError('Please enter a valid last name', lNameField)
        return false;
    }

    if (!validateEmail(emailField.value)) {
        throwError('Please enter a valid email', emailField);
        return false;
    }

    if (!validatePhoneNumber(phoneField.value)) {
        throwError('Please enter a valid contact number', phoneField);
        return false
    }

    if (!validateMessage(messageField.value)) {
        throwError('Subject should be atleast 4 characters long...', messageField);
        return false;
    }
    return true;
}

const validateName = (name) => {
  const re = /^[A-Z][a-z]*(([,.] |[ '-])[A-Za-z][a-z]*)*(\.?)$/;
  return re.test(name);
};

const validateEmail = (email) => {
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateMessage = (text) => {
    const res = text.length < 4 ? false : true;
    return res;
};

const validatePhoneNumber = (number) => {
    const re = /\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})/;
    return re.test(number);
};

const throwError = (message, element) => {
    const elementWrapper = element.parentElement;
    const err = document.createElement('span');
    err.classList.add('err');
    err.textContent = message;
    elementWrapper.appendChild(err);
    setTimeout(() => {
      elementWrapper.removeChild(elementWrapper.lastChild);
    }, 3000);
};
  

document.addEventListener('DOMContentLoaded', init)
