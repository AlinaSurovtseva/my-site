let commentForm = document.querySelector('.inner-comment-form');
let commentList = document.querySelector('.comment-list');
let commentFieldName = document.querySelector('.name-field');
let commentField = document.querySelector('textarea');
let submitButton = document.querySelector('.submit-button');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();

    let newComment = document.createElement('li');
    newComment.classList.add('user-comment');


    let newCommentName = document.createElement('h4');
    newCommentName.classList.add('user-name');
    newCommentName.textContent = commentFieldName.value;

    let newCommentText = document.createElement('p');
    newCommentText.classList.add('comment-text');
    newCommentText.textContent = commentField.value;

    let newCommentAvatar = document.createElement('img');
    newCommentAvatar.classList.add('avatar-img');
    newCommentAvatar.src = "img-inner/avatar-def.png";

    commentField.value = '';

    commentList.append(newComment);
    newComment.appendChild(newCommentAvatar);
    newComment.appendChild(newCommentName);
    newComment.appendChild(newCommentText);

};

commentField.oninput = function () {
    if (commentField.value.length < 10 || commentField.value.length > 200) {
        commentForm.classList.add('warning');
        submitButton.disabled = true;
    } else {
    commentForm.classList.remove('warning');
    submitButton.disabled = false;
}
};
