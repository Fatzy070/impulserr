function toggleText() {
    const text = document.getElementById("hiddenText");
    const icon = document.getElementById("menuIcon")

    text.classList.toggle("hidden");
    if (text.classList.contains("hidden")) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars" , 'text-white');
      } else {
        icon.classList.remove("fa-bars" , 'text-white');
        icon.classList.add("fa-xmark" , 'text-[rgba(133,72,42,255)]' ,);
      }
}
let date = new Date()
let year = date.getFullYear()
let footer = document.getElementById('sect')
footer.innerHTML =`
  @ ${year} design by fatzy........
`