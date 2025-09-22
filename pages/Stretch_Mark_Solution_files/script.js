// Package prices
const packages = {
    regular: { name: 'Regular Package', price: 17900 },
    vip: { name: 'VIP Package', price: 30500 },
    vvip: { name: 'VVIP Package', price: 42000 }
};

const soapPrice = 3000;

// DOM elements
const form = document.getElementById('orderForm');
const packageRadios = document.querySelectorAll('input[name="package"]');
const addSoapCheckbox = document.getElementById('addSoap');
const totalAmountElement = document.getElementById('totalAmount');
const packagePriceElement = document.getElementById('packagePrice');
const soapProductElement = document.getElementById('soapProduct');
const soapQuantityElement = document.getElementById('soapQuantity');
const soapPriceElement = document.getElementById('soapPrice');
const summaryTotalElement = document.getElementById('summaryTotal');

// Form inputs
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const stateSelect = document.getElementById('state');
const addressTextarea = document.getElementById('address');

// Error elements
const nameError = document.getElementById('nameError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');
const stateError = document.getElementById('stateError');
const addressError = document.getElementById('addressError');

// Format price function
function formatPrice(price) {
    return `₦${price.toLocaleString()}`;
}

// Update total price
function updateTotal() {
    const selectedPackage = document.querySelector('input[name="package"]:checked').value;
    const packageData = packages[selectedPackage];
    const soapAdded = addSoapCheckbox.checked;
    
    const packagePrice = packageData.price;
    const totalPrice = packagePrice + (soapAdded ? soapPrice : 0);
    
    // Update main total
    totalAmountElement.textContent = `Total: ${formatPrice(totalPrice)} Only`;
    
    // Update order summary
    packagePriceElement.textContent = formatPrice(packagePrice);
    soapProductElement.textContent = soapAdded ? 'Kojic Soap' : '';
    soapQuantityElement.textContent = soapAdded ? '1' : '0';
    soapPriceElement.textContent = soapAdded ? formatPrice(soapPrice) : '₦0';
    summaryTotalElement.textContent = formatPrice(totalPrice);
}

// Clear error function
function clearError(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
}

// Show error function
function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
}

// Validate form
function validateForm() {
    let isValid = true;
    
    // Clear all errors first
    clearError(nameInput, nameError);
    clearError(phoneInput, phoneError);
    clearError(emailInput, emailError);
    clearError(stateSelect, stateError);
    clearError(addressTextarea, addressError);
    
    // Validate name
    if (!nameInput.value.trim()) {
        showError(nameInput, nameError, 'Name is required');
        isValid = false;
    }
    
    // Validate phone
    if (!phoneInput.value.trim()) {
        showError(phoneInput, phoneError, 'Phone number is required');
        isValid = false;
    }
    
    // Validate email
    if (!emailInput.value.trim()) {
        showError(emailInput, emailError, 'Email is required');
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate state
    if (!stateSelect.value) {
        showError(stateSelect, stateError, 'State is required');
        isValid = false;
    }
    
    // Validate address
    if (!addressTextarea.value.trim()) {
        showError(addressTextarea, addressError, 'Delivery address is required');
        isValid = false;
    }
    
    return isValid;
}

// Event listeners
packageRadios.forEach(radio => {
    radio.addEventListener('change', updateTotal);
});

addSoapCheckbox.addEventListener('change', updateTotal);

// Clear errors on input
nameInput.addEventListener('input', () => clearError(nameInput, nameError));
phoneInput.addEventListener('input', () => clearError(phoneInput, phoneError));
emailInput.addEventListener('input', () => clearError(emailInput, emailError));
stateSelect.addEventListener('change', () => clearError(stateSelect, stateError));
addressTextarea.addEventListener('input', () => clearError(addressTextarea, addressError));

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        // Get form data
        const selectedPackage = document.querySelector('input[name="package"]:checked').value;
        const packageData = packages[selectedPackage];
        const soapAdded = addSoapCheckbox.checked;
        const totalPrice = packageData.price + (soapAdded ? soapPrice : 0);
        
        const formData = {
            package: packageData.name,
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim(),
            state: stateSelect.value,
            address: addressTextarea.value.trim(),
            addSoap: soapAdded,
            total: totalPrice
        };
        
        // Here you would typically send the data to a server
        console.log('Order submitted:', formData);
        alert('Order submitted successfully! You\'ll pay only when it arrives.');
        
        // You can add code here to send the data to your backend
        // fetch('/submit-order', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData)
        // });
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

// Initialize total on page load
updateTotal();