import $ from 'jquery';
const css = require('./style.css');
const menu = $('.title_screen');
// const $collisionBox = $(box);
// const $collisionBoxPosition = $collisionBox.position();
// const $collisionBoxWidth = $collisionBox.width();
// const $collisionBoxheight = $collisionBox.height();

const keyboardControls = () => {

  $(document).keydown((e) => {
    const position = $('#character').position();
    console.log(position);
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

// assign my key movement to
$(() => {
  console.log('Starting programe');
  keyboardControls();
  createCloud();
  setInterval(createCloud,1000);

  // setInterval(moveCloud,500);
});

function createCloud() {
  console.log('cloud created!');
  //identify the div that we want to append children to
  const $sky = $('.sky');
  const $cloud = $('<div class="cloud"></div>');
  //append a new div for the cloud to $sky
  $sky.append('<div class="cloud"></div>');
  console.log($sky);
  // generate many clouds
  $cloud.css('left', Math.floor(Math.random() * 300-150))+1;
  //animate function to move the cloud from right to left
  moveCloud();
}

let counter = 0;

function moveCloud(){
  console.log('cloud is moving');
  // animate(properties[, duration][, easing][, callback])
  let cloud = $('.cloud').position();

  // console.log(cloud);


  $('.cloud').animate({'right': '-=50'},10000,'linear', callback);

  function callback() {
    counter ++;
    console.log(counter);
    if (counter >= 9) {
      console.log('ok now stop!');
      $('.cloud').stop();

    } else {
      $('.cloud').animate({'right': '-=50'},10000,'linear', callback);
    }
  }
  // detect where the divs and my div is
  function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
// collision detection
      if ((y1 + $div1.outerHeight(true)) < y2 ||
          y1 > (y2 + $div2.outerHeight(true)) ||
          (x1 + $div1.outerWidth(true)) < x2  ||
          x1 > (x2 + $div2.outerWidth(true)))
          return false;
      return true;
      function getPositionCollisionBox(collisionBox){
       return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
      }


      // function comparePositions(clouda, cloudb) {
      //  const x1 = p1[0] < p2[0] ? p1 : p2;
      //  const x2 = p1[0] < p2[0] ? p2 : p1;
      //  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
      // }
      //
      // function checkCollisions() {
      //  const $collisionBox = $('.cloud')[0];
      //  const pos = getPositionCollisionBox($collisionBsox);
      //  const pos2 =getPosition(this);
      //  let horizontalMatch = comparePositions(pos[0],pos[2]);
      //  let verticalMatch = comparePositions(pos[1],pos[1]);
      //  let match = horizontalMatch  && verticalMatch;
      //  if (match) {$ ('body').append('<p>collision!</p>'); }
      // }
  }
}
