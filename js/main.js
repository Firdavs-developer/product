let elBtn = document.querySelector(".mode");

elBtn.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "dark" || (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.remove("dark"); // O‘chirish
        localStorage.setItem("theme", "light"); // Yangi holatni saqlash
    } else {
        document.documentElement.classList.add("dark"); // Qo‘shish
        localStorage.setItem("theme", "dark"); // Yangi holatni saqlash
    }
});
