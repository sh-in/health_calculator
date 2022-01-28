'use strict'

// menu
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const spMenus = document.querySelectorAll('.overlay li a');
  
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  
  spMenus.forEach(menu => {
    menu.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });
  });
}