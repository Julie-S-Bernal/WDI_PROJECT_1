$ = require('jquery');
require('./reset.css');
require('./style.css');
// require('./debug.css');

let defaultScore;
let startCreatingClouds;
let life;
const minCloudHeight = 30;
const maxCloudHeight = 60;
const minCloudWidth = 30;
const maxCloudWidth = 60;

let $character;
let $score;
let $gameOver;
let $reset;
let $hearts;
let $sky;

$(init);

function init() {
  $score = $('#score');
  $character = $('#character');
  $gameOver = $('#game-over');
  $reset = $('#reset-button');
  $hearts = $('.heart');
  $sky = $('.sky');

  begin();
  keyboardControls();
  $reset.on('click', begin);
}

function begin() {
  life = 5;
  defaultScore = 500;
  $sky.show();
  $score.html(defaultScore);
  $gameOver.hide();
  $hearts.attr('src', 'images/heart.png');
  startCreatingClouds = setInterval(createCloud, 250);
}

function createCloud() {
  //identify the div that we want to append children to
  // calculate my random spawn
  const randomTop = Math.floor(Math.random() * ($sky.height()-maxCloudHeight)) + 1;
  const randomHeight = Math.floor(Math.random() * maxCloudHeight) + minCloudHeight;
  const randomWidth = Math.floor(Math.random() * maxCloudWidth) + minCloudWidth;
  const $cloud = $('<div class="cloud"></div>');

  $cloud.css({
    top: randomTop,
    height: randomHeight,
    width: randomWidth
  });

  $sky.append($cloud);

  //call to function
  moveCloud($cloud);
}

function moveCloud(cloud) {
  // cloud -> width + height
  const cloudDuration = 3000;

  cloud.animate(
    {
      right: `${$(window).width() * 1.2}`
    },
    {
      duration: cloudDuration,
      easing: 'linear',
      step: function() {
        const $div1 = $(this);
        const $div2 = $character;

        if (detectCollision($div1, $div2)) {
          $div1.remove();

          defaultScore -= 50;
          $score.html(defaultScore);

          new Audio('sound/387834__ryansitz__poof.wav').play();

          // store the div into a variable and the number of the heart (so 1 2 3 4 5 )
          const $whichHeart = $(`.heart${life}`);
          $whichHeart.find('.heart').attr('src', 'images/heart (1).png');

          life--;

          if (life <= 0) {
            clearInterval(startCreatingClouds);
            $sky.hide();
            $gameOver.show();
            $reset.show();
          }
        }
      },
      complete: function() {
        $(this).remove();
      }
    },
  );
}

// detect where character and cloud are
function detectCollision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}

// assign my key movement to
function keyboardControls() {
  $(document).keydown(e => {
    const position = $character.position();
    if (e.originalEvent.code === 'ArrowLeft') {
      if (position.left > 0) {
        $character.animate(
          {
            left: '-=10px',
            duration: 0.1
          },
          0,
          'linear'
        );
      }
    }
    if (e.originalEvent.code === 'ArrowRight') {
      if (position.left <= $sky.width()) {
        $character.animate(
          {
            left: '+=10px',
            duration: 0.1
          },
          0,
          'linear'
        );
      }
    }

    if (e.originalEvent.code === 'ArrowDown') {
      if (position.top <= $sky.height()-$character.height()) {
        $character.animate(
          {
            top: '+=10px',
            duration: 0.1
          },
          0,
          'linear'
        );
      }
    }

    if (e.originalEvent.code === 'ArrowUp') {
      if (position.top > 1) {
        $character.animate(
          {
            top: '-=10px',
            duration: 0.1
          },
          0,
          'linear'
        );
      }
    }
  });
}

// when one min pass Level name pops on screen for 3s and then disapear, goes until level 5
// when player reach 3 min level 3 starts,
