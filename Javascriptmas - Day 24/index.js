const player = document.getElementById("player")
let prevButton = null

function playSong(id, button) {
  document.getElementById('player').setAttribute('src', `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`)
  if (prevButton) {
    prevButton.classList.toggle('active')
  }
  button.classList.toggle('active')
  prevButton = button
}

function showHide(objBtn) {
  const vPlayer = document.getElementById('player')
  
  if (vPlayer.getAttribute('hidden') === 'hidden') {
    vPlayer.removeAttribute('hidden')
    objBtn.textContent = 'Hide Video'
    objBtn.style.backgroundColor = '#FF9492'
  }
  else {
    vPlayer.setAttribute('hidden', `hidden`)
    objBtn.textContent = 'Show Video'
    objBtn.style.backgroundColor = '#BDD59B'
  }
}