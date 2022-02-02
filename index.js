function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
  const menuIcon = document.getElementById("menuIcon");
  if (menu.style.display === "flex") {
    menuIcon.style.opacity = "50%";
  } else {
    menuIcon.style.opacity = "100%";
  }
}
