window.addEventListener("click", (event) => {
    if (event.target.classList.contains("header-text") || event.target.closest(".header-text")) {
        const currentScheme = document.documentElement.style.colorScheme;
        (currentScheme==="dark")?
            document.documentElement.style.colorScheme = "light":
            document.documentElement.style.colorScheme = "dark";
    }
});
