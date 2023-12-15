const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');

submitBtn.addEventListener('click', function(e) {
  e.preventDefault();

  // Validate all fields
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const dob = document.getElementById('dob');
  const country = document.getElementById('country');
  const gender = document.querySelectorAll('input[name="gender[]"]:checked');
  const profession = document.getElementById('profession');
  const email = document.getElementById('email');
  const mobileNumber = document.getElementById('mobileNumber');

  if (!firstName.value || !lastName.value || !dob.value || !country.value || !gender.length || !profession.value || !email.value || !mobileNumber.value) {
    alert('Please fill in all the required fields.');
    return;
  }

  // Show popup with selected values
  const popupContent = `
    <h2>Survey Information</h2>
    <ul>
      <li><strong>First Name:</strong> ${firstName.value}</li>
      <li><strong>Last Name:</strong> ${lastName.value}</li>
      <li><strong>Date of Birth:</strong> ${dob.value}</li>
      <li><strong>Country:</strong> ${country.options[country.selectedIndex].text}</li>
      <li><strong>Gender:</strong> ${gender.map(g => g.value).join(', ')}</li>
      <li><strong>Profession:</strong> ${profession.value}</li>
      <li><strong>Email:</strong> ${email.value}</li>
      <li><strong>Mobile Number:</strong> ${mobileNumber.value}</li>
    </ul>
  `;

  const popup = alert(popupContent);

  // Reset the form after closing the popup
  popup.onclose = function() {
    resetBtn.click();
  };
});
