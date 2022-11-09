'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

//Declaring functions for reafctoring...

const showModalWindow = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalWindow = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', showModalWindow);
  //                                    function () {
  //   modal.classList.remove('hidden');
  //   overlay.classList.remove('hidden');
  // });
}

btnCloseModal.addEventListener('click', closeModalWindow);
//                                    function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

overlay.addEventListener('click', closeModalWindow);
//                                    function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

document.addEventListener('keydown', function (e) {
  // if (e.key === 'Escape') {
  //   if (!modal.classList.contains('hidden')) {
  //     closeModalWindow();
  //   }
  // }

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalWindow();
  }
});
