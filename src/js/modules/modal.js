
const openModalButton = document.querySelector('a.button-input');
const closeModalButton = document.querySelector('.modal-close-button');
const modalContainer = document.querySelector('.modal-container');
const modalAuth = document.querySelector('.modal-auth');

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

const isEnterKey = (evt) => {
  return evt.key === 'Enter';
};



const onModalEscKeydown = (evt)  =>{
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalMenu();
    }
};



function openModalMenu(){
  modalContainer.classList.remove('modal-container-close');

  document.addEventListener('keydown', onModalEscKeydown);
}

function closeModalMenu(){
  modalContainer.classList.add('modal-container-close')
  document.removeEventListener('keydown', onModalEscKeydown);
}



openModalButton.addEventListener('click', (evt) => {
  openModalMenu();
});

openModalButton.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openModalMenu();
  }
});

closeModalButton.addEventListener(('click') , () => {
  closeModalMenu();
}
)

closeModalButton.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeModalMenu();
  }
});


// закрываем модальное окно нажатием мышки вне его
document.addEventListener('mousedown', function(e) {
    if(e.target.closest('.modal-auth') === null){
      closeModalMenu();
    }
});

