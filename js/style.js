// COPY NUMBER
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

// QR MODAL
function openQR() {
  const modal = document.getElementById("qrModal");
  modal.classList.remove("hidden");

  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";

  new QRCode(qrContainer, {
    text: "https://smartcard7907.netlify.app",
    width: 180,
    height: 180
  });
}

function closeQR() {
  document.getElementById("qrModal").classList.add("hidden");
}

// DOWNLOAD PNG
function downloadQR() {
  const canvas = document.querySelector("#qrcode canvas");
  const link = document.createElement("a");

  link.href = canvas.toDataURL("image/png");
  link.download = "sudeep-qr.png";
  link.click();
}

// DOWNLOAD PDF
function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF();

  const canvas = document.querySelector("#qrcode canvas");
  const imgData = canvas.toDataURL("image/png");

  pdf.addImage(imgData, "PNG", 30, 40, 150, 150);
  pdf.save("sudeep-qr.pdf");
}