import $ from 'jquery';
const css = require('./style.css');
const menu = $('.title_screen');
// const $collisionBox = $(box);
// const $collisionBoxPosition = $collisionBox.position();
// const $collisionBoxWidth = $collisionBox.width();
// const $collisionBoxheight = $collisionBox.height();

const keyboardControls = () => {
  const position =$('#character').position();
  $(document).keydown((e) => {
    if(e.originalEvent.code === 'ArrowLeft' ) {
      $('#character').animate({
        left: '-=10px',
        duration: 0.1
      }, 0, 'linear');
    }
    if(e.originalEvent.code === 'ArrowRight' ) {
      // if (position.right < 200){
        $('#character').animate({
          left: '+=10px',
          duration: 0.1
        }, 0, 'linear');
      // }
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
  });
};

// assign my key movement to
$(() => {
  console.log('Starting programe');
  keyboardControls();
  createCloud();
  setInterval(moveCloud,500);
});

function createCloud() {

  //identify the div that we want to append children to
  const $sky = $('.sky');

  //append a new div for the cloud to $sky
  $sky.append('<div class="cloud"></div>');
  console.log($sky);
  //animate function to move the cloud from right to left
}
function moveCloud(){

  // animate(properties[, duration][, easing][, callback])
  $('.cloud').animate({'right': '-=50', duration: 0.1 },10000,'linear');


}
