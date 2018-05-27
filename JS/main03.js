'use-strict'

const nav_links = Array.from(document.getElementsByClassName("nav-link"))

nav_links.forEach(i => i.onclick = () => {
    nav_links.forEach(i => i.classList.remove("nav-link--active"))
    i.classList.add("nav-link--active")
  }
)

document.getElementById("nav-more").onclick = () => {
  const wrapper = document.getElementsByClassName("nav-link-wrapper")[0]
  wrapper.classList.toggle("nav-link-wrapper--active")
  wrapper.classList.toggle("hide")
}

document.querySelector(".nav-link:nth-child(1)").classList.add("nav-link--active")





