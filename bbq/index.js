const emailCollectorForm = document.getElementById('email-collector');

emailCollectorForm.addEventListener('submit', (event) => {
  event.preventDefault;
  //   setTimeout(() => console.log(''), 2000);
  //   console.log('register clicked');

  const ourFormData = new FormData(event.target);

  const userFirstName = ourFormData.get('first-name');
  const userEmailAddress = ourFormData.get('email');

  const updatedHtmlContent = `
  <h2>Congratulations, ${userFirstName}!</h2>
  <p class="register-subtitle">
    You're on your way to becoming a BBQ Master!
  </p>
  <p class="register-disclaimer"><small>You will get weekly BBQ tips sent to: ${userEmailAddress}<small></p>
  `;

  const mainContent = document.getElementById('Main-Content');

  mainContent.innerHTML = updatedHtmlContent;
  //   console.log(userFirstName);
});
