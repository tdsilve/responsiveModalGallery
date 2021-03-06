/*The script contains three events that allow the events described above:

1. Close a modal window when the modal's button is clicked;
2. Open a modal window and display the selected image;
3. Close a modal window when the user clicks outside image displayed.
*/


const imgs = document.querySelectorAll('.modal-img');
const modalWindow = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalBtn = document.querySelector('.modal-btn');

// 1. Close a modal window when the modal's button is clicked
modalBtn.addEventListener('click', closeModal);

// 2. Open a modal window and display the selected image
imgs.forEach((img) => {
    img.addEventListener('click', openImage);
});

// 3. Close a modal window when the user clicks outside image displayed.
modalWindow.addEventListener('click', (evt) =>{
    console.log(isClickedOutside(evt));
    if (isClickedOutside){
        console.log('heyyy');
        closeModal();
    }
});

// Auxiliary functions
function openImage(img){
    modalWindow.style.display = 'flex';
    modalContent.innerHTML = `<img src= ${this.src}>`;
}

function closeModal(){
    modalWindow.style.display = 'none';
}

function isClickedOutside(evt){
    /*Return true if user click outside the image in the modal*/
    return !modalContent.contains(evt.target);
}
