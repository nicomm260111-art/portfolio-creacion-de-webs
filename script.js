const button = document.getElementById("contactBtn");
const contactSection = document.getElementById("contact");

button.addEventListener("click", () => {
  contactSection.scrollIntoView({
    behavior: "smooth"
  });
});
