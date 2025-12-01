let balance = 1000;
const correctPIN = "1234";

function login() {
  const pin = document.getElementById("pin-input").value;
  const error = document.getElementById("login-error");

  if (pin === correctPIN) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("atm-section").style.display = "block";
    document.getElementById("balance").innerText = balance;
    error.textContent = "";
  } else {
    error.textContent = "Incorrect PIN. Try again.";
  }
}

function deposit() {
  const amount = parseFloat(document.getElementById("amount").value);
  const message = document.getElementById("transaction-message");

  if (isNaN(amount) || amount <= 0) {
    message.textContent = "Enter a valid deposit amount.";
    return;
  }

  balance += amount;
  document.getElementById("balance").innerText = balance.toFixed(2);
  message.textContent = `Deposited $${amount.toFixed(2)} successfully.`;
}

function withdraw() {
  const amount = parseFloat(document.getElementById("amount").value);
  const message = document.getElementById("transaction-message");

  if (isNaN(amount) || amount <= 0) {
    message.textContent = "Enter a valid withdrawal amount.";
    return;
  }

  if (amount > balance) {
    message.textContent = "Insufficient funds.";
    return;
  }

  balance -= amount;
  document.getElementById("balance").innerText = balance.toFixed(2);
  message.textContent = `Withdrew $${amount.toFixed(2)} successfully.`;
}

function logout() {
  document.getElementById("pin-input").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("login-section").style.display = "block";
  document.getElementById("atm-section").style.display = "none";
  document.getElementById("transaction-message").textContent = "";
}
