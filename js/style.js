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
    text: "https://smartcard7907.netlify.app/?v=2ho",
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


// SHARE PROFILE

function shareProfile() {

  if (navigator.share) {

    navigator.share({
      title: "Sudeep Singh — Django Developer",
      text: "Check out my digital card",
      url: "https://smartcard7907.netlify.app/?v=2ho"
    });

  } else {

    navigator.clipboard.writeText(
      "https://smartcard7907.netlify.app/?v=2ho"
    );

    alert("Profile link copied!");

  }

}

// TOGGLE SHARE MENU

function toggleShareMenu() {

  const menu = document.getElementById("shareMenu");

  menu.classList.toggle("hidden");

}

// COPY PROFILE LINK

function copyProfileLink() {

  navigator.clipboard.writeText(
    "https://smartcard7907.netlify.app/?v=2ho"
  );

  alert("Profile link copied!");

}

// SHARE QR IMAGE

async function shareQR() {

  try {

    // GET QR CANVAS
    const canvas = document.querySelector("#qrcode canvas");

    // CONVERT TO BLOB
    canvas.toBlob(async (blob) => {

      const file = new File(
        [blob],
        "sudeep-qr.png",
        { type: "image/png" }
      );

      // SHARE SUPPORT
      if (navigator.canShare && navigator.canShare({ files: [file] })) {

        await navigator.share({
          title: "Sudeep Singh QR",
          text: "Scan this QR to open my digital card",
          files: [file]
        });

      } else {

        alert("QR sharing not supported on this device.");

      }

    });

  } catch (error) {

    console.log(error);

    alert("Unable to share QR.");

  }

}
// CLOSE MODAL WHEN CLICK OUTSIDE

function outsideClose(event) {

  const modalContent =
    document.querySelector("#qrModal > div");

  // IF CLICKED OUTSIDE
  if (!modalContent.contains(event.target)) {

    closeQR();

  }

}

// CLOSE SHARE MENU WHEN CLICK OUTSIDE

document.addEventListener("click", function(event) {

  const shareMenu =
    document.getElementById("shareMenu");

  const shareButton =
    document.getElementById("shareToggle");

  // IF MENU OPEN
  if (!shareMenu.classList.contains("hidden")) {

    // CLICK OUTSIDE
    if (
      !shareMenu.contains(event.target) &&
      !shareButton.contains(event.target)
    ) {

      shareMenu.classList.add("hidden");

    }

  }

});

// PREMIUM LOADER + PAGE TRANSITION

window.addEventListener("load", () => {

  const loader =
    document.getElementById("loader");

  // PAGE LOAD
  setTimeout(() => {

    // HIDE LOADER
    loader.classList.add("hide");

    // SHOW PAGE
    document.body.classList.remove("page-hidden");

    document.body.classList.add("page-loaded");

  }, 1200);

});

// AUTO TOOLTIP SHOW

window.addEventListener("load", () => {

  const tooltip =
    document.querySelector(".whatsapp-tooltip");

  // SHOW
  setTimeout(() => {

    tooltip.style.opacity = "1";

    tooltip.style.transform =
      "translateY(0)";

  }, 2500);

  // HIDE
  setTimeout(() => {

    tooltip.style.opacity = "0";

    tooltip.style.transform =
      "translateY(6px)";

  }, 6500);

});