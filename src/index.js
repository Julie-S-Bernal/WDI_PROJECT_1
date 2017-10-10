import $ from 'jquery';

const css = require('./style.css');
const menu = $('.title_screen');
const $scoreBoard = $('.score-board');
const $score = $('.score');
let  life = 5;
let defaultScore = 500;


const keyboardControls = () => {

  $(document).keydown((e) => {
    const position = $('#character').position();
    if(e.originalEvent.code === 'ArrowLeft' ) {
      if (position.left > 0){
        $('#character').animate({
          left: '-=10px',
          duration: 0.1
        }, 0, 'linear');
      }
    }
    if(e.originalEvent.code === 'ArrowRight' ) {
      if (position.left <= 490){
        $('#character').animate({
          left: '+=10px',
          duration: 0.1
        }, 0, 'linear');
      }
    }

    if(e.originalEvent.code === 'ArrowDown' ) {
      if (position.top <= 601) {
        $('#character').animate({
          top: '+=10px',
          duration: 0.1
        }, 0, 'linear');
      }

    }

    if(e.originalEvent.code === 'ArrowUp' ) {
      if (position.top > 1) {
        $('#character').animate({
          top: '-=10px',
          duration: 0.1
        }, 0, 'linear');
      }
    }
  });
};

let $character = null;

// assign my key movement to
$(() => {

  $character = $('#character');
  console.log('this is the character', $character);
  keyboardControls();
  createCloud();
  setInterval(createCloud,2000);
  detectCollision();



});

function createCloud() {
  //identify the div that we want to append children to
  const $sky = $('.sky');

  // calculate my random spawn
  const randomTop = Math.floor(Math.random() * 400) + 1;
  const randomHeight = Math.floor(Math.random() * 120) + 50;
  const randomWidth = Math.floor(Math.random() * 100) + 80;

  const $cloud = $('<div class="cloud"></div>');
  $sky.append($cloud);
  // generate many clouds
  $($cloud).css({'top': randomTop, 'height': randomHeight,'width': randomWidth});
  //call to function
  moveCloud($cloud);
}

function moveCloud(cloud){

  // cloud -> width + height
  const cloudWidth = parseInt(cloud.css('width'));
  const cloudDuration = parseInt(`${cloudWidth * 4}0`);
  cloud.animate(
    {
      'left': '600'
    },
    {
      duration: cloudDuration,
      easing: 'linear',
      complete: function() {
        cloud.remove();
      },
      step: function() {
        if (!detectCollision(cloud, $character)) {
          console.log('you lost a life');
          //remove cloud after collision
          // $(cloud).explode();
          cloud.remove();
          defaultScore++;
      console.log(defaultScore);
      $score.text(defaultScore);


          new Audio('sound/387834__ryansitz__poof.wav').play();

          // $.playSound('./387834__ryansitz__poof.wav')

          // store the div into a variable and the number of the heart (so 1 2 3 4 5 )
          const whichHeart = $(`.heart${life}`);
          $((whichHeart[0]).children).attr('src', 'images/heart (1).png');

          life--;



          if (life === 0) {
            console.log('game over');
          }

          console.log(life);
          $score.text(life);
        }
        // }else {
        //   life === 0
        //   console.log(game Over)
        //   // display menu and  score board
        // }
        //   // -50 points when hit cloud, user starts at 500
        // document.getElementsByClassName('heart1')img.attr("/", img.attr("images/heartbl.png").replace();;// decrement lives

        // if lives === 0 game over
      }

    }

  );
}

// detect where character and cloud are
function detectCollision(divA, divB) {
  var x1 = divA.offset().left;
  var y1 = divA.offset().top;
  var x2 = divB.offset().left;
  var y2 = divB.offset().top;
  // collision detection
  if ((y1 + divA.outerHeight(true)) < y2 ||
  y1 > (y2 + divB.outerHeight(true)) ||
  (x1 + divA.outerWidth(true)) < x2  ||
  x1 > (x2 + divB.outerWidth(true))){
    return true;
  }
  return false;
}
