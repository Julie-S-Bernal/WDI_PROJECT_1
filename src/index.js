import $ from 'jquery';
const css = require('./style.css');


const keyboardControls = () => {
  $(document).keydown((e) => {
    if(e.originalEvent.code === 'ArrowLeft' ){
        $('#character').animate({
            left: '-=10px',
            duration: 0.1
        }, () => {
            //animation complete
        });
    }

    if(e.originalEvent.code === 'ArrowRight' ){
        $('#character').animate({
            left: '+=10px',
            duration: 0.1
        }, () => {
            //animation complete
        });
    }
  })
};

$(() => {
  console.log('Starting programe');
  keyboardControls();
  const existingdiv1 = document.getElementById('character');
});
