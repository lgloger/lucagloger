const btn = document.getElementById("inputBtn");
const qrCodeImageCon = document.querySelector(".qrCodeImageCon");
const qrCodeImg = document.getElementById("qrCodeImage");

btn.addEventListener("click", () => {
  generateQRCode();
});

function generateQRCode() {
  const input = document.getElementById("qrCodeInput");

  if (input.value.length === 0) {
    return;
  } else {
    qrCodeImg.src =
      `http://api.qrserver.com/v1/create-qr-code/?size=500x500&data=` +
      input.value;

    qrCodeImageCon.classList.remove("show");
  }
}