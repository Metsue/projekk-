// const btnSimpanData = document.querySelector("simpanData");
// btnSimpanData.addEventListener("click", function() {
//     alert("Data Telah Disimpan");
// });

document.getElementById("formProduksi").addEventListener("submit", function(e) {
  e.preventDefault();

  fetch("https://script.google.com/macros/s/AKfycbyVqgYfU4TZhxTf4pDO_uc4uJFCSc0QNT9r_KLkWx2uV7wzQusrGAJZPSX5Ha278pW-/exec", {
    method: "POST",
    body: JSON.stringify({
      nama_id: nama_id.value,
      job_site: job_site.value,
      status: status_kontraktor.value,
      target_produksi: target_produksi.value,
      sr: sr.value,
      unit_populasi: unit_populasi.value,
      quantity: quantity.value,
      productivity: productivity.value,
      pa: pa.value,
      ua: ua.value,
      fuel_consumption: fuel_consumption.value
    })
  })
  .then(() => {
    const info = document.getElementById("info");
    const textInfo = document.createTextNode("Data berhasil disimpan");
    // info.innerText = "Data berhasil disimpan";
    info.appendChild(textInfo);
    formProduksi.reset();
  });
});

