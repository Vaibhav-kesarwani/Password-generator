function generate() {
  let dictionary = "";
  if (document.getElementById("lowerCase").checked) {
    dictionary += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (document.getElementById("uperCase").checked) {
    dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if (document.getElementById("number").checked) {
    dictionary += "1234567890";
  }
  if (document.getElementById("spcialChar").checked) {
    dictionary += '!@#$%^&*?/()-_~`+=:"|;{}[]';
  }

  const length = document.querySelector('input[type="range"]').value;

  if (length < 1 || dictionary.length === 0) {
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    const position = Math.floor(Math.random() * dictionary.length);
    password += dictionary[position];
  }

  document.querySelector('input[type="text"]').value = password;
}

[
  ...document.querySelectorAll('input[type="checkbox"], button.generate'),
].forEach((ele) => {
  ele.addEventListener("click", generate);
});

document.querySelector('input[type="range"]').addEventListener("input", (e) => {
  document.querySelector("div.range span").innerHTML = document.querySelector(
    'input[type="range"]'
  ).value;
  generate();
});

document.querySelector("div.password button").addEventListener("click", () => {
  const password = document.querySelector('input[type="text"]').value;
  navigator.clipboard.writeText(password).then(() => {
    document.querySelector("div.password button").innerHTML = "copied!";
    setTimeout(() => {
      document.querySelector("div.password button").innerHTML = "copy";
    }, 1000);
  });
});

generate();
