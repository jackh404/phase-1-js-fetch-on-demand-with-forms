const init = () => {
  document.querySelector('form').addEventListener("submit", e => {
    e.preventDefault()
    const input = e.target.querySelector('input#searchByID')
    fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data =>{
            document.querySelector('section#movieDetails h4').innerText = data.title
            document.querySelector('section#movieDetails p').innerText = data.summary
        })
  })
}

document.addEventListener('DOMContentLoaded', init);