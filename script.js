// Scroll đến section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Xử lý form liên hệ
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText = "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.";
  this.reset();
});
