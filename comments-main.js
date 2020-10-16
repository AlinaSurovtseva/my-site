let commentMainForm = document.querySelector('.contact-form');
let commentMainField = document.querySelector('textarea');
let submitMainButton = document.querySelector('.submit-button');

commentMainField.oninput = function () {
    if (commentMainField.value.length < 10 || commentMainField.value.length > 200) {
        commentMainForm.classList.add('warning');
        submitMainButton.disabled = true;
    } else {
    commentMainForm.classList.remove('warning');
    submitMainButton.disabled = false;
}
};