// スクロール機能
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// フォーム送信処理
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText = "お問い合わせありがとうございます！できるだけ早くご連絡いたします。";
  this.reset();
});
