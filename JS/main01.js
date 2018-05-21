'use strict'

function clean(node) {
  for (var n = 0; n < node.childNodes.length; n++) {
    var child = node.childNodes[n];
    if(
      child.nodeType === 8
      ||
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    ){
      node.removeChild(child);
      n--;
    }
    else if (child.nodeType === 1) {
      clean(child);
    }
  }
}
clean(document.body)

// drag and drop

const drag = ev => {
  ev.dataTransfer.setData("text", ev.target.id)
}
const drop = ev => {
  ev.preventDefault()
  let data = ev.dataTransfer.getData("text")
  console.log(ev.target.tagName)
  if (ev.target.tagName !== "IMG"){
    ev.target.appendChild(document.getElementById(data) )
  } else {
    let parent = ev.target.parentNode
    parent.insertBefore(document.getElementById(data), ev.target)
  }
}
const allowDrop = ev => {
  ev.preventDefault();
  // console.log(ev.target.id)
  document.getElementById(ev.target.id).classList.add("brighter")
} 

const dragLeave = ev => document.getElementById(ev.target.id).classList.remove("brighter")

document.querySelectorAll("img").forEach(i => {
  i.ondragstart = drag;
  i.ondragover = allowDrop
  i.ondragleave = dragLeave
})

const app_base = document.getElementById("app-base")
app_base.ondrop = drop

// // causera
// const forward = document.getElementById("forward")
// const backward = document.getElementById("backward")
// const cousera = document.querySelectorAll("#cousera img")
// forward.onclick = ()=> {
//   cousera.forEach(i => i.style.animationDelay = "-0s" )
// }
// backward.onclick = () => {
//   cousera.forEach(i => i.style.animationDelay = "-6s")
// }



// // video
// const play_btn = document.getElementById("play")
// const pause_btn = document.getElementById("pause")
// const video = document.getElementsByTagName("video")[0]
// const time = document.getElementById("video-time")
// const slider = document.getElementById("slider")
// const volume_slider = document.getElementById("volume-slider")

// const play_fn = () => {
//   video.play().then(() => console.log('playing'))
//     .catch(error => console.log('sth wrong'));
// }
// play_btn.onclick = play_fn
// pause_btn.onclick = () => video.pause()

// video.onseekend = () => console.log('seek end')
// video.ontimeupdate = () => time.innerHTML=parseInt(video.currentTime)

// document.getElementById("total-time").innerHTML = parseInt(video.duration)

// slider.setAttribute("max", video.duration)
// slider.oninput = () => video.currentTime=slider.value
// volume_slider.oninput = () => video.volume = volume_slider.value




// // resize handler
// const handler = document.getElementById("handler")
// const wrapper = document.getElementById("wrapper")
// const toggle = document.getElementById("toggle")

// let pos1=0, pos2=0
// const max_width=500, min_width=150

// const closeDragElement = () => {
//   document.onmouseup = null
//   document.onmousemove = null
// }

// const elementDrag = e => {
//   e = e || window.event;
//   pos2 = e.clientX - pos1
//   pos1 = e.clientX
//   let res = wrapper.offsetWidth + pos2
//   if (wrapper.offsetWidth > max_width) {
//     res = max_width
//     closeDragElement()
//   }
//   if (wrapper.offsetWidth < min_width) {
//     res = min_width
//     closeDragElement()
//   } 
//   wrapper.style.width = res+"px"
// }

// const dragMouseDown = e => {
//   e = e || window.event
//   pos1 = e.clientX;
//   document.onmouseup = closeDragElement
//   document.onmousemove = elementDrag
// }

// handler.onmousedown = dragMouseDown

// toggle.addEventListener('click', ()=> wrapper.classList.toggle("toggle-drawer"))










