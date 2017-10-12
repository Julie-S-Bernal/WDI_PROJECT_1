$ = require('jquery');
require('./reset.css');
require('./style.css');
// require('./debug.css');

let defaultScore;
let startCreatingClouds;
let lives;
const minCloudHeight = 30;
const maxCloudHeight = 40;
const minCloudWidth = 30;
const maxCloudWidth = 40;
const minCircleHeight = 30;
const maxCircleHeight = 30;
const minCircleWidth = 30;
const maxCircleWidth = 30;
const minlifeGlobeHeight = 30;
const maxlifeGlobeHeight = 30;
const minlifeGlobeWidth = 30;
const maxlifeGlobeWidth = 30;
let CreateCircles;
let createLifeGlobes;
let playing;
let timeleft = 0;
let timer;
let backgroundInterval;

let $character;
let $score;
let $gameOver;
let $reset;
let $hearts;
let $sky;
let $play;
let $titleScreen;
let $circle;
let $lifeGlobe;
let $bestScore;
let $level;
let $youWin;

$(init);

function init() {
  $score = $('#score');
  $level = $('#level');
  $character = $('#character');
  $gameOver = $('#game-over');
  $reset = $('.reset-button');
  $hearts = $('.heart');
  $sky = $('.sky');
  $play = $('#play');
  $titleScreen = $('.launch-screen');
  $bestScore =$('#best-score');
  $youWin =$('#win');

  keyboardControls();

  $play.on('click', start);
  $reset.on('click', begin);

}

function start() {
  $titleScreen.hide();
  begin();
  startTimer();
  $youWin.hide();
  $youWin.hide();
  $reset.hide();
}

function begin() {
  playing = true;
  lives = 5;
  const level = 1;
  defaultScore = 500;
  $level.html(level);
  $sky.show();
  $score.html(defaultScore);
  $gameOver.hide();
  $hearts.attr('src', 'images/heart.png');
  startCreatingClouds = setInterval(createCloud, 250);
  CreateCircles = setInterval(createCircle, 2000);
  createLifeGlobes = setInterval(createLifeGlobe, 800);
  $youWin.hide();

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
        if (!playing) return;

        const $div1 = $(this);
        const $div2 = $character;

        if (detectCollision($div1, $div2)) {
          console.log('i have hit a cloud blob');
          $div1.remove();

          defaultScore -= 50;
          $score.html(defaultScore);

          new Audio('sound/387834__ryansitz__poof.wav').play();

          lives--;
          $($('.heart')[lives]).attr('src', 'images/heart (1).png');

          if (lives <= 0) {
            playing = false;
            $('.cloud').stop().remove();
            $('.circle').stop().remove();
            $('.lifeGlobe').stop().remove();
            clearInterval(startCreatingClouds);
            clearInterval(CreateCircles);
            clearInterval(timer);
            clearInterval(createLifeGlobes);
            $sky.hide();
            $gameOver.show();
            $reset.show();
            // show person final score and person best score on screen
            // store score into an array that should be displayed next game
          }
          // if player reach level 10 with timer launch victory screen with final score and reset button
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

//new collision, + 100 points if we get them

function createCircle() {
  //identify the div that we want to append children to
  // calculate my random spawn  of circles
  const randomCircleTop = Math.floor(Math.random() * ($sky.height()-maxCircleHeight)) + 1;
  const randomCircleHeight = Math.floor(Math.random() * maxCircleHeight) + minCircleHeight;
  const randomCircleWidth = Math.floor(Math.random() * maxCircleWidth) + minCircleWidth;
  $circle = $('<div class="circle"></div>');

  $circle.css({
    top: randomCircleTop,
    height: randomCircleHeight,
    width: randomCircleWidth
  });

  $sky.append($circle);

  //call to function
  moveCircle($circle);
}

function moveCircle(circle) {
  // circle -> width + height
  const circleDuration = 2000;

  circle.animate(
    {
      right: `${$(window).width() * 1.2}`
    },
    {
      duration: circleDuration,
      easing: 'linear',
      step: function() {
        const $div1 = circle;
        const $div2 = $character;


        if (detectCollision($div1, $div2)) {
          $div1.remove();

          defaultScore += 100;
          $score.html(defaultScore);

          new Audio('sound/./242501__gabrielaraujo__powerup-success.wav').play();
        }
      }

    },
  );
}
// REGAIN LIVES!!!!!!!!!!!!!!
function createLifeGlobe() {
  //identify the div that we want to append children to
  // calculate my random spawn  of circles
  const randomlifeGlobeTop = Math.floor(Math.random() * ($sky.height()-maxlifeGlobeHeight)) + 1;
  const randomlifeGlobeHeight = Math.floor(Math.random() * maxlifeGlobeHeight) + minlifeGlobeHeight;
  const randomlifeGlobeWidth = Math.floor(Math.random() * maxlifeGlobeWidth) + minlifeGlobeWidth;
  $lifeGlobe = $('<div class="lifeGlobe"></div>');

  $lifeGlobe.css({
    top: randomlifeGlobeTop,
    height: randomlifeGlobeHeight,
    width: randomlifeGlobeWidth
  });

  $sky.append($lifeGlobe);

  //call to function
  moveLifeGlobe($lifeGlobe);
}

function moveLifeGlobe(lifeGlobe) {
  // console.log(lifeGlobe);
  // circle -> width + height
  const lifeGlobeDuration = 2000;

  lifeGlobe.animate(
    {
      right: `${$(window).width() * 1.2}`
    },
    {
      duration: lifeGlobeDuration,
      easing: 'linear',
      step: function() {
        const $div1 = lifeGlobe;
        const $div2 = $character;

        // console.log($div1, $div2);

        if (detectCollision($div1, $div2)) {
          $div1.remove();
          console.log('i have hit a blue');
          new Audio('sound/./Magic_Chime.mp3').play();

          if (lives !== 5) {
            $($('.heart')[lives]).attr('src', 'images/heart.png');
            lives++;

          }
        }
      }

    },
  );
}
// TIMER TO DO LEVELS
function startTimer () {
  timer = setInterval(() => {
    timeleft ++;
    console.log(timeleft);
    // console.log(timeleft);
    checkValue();
  }, 1000);
  // end timer
}

function checkValue() {
  if ( timeleft === 15 ) {
    $level.html('2');
    $('body').css('background', '#7eb8df');
  } else if  ( timeleft === 20 ) {
    $level.html('3');
    $('body').css('background', '#b01846');
  } else if  ( timeleft === 35) {
    $level.html('4');
    $('body').css('background', '#551183');
  }  else if  ( timeleft === 50 ) {
    $level.html('5');
    $('body').css('background', '#2b0545');
  }  else if ( timeleft === 70) {
    console.log('you win');
    $('.cloud').stop().remove();
    $('.circle').stop().remove();
    $('.lifeGlobe').stop().remove();
    clearInterval(startCreatingClouds);
    clearInterval(CreateCircles);
    clearInterval(timer);
    clearInterval(createLifeGlobes);
    $sky.hide();
    $reset.show();
    $gameOver.hide();
    $youWin.show();
  }
}
