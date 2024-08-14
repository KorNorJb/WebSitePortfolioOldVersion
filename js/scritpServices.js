const openPopUp = document.getElementById('pop_up_submit')
const closePopUp = document.getElementById('pop_up_close')
const popUp = document.getElementById('pop_up')
openPopUp.addEventListener('click', funcOpen)
function funcOpen() {
	popUp.classList.add('active')
}
closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active')
})