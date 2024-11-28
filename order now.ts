const orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const phone = document.getElementById('phone').value;
    const flavor = document.getElementById('flavor').value;
    const quantity = document.getElementById('quantity').value;

    // Process the order data (e.g., send to a server-side script)
    // Here's a placeholder for sending data to a server (replace with your actual logic):
    fetch('/process-order', { // Replace '/process-order' with your server endpoint
        method: 'POST',
        body: JSON.stringify({
            name: name,
            location: location,
            phone: phone,
            flavor: flavor,
            quantity: quantity
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Order successfully placed
            alert('Your order has been placed successfully!');
            orderForm.reset(); // Reset the form
        } else {
            // Error processing the order
            alert('An error occurred while placing your order. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});