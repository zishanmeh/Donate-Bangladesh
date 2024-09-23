// Donate Noakhali
const modal = document.getElementById("my_modal_1");
document
  .getElementById("donate-noakhali")
  .addEventListener("click", function () {
    const availableBalance = getAmountById("available_balance");
    const amount = getInputAmount("amount-for-noakhali");
    const total_noakhali_donation = getAmountById("total_noakhali_donation");
    // Validation
    if (amount > availableBalance || amount <= 0 || isNaN(amount) === true) {
      alert("Invalid input! Please check!!!");
      document.getElementById("amount-for-noakhali").value = "";
      return;
    }

    // Adding donate
    addDonate(
      amount,
      total_noakhali_donation,
      availableBalance,
      "total_noakhali_donation"
    );
    document.getElementById("amount-for-noakhali").value = "";
    // Adding in history
    const newTime = new Date();
    const heading = document.getElementById("noakhali_heading").innerText;
    addDonationHistory(newTime, amount, heading);

    // showing model
    modal.showModal();
  });

//   Donate feni

document
  .getElementById("donate-feni-btn")
  .addEventListener("click", function () {
    const availableBalance = getAmountById("available_balance");
    const amount = getInputAmount("amount-for-feni");
    const total_donation = getAmountById("total_feni_donation");
    // Validation
    if (amount > availableBalance || amount <= 0 || isNaN(amount) === true) {
      document.getElementById("amount-for-feni").value = "";
      alert("Invalid input! Please check!!!");
      return;
    }
    //   Adding donate
    addDonate(amount, total_donation, availableBalance, "total_feni_donation");
    document.getElementById("amount-for-feni").value = "";
    // Adding in history
    const newTime = new Date();
    const heading = document.getElementById("feni_heading").innerText;
    addDonationHistory(newTime, amount, heading);
    // showing model
    modal.showModal();
  });

//   Donate for injured
document.getElementById("quota-btn").addEventListener("click", function () {
  const availableBalance = getAmountById("available_balance");
  const amount = getInputAmount("amount-for-injured");
  const total_donation = getAmountById("total_donation_for_injured");
  //   Validation
  // Validation
  if (amount > availableBalance || amount <= 0 || isNaN(amount) === true) {
    document.getElementById("amount-for-injured").value = "";
    alert("Invalid input! Please check!!!");
    return;
  }
  //   Adding donate
  addDonate(
    amount,
    total_donation,
    availableBalance,
    "total_donation_for_injured"
  );
  document.getElementById("amount-for-injured").value = "";

  // Adding in history
  const newTime = new Date();
  const heading = document.getElementById("quota_heading").innerText;
  addDonationHistory(newTime, amount, heading);
  // showing model
  modal.showModal();
});

// Clicking show donation btn
document
  .getElementById("show-donation")
  .addEventListener("click", function (event) {
    showById("donation-page", "show-history");
    event.target.classList.add("bg-primary");
  });
document
  .getElementById("show-history")
  .addEventListener("click", function (event) {
    showById("history-page", "show-donation");
    event.target.classList.add("bg-primary");
  });

// send blog page when click to blog-page-btn
document.getElementById("blog-page-btn").addEventListener("click", function () {
  window.location.href = "src/blog.html";
});
