const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emaiVal = email.value;

  //chack if it is a value
  if (!validateEmail(emaiVal)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");

    document.body.innerHTML = `Thank you ! ${emaiVal}`;
  }
});

function validateEmail(email) {
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLocaleLowerCase());
}
