function subscribe(event) {
    event.preventDefault();
    const emailInput = event.target.querySelector('input[type="email"]');
    if (emailInput.value) {
        alert(`Thank you for subscribing with email: ${emailInput.value}`);
        emailInput.value = '';
    }
  }