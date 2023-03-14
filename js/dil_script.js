const dilSecimi = document.getElementById("dil");

dilSecimi.addEventListener("change", function() {
  const secilenDil = dilSecimi.value;
  if (secilenDil === "en") {
    window.location.href = "./english/index.html";
  } else {
    // Diğer diller için yönlendirme işlemleri burada yapılabilir
  }
});


