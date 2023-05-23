function ValidPhone(input_str) {
  var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
  return re.test(input_str);
  }
  function ValidEmail(input_str) {
  var re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return re.test(input_str);
  }
  function submitForm(event) {
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var validPhone = ValidPhone(phone);
  var validEmail = ValidEmail(email);
  if (!validPhone) {
  alert("Номер телефона введен неправильно!");
  event.preventDefault();
  } else if (!validEmail) {
  alert("Email введен неправильно!");
  event.preventDefault();
  } else {
  alert("Форма отправлена успешно!");
  }
  } 
  var form = document.getElementById("signup-form");
  form.addEventListener("submit", submitForm);
 