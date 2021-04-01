const form = document.querySelector("form");

const validateName = (name) => {
  //   console.log(` Your name is ${name}`);
  myRegex = /[A-Za-z]+/;
  return myRegex.test(name);
};

form.addEventListener("submit", (event) => {
  const textInput = document.querySelector("#textInput");
  if (!validateName(textInput.value)) {
    event.preventDefault();
    alert("Please enter in a valid name that doesn't contain numbers");
  }
});

// const nameOfYourFunction = (num1) => {};
// function name(num1){}