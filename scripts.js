let nameInput = document.querySelector('input.name-input')
let emailInput = document.querySelector('input.email-input')
let nameLabel = document.querySelector('label.name-input')
let emailLabel = document.querySelector('label.email-input')

document.addEventListener('click', function(e){
    if (nameInput.contains(e.target)){
        nameLabel.style.display = "none"
    } else if(emailInput.contains(e.target)) {
        emailLabel.style.display = "none"
    } else {
        nameLabel.style.display = "flex"
        emailLabel.style.display = "flex"
    }
}) 

function submitFormHandler() {
    let formArea = document.querySelector('.form-area')
    let successArea = document.querySelector('.send-success')

    formArea.style.display = 'none';
    successArea.style.display = 'block';
}