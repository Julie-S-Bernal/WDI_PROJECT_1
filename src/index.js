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
  setInterval(createCloud,2000);

  // setInterval(moveCloud,500);
});

function createCloud() {
  console.log('cloud created!');
  //identify the div that we want to append children to
  const $sky = $('.sky');
  // const $cloud = $('<div class="cloud"></div>');
  // random top position
  // const randomTop = Math.floor(Math.random() * 400/maximum/) + 1/min/;
  const randomTop = Math.floor(Math.random() * 400) + 1;
  const randomHeight = Math.floor(Math.random() * 120) + 50;
  const randomWidth = Math.floor(Math.random() * 100) + 80;
  //append a new div for the cloud to $sky
  //
  const $cloud = $('<div class="cloud"></div>');
  $sky.append($cloud);
  // generate many clouds
  $($cloud).css({'top': randomTop, 'height': randomHeight,'width': randomWidth});
  //animate function to move the cloud from right to left
  moveCloud($cloud);
}

function moveCloud(cloud){

  console.log(cloud);

  // cloud -> width + height
  const cloudWidth = parseInt(cloud.css('width'));

  const cloudDuration = parseInt(`${cloudWidth * 4}0`);
  console.log(cloudDuration);

  // cloud.animate({ 'left': '600'}, cloudDuration, 'linear', function() {
  //   console.log('animation has finished');
  //   cloud.remove();
  // });
  //
  cloud.animate(
    {
      'left': '600'
    },
    {
      duration: cloudDuration,
      easing: 'linear',
      complete: function() {
        console.log('animation has finished');
        cloud.remove();
      },
      step: function() {
        // check for hit
        //
        console.log('cloud is moving');
      }
    }
  );

}
// console.log(`cloud ${id} is moving`);
// animate(properties[, duration][, easing][, callback])
// let cloud = $('.cloud').position();
//
// // console.log(cloud);
// const randomDurationSpawn = Math.floor(Math.random() * 10000) + 6000;
//
// $('.cloud').animate({'right': '-=100'},randomDurationSpawn,'linear', callback);
//
// function callback() {
//   console.log(`at the end of the animation of ${id} cloud`);
//   $(`#${id}`).hide();
//   setTimeout(removeCloud, 500)
//
//   function removeCloud() {
//     $(`#${id}`).remove();
//   }
// counter ++;
// console.log(counter);
// if (counter >= 9) {
//   console.log('ok now stop!');
//   $('.cloud').stop();
//
// } else {
//   $('.cloud').animate({'right': '-=50'},10000,'linear', callback);
// }
// }

// detect where the divs and my div is
//   function collision($div1, $div2) {
//       var x1 = $div1.offset().left;
//       var y1 = $div1.offset().top;
//       var x2 = $div2.offset().left;
//       var y2 = $div2.offset().top;
// // collision detection
//       if ((y1 + $div1.outerHeight(true)) < y2 ||
//           y1 > (y2 + $div2.outerHeight(true)) ||
//           (x1 + $div1.outerWidth(true)) < x2  ||
//           x1 > (x2 + $div2.outerWidth(true)))
//           return false;
//       return true;
//       function getPositionCollisionBox(collisionBox){
//        return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
//       }
//
//
//       // function comparePositions(clouda, cloudb) {
//       //  const x1 = p1[0] < p2[0] ? p1 : p2;
//       //  const x2 = p1[0] < p2[0] ? p2 : p1;
//       //  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
//       // }
//       //
//       // function checkCollisions() {
//       //  const $collisionBox = $('.cloud')[0];
//       //  const pos = getPositionCollisionBox($collisionBsox);
//       //  const pos2 =getPosition(this);
//       //  let horizontalMatch = comparePositions(pos[0],pos[2]);
//       //  let verticalMatch = comparePositions(pos[1],pos[1]);
//       //  let match = horizontalMatch  && verticalMatch;
//       //  if (match) {$ ('body').append('<p>collision!</p>'); }
//       // }
//   }
// }

