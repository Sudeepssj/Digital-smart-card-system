function copyNumber() {
  const number = "+917907318517";

  navigator.clipboard.writeText(number).then(() => {
    const msg = document.getElementById("copyMsg");
    msg.classList.remove("hidden");

    setTimeout(() => {
      msg.classList.add("hidden");
    }, 2000);
  });
}