
const btn = document.getElementById('read-button')

btn.onclick = () => {
    const card = document.querySelector('.card')
    if (card.classList.contains('show')) {
        card.classList.remove('show')
        btn.textContent = 'Read more'
    } else {
        card.classList.add('show')
        btn.textContent = 'Read Less'
    }
}