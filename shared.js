var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var selectNoButton = document.querySelector('.modal__action--negative');

// console.dir(backdrop);
// console.dir(selectPlanButtons);
//console.dir(selectNoButton);

for(var i = 0; i < selectPlanButtons.length ; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

selectNoButton.addEventListener('click', closeModal);

backdrop.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}