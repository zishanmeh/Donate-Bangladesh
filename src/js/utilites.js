// Convert string to Number and get Value
function getAmountById(id) {
  const value = document.getElementById(id).innerText;
  const valueInFloat = parseFloat(value);
  return valueInFloat;
}

// getting input amount
function getInputAmount(id) {
  const inputValue = document.getElementById(id).value;
  const float_inputValue = parseFloat(inputValue);
  return float_inputValue;
}

// Function for Adding donate;
function addDonate(
  input_amount,
  total_donationed_amount,
  available_balance,
  id_for_toatal_donated_amount
) {
  total_donationed_amount += input_amount;
  available_balance -= input_amount;
  const show_total = document.getElementById(id_for_toatal_donated_amount);
  show_total.innerText = total_donationed_amount.toFixed(2);
  document.getElementById("available_balance").innerText =
    available_balance.toFixed(2);
}

// Add donation history

function addDonationHistory(time, donate_amount, heading) {
  const historyPage = document.getElementById("history-page");
  if (document.getElementById("no-history-title")) {
    historyPage.removeChild(document.getElementById("no-history-title"));
  }
  historyPage.innerHTML += `
    <div class="border border-dark3 p-3 rounded-lg shadow-md w-full mb-4">
        <h1 class="text-2xl font-bold text-dark mb-3">${donate_amount.toFixed(
          2
        )} Taka has been ${heading}</h1>
        <p>Date: ${time}</p>
    </div>
    `;
}

// Hide and show history and donation page
function showById(id, btnId) {
  document.getElementById("donation-page").classList.add("hidden");
  document.getElementById("history-page").classList.add("hidden");
  document.getElementById(btnId).classList.remove("bg-primary");
  document.getElementById(id).classList.remove("hidden");
}