// import $ from 'jquery';
// require('./style.css');
// const menu = $('.title_screen');
// // const $collisionBox = $(box);
// // const $collisionBoxPosition = $collisionBox.position();
// // const $collisionBoxWidth = $collisionBox.width();
// // const $collisionBoxheight = $collisionBox.height();
//
// const keyboardControls = () => {
//
//   $(document).keydown((e) => {
//     const position = $('#character').position();
//     console.log(position);
//     if(e.originalEvent.code === 'ArrowLeft' ) {
//       if (position.left > 0){
//         $('#character').animate({
//           left: '-=10px',
//           duration: 0.1
//         }, 0, 'linear');
//       }
//     }
//     if(e.originalEvent.code === 'ArrowRight' ) {
//       if (position.left <= 490){
//         $('#character').animate({
//           left: '+=10px',
//           duration: 0.1
//         }, 0, 'linear');
//       }
//     }
//
//     if(e.originalEvent.code === 'ArrowDown' ) {
//       if (position.top <= 601) {
//         $('#character').animate({
//           top: '+=10px',
//           duration: 0.1
//         }, 0, 'linear');
//       }
//
//     }
//
//     if(e.originalEvent.code === 'ArrowUp' ) {
//       if (position.top > 1) {
//         $('#character').animate({
//           top: '-=10px',
//           duration: 0.1
//         }, 0, 'linear');
//       }
//     }
//   });
// };
//
// function getRandomArbitrary(min, max, offset) {
//   return Math.floor(Math.random() * (max - min) + min) - offset;
// }
//
// function createClouds(level=2) {
//   //identify the div that we want to append children to
//   for(let lvlCounter=0; lvlCounter < level; lvlCounter++) {
//     const $sky = $('.sky')[0];
//     const skyLeft = $sky.offsetLeft;
//     const skyTop = $sky.offsetTop;
//     const skyWidth = $sky.offsetWidth;
//     const skyHeight = $sky.offsetHeight;
//     const width = 50;
//     const height = 50;
//     const cloudLeft =  getRandomArbitrary(skyLeft, skyWidth, width);
//     const cloudTop = getRandomArbitrary(skyTop, skyHeight, height);
//     console.log(cloudLeft);
//     console.log(cloudTop);
//
//     const cloudClassName = 'cloud-level-' + lvlCounter;
//     $('.sky').append('<div id="' + cloudClassName + '"></div>');
//     const $cloud =  $('#' + cloudClassName);
//     $cloud.css('left', 0);
//     $cloud.css('top', cloudTop);
//     $cloud.css('width',  width);
//     $cloud.css('height', height);
//     $cloud.css('background-color', 'purple');
//     $cloud.css('position', 'absolute');
//   }
// }
//
//
// function callback() {
//   counter ++;
//   console.log(counter);
//   if (counter >= 9) {
//     console.log('ok now stop!');
//     $('.cloud').stop();
//   } else {
//     $('.cloud').animate({'right': '-=50'},10000,'linear', callback);
//
//
//   }
//   let counter = 0;
//
//   // function moveCloud(level=2) {
//   //   for(let lvlCounter=0; lvlCounter < level; lvlCounter++) {
//   //     const cloudClassName = 'cloud-level-' + lvlCounter;
//   //     console.log('cloud is moving');
//   //     // animate(properties[, duration][, easing][, callback])
//   //     let cloud = $('cloudClassName');
//   //     let cloud = $('.cloud').position();
//   //   }
//   //
//   //   $('.cloud').animate({'left': '+=50'},10000,'linear', callback);
//   // }
// }
//
// function moveCloud(level=2) {
//   for(let lvlCounter=0; lvlCounter < level; lvlCounter++) {
//     const cloudClassName = 'cloud-level-' + lvlCounter;
//     console.log('cloud is moving');
//     // animate(properties[, duration][, easing][, callback])
//     let cloud = $('cloudClassName');
//     let cloud1 = $('.cloud').position();
//   }
//
//   $('.cloud').animate({'left': '+=50'},10000,'linear', callback);
// }
//
// // assign my key movement to
// $(() => {
//   console.log('Starting programe');
//   keyboardControls();
//   createClouds();
//   moveCloud();
//
//
//
//
//
//
//   // setInterval(moveCloud,500);
// });
//
//
//
// // detect where the divs and my div is
// // function collision($div1, $div2) {
// //   var x1 = $div1.offset().left;
// //   var y1 = $div1.offset().top;
// //   var x2 = $div2.offset().left;
// //   var y2 = $div2.offset().top;
// //   // collision detection
// //   if ((y1 + $div1.outerHeight(true)) < y2 ||
// //   y1 > (y2 + $div2.outerHeight(true)) ||
// //   (x1 + $div1.outerWidth(true)) < x2  ||
// //   x1 > (x2 + $div2.outerWidth(true)))
// //   return false;
// //   return true;
// //   function getPositionCollisionBox(collisionBox){
// //     return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
// //   }
//
//
// // function comparePositions(clouda, cloudb) {
// //  const x1 = p1[0] < p2[0] ? p1 : p2;
// //  const x2 = p1[0] < p2[0] ? p2 : p1;
// //  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
// // }
// //
// // function checkCollisions() {
// //  const $collisionBox = $('.cloud')[0];
// //  const pos = getPositionCollisionBox($collisionBsox);
// //  const pos2 =getPosition(this);
// //  let horizontalMatch = comparePositions(pos[0],pos[2]);
// //  let verticalMatch = comparePositions(pos[1],pos[1]);
// //  let match = horizontalMatch  && verticalMatch;
// //  if (match) {$ ('body').append('<p>collision!</p>'); }
// // }
