const buttons = document.querySelectorAll(".btn");
const sections = document.querySelectorAll(".section");

const pageChanging = function () {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove the 'active-btn' class from the currently active button
      const currentBtn = document.querySelector(".active-btn");
      if (currentBtn) {
        currentBtn.classList.remove("active-btn");
      }

      // Add the 'active-btn' class to the clicked button
      button.classList.add("active-btn");

      console.log(`Button "${button.innerText}" clicked. Active class applied.`);
    });
  });

  const icon = document.querySelector("#icon");
  icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    icon.src = document.body.classList.contains("dark-theme")
      ? "/assets/images/1_halo4.jpg"
      : "/assets/images/5_halo4.jpg";
  };

  document.body.addEventListener("click", function (e) {
    if (e.target.dataset.id) {
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const id = e.target.dataset.id;
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
};

pageChanging();