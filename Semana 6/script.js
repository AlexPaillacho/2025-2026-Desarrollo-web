const form = document.getElementById('registrationForm');
const submitBtn = document.getElementById('submitBtn');


const fields = {
    username: {
        input: document.getElementById('username'),
        error: document.getElementById('nameError'),
        isValid: () => fields.username.input.value.length >= 3
    },
    email: {
        input: document.getElementById('email'),
        error: document.getElementById('emailError'),
        isValid: () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.input.value)
    },
    password: {
        input: document.getElementById('password'),
        error: document.getElementById('passError'),
        isValid: () => /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(fields.password.input.value)
    },
    confirmPassword: {
        input: document.getElementById('confirmPassword'),
        error: document.getElementById('confirmError'),
        isValid: () => fields.confirmPassword.input.value === fields.password.input.value && fields.confirmPassword.input.value !== ""
    },
    age: {
        input: document.getElementById('age'),
        error: document.getElementById('ageError'),
        isValid: () => fields.age.input.value >= 18
    }
};


function validateField(fieldName) {
    const field = fields[fieldName];
    const isValid = field.isValid();

    if (isValid) {
        field.input.classList.add('valid');
        field.input.classList.remove('invalid');
        field.error.style.display = 'none';
    } else {
        field.input.classList.add('invalid');
        field.input.classList.remove('valid');
        field.error.style.display = 'block';
    }
    
    checkFormValidity();
}


function checkFormValidity() {
    const allValid = Object.values(fields).every(f => f.isValid());
    submitBtn.disabled = !allValid;
}


Object.keys(fields).forEach(key => {
    fields[key].input.addEventListener('input', () => validateField(key));
});


form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Formulario enviado con éxito! Todos los datos son válidos.');
    form.reset();
    resetStyles();
});


form.addEventListener('reset', () => {
    setTimeout(resetStyles, 0); 
});

function resetStyles() {
    Object.values(fields).forEach(f => {
        f.input.classList.remove('valid', 'invalid');
        f.error.style.display = 'none';
    });
    submitBtn.disabled = true;
}