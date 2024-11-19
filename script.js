document.getElementById("submitSantet").addEventListener("click", function () {
  // Ambil data dari input
  const penerima = document.getElementById("penerima").value;
  const jenisSantet = document.getElementById("jenisSantet").value;

  // Validasi input
  if (penerima.trim() === "") {
    alert("Nama penerima harus diisi!");
    return;
  }

  // Tampilkan hasil
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `Santet jenis <strong>${jenisSantet}</strong> telah dikirim kepada <strong>${penerima}</strong>!`;
});
