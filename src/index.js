import $ from 'jquery';
const css = require('./style.css');

const keyboardControls = () => {
  $(document).keydown((e) => {
    if(e.originalEvent.code === 'ArrowLeft' ) {
      $('#character').animate({
        left: '-=10px',
        duration: 0.1
      }, 0, 'linear');
    }

    if(e.originalEvent.code === 'ArrowRight' ) {
      $('#character').animate({
        left: '+=10px',
        duration: 0.1
      }, 0, 'linear');
    }

    if(e.originalEvent.code === 'ArrowDown' ) {
      $('#character').animate({
        top: '+=10px',
        duration: 0.1
      }, 0, 'linear');
    }

    if(e.originalEvent.code === 'ArrowUp' ) {
      $('#character').animate({
        top: '-=10px',
        duration: 0.1
      }, 0, 'linear');
    }


  })
};

// assign my key movement to
$(() => {
  console.log('Starting programe');
  keyboardControls();
  const existingdiv1 = document.getElementById('character');
});
