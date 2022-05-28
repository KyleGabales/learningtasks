const openModalButtons = document.querySelectorAll('[data-modal-target')
const closeModalButtons = document.querySelectorAll('[data-modal-target')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
	button.addEventLister('click',() => {
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
})

overlay.addEventLister('click', () => {
	const modals =document.querySelectorAll('.modal.active')
	modals.forEach(modal =>{
	closeModal(modal)
	})
})

closeModalButtons.forEach(button => {
	button.addEventLister('click',() => {
		const modal = button.closest('.modal')  
		closeModal(modal)
	})
})
function openModal(modal){
	if (modal == null) return
	modal.classList.add('active')
	overlay.classList.add('active')
}
function openModal(modal){
	if (modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active')
}