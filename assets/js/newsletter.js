function subscribeFormSubmit(event) {
  event.preventDefault();
  const form = event.target.closest('form');
  const emailInput = form.querySelector('input[type="text"]');
  const subscribeButton = form.querySelector('input[type="submit"]');
  const apiUrl = "https://assets.mailerlite.com/jsonp/534041/forms/95167824242148861/subscribe"; // Replace with your MailerLite API endpoint

  const email = emailInput.value.trim(); // Get the user's email address from the input field and remove leading/trailing spaces

  // Validate the email using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Prepare the request body
  const requestBody = {
      fields: {
          email: email,
      },
  };

  // Prepare the fetch options
  const fetchOptions = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
  };

  // Perform the AJAX request to the MailerLite server
  fetch(apiUrl, fetchOptions)
      .then(response => {
          if (response.ok) {
              return response.json();
          } else {
              throw new Error('Failed to subscribe.');
          }
      })
      .then(data => {
          // Handle the API response data as needed (e.g., show a success message)
          subscribeButton.value = 'Subscribed';
          emailInput.value = ''; // Clear the email input after subscribing (optional)
          alert('Subscription successful!');
      })
      .catch(error => {
          // Handle errors appropriately (e.g., show an error message)
          console.error(error);
          alert('Subscription failed. Please try again later.');
      });
}

const form = document.getElementById('subscription-form');
form.addEventListener('submit', subscribeFormSubmit);
