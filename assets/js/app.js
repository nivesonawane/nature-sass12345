
const navToggle = document.getElementById("navToggle");
const navigation = document.getElementById("navigation");

const navToggleHandler = () => {
    navigation.classList.toggle("active");
}

navToggle.addEventListener("click",navToggleHandler);