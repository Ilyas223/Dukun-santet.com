function kirimSantet() {
    const namaPengirim = document.getElementById('namaPengirim').value.trim();
    const namaPenerima = document.getElementById('namaPenerima').value.trim();
    const jenisSantet = document.getElementById('jenisSantet').value;

    if (namaPengirim === "" || namaPenerima === "" || jenisSantet === "") {
        alert("Mohon isi semua kolom!");
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Santet jenis <strong>${jenisSantet}</strong> berhasil dikirim oleh <strong>${namaPengirim}</strong> ke <strong>${namaPenerima}</strong>. (Candaan aja ya!)`;
}
