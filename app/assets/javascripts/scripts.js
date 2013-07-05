

// `7MMF'  `7MMF'                                  
//   MM      MM                                    
//   MM      MM  ,pW"Wq.`7M'   `MF'.gP"Ya `7Mb,od8 
//   MMmmmmmmMM 6W'   `Wb VA   ,V ,M'   Yb  MM' "' 
//   MM      MM 8M     M8  VA ,V  8M""""""  MM     
//   MM      MM YA.   ,A9   VVV   YM.    ,  MM     
// .JMML.  .JMML.`Ybmd9'     W     `Mbmmd'.JMML.   

//Porta hover
//$('.portaHoverText').show();
$(function () {
  $('#portaBlockWrapper').mouseenter( function() {

    //show Text
    $('.portaHoverText').stop(true, true).fadeIn(500);

    // animate background color 
    $('#portaBlockWrapper').stop(true, true).animate ({
      'background-color' : '#000'
    }, 200);

    // show color image
    $('img.portaBlockCol').animate({
      opacity : '1'
    }, 200);

    // hide b & w image
    $('img.portaBlockBW').animate({
      opacity : '0' 
    }, 200);
  });

  // mouseleave
  $('#portaBlockWrapper').mouseleave( function () {
    $('.portaHoverText').fadeOut(500);
    //color fade Stuff
    $('#portaBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.portaBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.portaBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});

// Ketch Hover
$(function () {
  $('#ketchBlockWrapper').mouseenter( function () {
    $('.ketchHoverText').stop(true, true).fadeIn(600);
    $('#ketchBlockWrapper').stop(true, true).animate ({
      'background-color' : '#CAC9AA'
    }, 200);
    $('img.ketchBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.ketchBlockBW').stop(true, true).animate({
      opacity : '0' 
    }, 200);
  });
  $('#ketchBlockWrapper').mouseleave( function () {
    $('.ketchHoverText').stop(true, true).fadeOut(500);

    //color fade Stuff
    $('#ketchBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.ketchBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.ketchBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});

// Carol Hover
$(function () {
  $('#carolBlockWrapper').mouseenter( function () {
    $('.carolHoverText').stop(true, true).fadeIn(200);
    $('#carolBlockWrapper').stop(true, true).animate ({
      'background-color' : '#fff'
    }, 200);
    $('img.carolBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.carolBlockBW').stop(true, true).animate({
      opacity : '0' 
    }, 200);
  });
  $('#carolBlockWrapper').stop(true, true).mouseleave( function () {
    $('.carolHoverText').stop(true, true).fadeOut(500);

    //color fade Stuff
    $('#carolBlockWrapper').animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.carolBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.carolBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});

// c2c Hover
$(function () {
  $('#c2cBlockWrapper').mouseenter( function () {
    $('.c2cHoverText').stop(true, true).show(200);
    $('#c2cBlockWrapper').addClass('bricksBG');
    $('img.c2cBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.c2cBlockBW').stop(true, true).stop(true, true).animate({
      opacity : '0' 
    }, 200);
  });
  $('#c2cBlockWrapper').mouseleave( function () {
    $('.c2cHoverText').stop(true, true).hide(500);
    $('#c2cBlockWrapper').removeClass('bricksBG');
    //color fade Stuff
    $('#c2cBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.c2cBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.c2cBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});



// Crawfest Hover
$(function () {
  $('#crawBlockWrapper').mouseenter( function () {
    $('.crawHoverText').stop(true, true).show(200);

    $('#crawBlockWrapper').stop(true, true).animate ({
      'background-color' : '#BDD9F0'
    }, 200);
    $('img.crawBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.crawBlockBW').stop(true, true).stop(true, true).animate({
      opacity : '0' 
    }, 200);
  });
  $('#crawBlockWrapper').mouseleave( function () {
    $('.crawHoverText').stop(true, true).hide(500);

    //color fade Stuff
    $('#crawBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.crawBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.crawBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});

// C and L Hover
$(function () {
  $('#candlBlockWrapper').mouseenter( function () {
    $('.candlHoverText').stop(true, true).show(200);
    $('#candlBlockWrapper').stop(true, true).animate ({
      'background-color' : '#fff'
    }, 200);
    $('img.candlBlockCol').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.candlBlockBW').stop(true, true).stop(true, true).animate({
      opacity : '0' 
    }, 200);
  });
  $('#candlBlockWrapper').mouseleave( function () {
    $('.candlHoverText').stop(true, true).hide(500);

    //color fade Stuff
    $('#candlBlockWrapper').stop(true, true).animate ({
      'background-color' : 'transparent'
    }, 200);
    $('img.candlBlockBW').stop(true, true).animate({
      opacity : '1'
    }, 200);
    $('img.candlBlockCol').stop(true, true).animate({
      opacity : '0'
    }, 200);
  });
});














//Clicks 
$(function () {
    // header link
  $('a.headerClick').click( function() {
    $('a.workLink, a.aboutLink, a.contactLink').removeClass('navSelected');
    $('.rowIntro, .blocksWrapper').fadeIn(300);
    $('.aboutWrapper, .contactWrapper, #ketchRow, #portaRow, #carolRow').hide(0);
    return false;
  });

  // work link
  $('a.workLink').click( function() {
    $(this).addClass('navSelected');
    $('a.aboutLink, a.contactLink').removeClass('navSelected');
    $('.blocksWrapper').fadeIn(300).css('margin-top', '77px !important');
    $('.rowIntro').hide(300);
    $('#portaRow, #ketchRow, #carolRow').fadeOut(300);
    return false;
  });

  //about link
  $('a.aboutLink').click( function() {
    $(this).addClass('navSelected');
    $('.rowIntro, .blocksWrapper, .aboutWrapper, .contactWrapper, #ketchRow, #portaRow').hide(300);
    $('a.workLink, a.contactLink').removeClass('navSelected');
    return false;
  });

  // contact link
  $('a.contactLink').click( function() {
    $(this).addClass('navSelected');
    $('.rowIntro').hide(300);
    $('a.workLink, a.aboutLink').removeClass('navSelected');
    return false;
  });

  $('a.homeLink').click(function() {
    $('.blocksWrapper').fadeIn(300);
    $('#portaRow, #ketchRow #aboutRow, #contactRow').fadeOut(300);
  });

  $('a.portaReveal').click(function() {
    $('#portaRow').fadeIn(300);
    $('.blocksWrapper').fadeOut(300);
    return false;
  });

  $('a.ketchReveal').click(function() {
    $('#ketchRow').fadeIn(300);
    $('.blocksWrapper, .rowIntro').hide(300);
    return false;
  });

  $('a.carolReveal').click(function() {
    $('#carolRow').fadeIn(300);
    $('.blocksWrapper, .rowIntro').hide(300);
    return false;
  });
});

// Temporary hides/shows
// $('#carolRow').show(0);
// $('.blocksWrapper').hide(0);
// $('.rowIntro').hide(0);


//SoundCloud Player 
$(function() {
  $('.sc-player').addClass('large-12 small-12 columns');
  $('.sc-volume-slider').addClass('large-5 small-5 columns');
  $('ol.sc-artwork-list').addClass('large-3 small-3 columns');
  $('.sc-controls').addClass('large-1 small-1 columns');
  // includes volume, wav image and time display
  $('.sc-scrubber').addClass('large-9 small-9 columns');
});

// Color Looping 
// dots 100ms apart, letters 200ms apart
$(function() {  
  function endless(item) {
    $(item).css('display', 'inline-block').animate({
      'color': '#DE5605',
      'opacity': '1'
    }, 2100, function() {
      $(item).animate({
        'color': '#65ABA6'
      }, 3100);
      endless(item);
    });
  };

  // Animate "Wonderful" letter colors
     endless($('a.w').delay( 400  ));
     endless($('a.o').delay( 600  ));
     endless($('a.n').delay( 800  ));
  endless($('a.dot1').delay( 900  ));
     endless($('a.d').delay( 1000 ));
     endless($('a.e').delay( 1200 ));
     endless($('a.r').delay( 1400 ));
  endless($('a.dot2').delay( 1500 ));
     endless($('a.f').delay( 1600 ));
     endless($('a.u').delay( 1800 ));
     endless($('a.l').delay( 2000 ));
});  


// Intro word 2 color animations
$(function() {  
  function endless2(item) {
    $(item).css('display', 'inline-block').animate({
      'color': '#C4590E',
      'opacity': '1'
    }, 500, function() {
      $(item).animate({
        //'color': '#F7A035'
        'color': '#333'
      }, 500).delay(500);
      endless2(item);
    });
  };
     endless2($('a.e2').delay( 400  ));
     endless2($('a.x2').delay( 600  ));
  endless2($('a.dot1b').delay( 700  ));
     endless2($('a.c2').delay( 800  ));
     endless2($('a.i2').delay( 1000 ));
     endless2($('a.t2').delay( 1200 ));
  endless2($('a.dot2b').delay( 1300 ));
    endless2($('a.i2b').delay( 1400 ));
     endless2($('a.n2').delay( 1600 ));
     endless2($('a.g2').delay( 1800 ));
    endless2($('a.chk').delay( 2000 ));
}); 



// Intro word 1 move in/out
//$('#introWord1').hide(0);

$(function() {
  $('#introWord1').delay(5000).animate({
    'left': '-=1000',
    'opacity': '0'
  }, 1000, 'easeInCubic', function() {
    $('#introWord1').delay(8000).animate({
      'left': '+=1000',
      'opacity': '1'
    }, 700, 'easeOutCubic');
  });
});

// Intro word 2 move in/out
$(function() {
  $('#introWord2').delay(7000).fadeIn(10).animate({
    'left': '+=2000'
  }, 700, 'easeOutElastic', function() {
    $('#introWord2').delay(5000).animate({
      'left': '+=2000'
    }, 500, 'easeInBack');
  });
});

// dev script for aligning words
// $(function() {
//   $('#introWord2').fadeIn(10).animate({
//     'left': '+=2000'
//   }, 2000, 'easeOutElastic');
// });


// $(function() {
  // $('#introWord1').delay(9000).animate ({
  //   'left': '-=1000',
  //   'opacity': '0'
  // }, 1000, function() {
  //   $(this).delay(2000).animate({
  //     'left': '-=0',
  //     'opacity': '0'
  //   }, 1000, function() {

  //   } 
  // });

// $(function() {
//   $('#introWord2 ').delay(9000).animate ({
//     'left': '-=1000',
//     'opacity': '0'

//   }, 1000, 'easeInCubic');
// });






// function endlessBG(item) {
//   $(item).animate({
//     'left': '+=2000px',
//     'opacity': '1',
//     'border-radius': '+=50px'
//   }, 3000, function() {
//     $(item).animate({
//       //'left': '+=1500px',
//       'opacity': '0',
//       'border-radius': '+=50px'
//     }, 3000);
//     endlessBG(item);
//   });
// };
// endlessBG($('.pattern2'));

//Home Colors
// $orange    :#DE5605;
// $yellow    :#F7A035;  
// $blueLight :#B1DEB5;
// $blueDark  :#65ABA6;
// $white     :#EFECCA;
// $('.biggestItal a').animate({
//   'opacity': '1'
// }, 5000);

// $(function() {  
//   $('.pattern2').animate({
//     'left': '+=2000px'
//   }, 1500, 
    
//     // and then...
//     function() {
//       $(this).animate({
//         //'left': '+=1500px',
//         'border-radius': '+=100px',
//         //'opacity': '0',
//            borderTopColor: 'transparent',
//         borderBottomColor: 'transparent',
//           borderLeftColor: '#DE5605',
//          borderRightColor: '#DE5605'
//       }, 5000,

//       // and then...
//       function() {
//         $(this).animate({
//           'opacity': '0'
//         //'left': '+=1500px',
//         //'opacity': '0px'
//       }, 1000);
//     });
//   });    
// });


// $('span.pattern2').hide()_.show(1000);

// function endlessBG(item) {
//   $(item).animate({
//     'opacity': '0'
//   }, 100, function() {
//     $(item).animate({
//       'opacity': '.4'
//     }, 200);
//     endlessBG(item);
//   });
// };
// endlessBG($('.pattern2').delay(500));

// $(function() {
//   $('h1.biggest').animate({
//     'line-height': '.8em'
//   }, 2000);
// });
// $(function () {
//   $('img.shrinkMe').click( function () {
//     //$(this).hide("slide", {direction: "left" }, "slow");
//     $('#portaRow').hide("slide", {direction: "left" }, 1000);
//     $(this).hide("slide", {direction: "down" }, 500);
//     $('#portaRow').hide("slide", {direction: "up" }, 500);
//     $('#portaBlockWrapper').fadeIn(500).animate({
//       'margin-top' : ""
//     },500);
//     $('.blockRow1').css('margin-top', '0')  
//   });
// });

// $(function () {
//   $('.portaTop').clickToggl(function() {
//     $('#portaBlockWrapper').show();
//   });
//   $('.portaTop').click(function() {
//       $('.portaHide').fadeOut(1000).hide;
//   });
// });


// OLD HOVERS

// $(function () {
//   $('.carolBlockBW').mouseenter( function () {
//     $('img.carolBlockCol').stop(true, true).animate({
//       opacity : '1'
//     }, 500);
//     $(this).stop(true, true).animate({
//       opacity : '0' 
//     }, 500);
//   });
//   $('img.carolBlockBW').mouseleave( function () {
//     $(this).stop(true, true).animate({
//       opacity : '1'
//     }, 1800);
//     $('img.carolBlockCol').stop(true, true).animate({
//       opacity : '0'
//     }, 1800);
//   });
// });





// //      ,... ,,   ,,                                              
// //   .d' "`7MM   db                                              
// //   dM`    MM                                                   
// //  mMMmm   MM `7MM `7MMpdMAo`7MMpdMAo.  .gP"Ya `7Mb,od8 ,pP"Ybd 
// //   MM     MM   MM   MM   `Wb MM   `Wb ,M'   Yb  MM' "' 8I   `" 
// //   MM     MM   MM   MM    M8 MM    M8 8M""""""  MM     `YMMMa. 
// //   MM     MM   MM   MM   ,AP MM   ,AP YM.    ,  MM     L.   I8 
// // .JMML. .JMML.JMML. MMbmmd'  MMbmmd'   `Mbmmd'.JMML.   M9mmmP' 
// //                    MM       MM                                
// //                  .JMML.   .JMML.                             
// $(function () {
//   $('.blockRow1, .blockRow2, .rowHeader').hide();
//   $('.rowHeader').delay(400).fadeIn(1000);
//   $('.blockRow1').delay(800).fadeIn(1000);
//   $('.blockRow2').delay(1000).fadeIn(1000);
// });
// // Porta Flipper 
// $(function () {
//   $('#portaBlockWrapper').each(function() {
//     function flip(t) {      // t is the id/class of the element
//       $('#portaClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
//                             // .off() removes mouseout/mouseover handlers
//         color_target: "none",
//         depth : "0",
//         light : "0",
//         direction : "TOP",
//         duration : "400",
//         verso : "<div class=''></div>",
//         //verso: "<div class='bgBlack fullBlock'><div class='row'><div class='large-6 small-6 columns'></div><div class='large-6 small-6 columns'></div></div><div class='row portaLogoRow'><div class='large-3 small-3'></div></div></div>",
//         onStart: function(){
//                      //alert('hello Bitches!');
//         },

//         onFinish: function () {
//           $('#portaClick').off().on('click', function () { 
//             //$('#portaClick').addClass('afterBlock');
//             //$('#portaBlockWrapper').toggleClass('large-12');
//             // remove(d) handles again and add mouseout\
//             $('#portaBlockWrapper').removeClass('large-12');
//             $('#ketchBlockWrapper, #c2cBlockWrapper').removeClass('large-6 medBlock');///////////////////
//             flipBack('#portaClick');
            
//           });
//         },

//         onReverseFinish: function () {
//           $('#portaClick').off().on('click', function(){
//             $('#portaBlockWrapper').toggleClass('large-12 wideBlock');///////////
//             $('#ketchBlockWrapper, #c2cBlockWrapper').toggleClass('large-6 medBlock');

//             flip('#portaClick');

//           });
//         }
//       });
//     }
    
//     function flipBack(t) {

//       $(t).flippyReverse({
//         direction: "TOP",
//         color_target: "none",
//         //verso: "<img class='small-12 small-centered' src='/assets/portaBlock.png' alt='Portablock' />",
//       });
      
//     }
    
//     $(function () {
//       $("#portaClick").on('click', function () { 
//         $('#portaClick').addClass('afterBlock');
        
//         //$('img.portaBlockBW').css("opacity", "1");
//         // at start bind mouseover and run function flip()
//         flip('#portaClick'); // here you send the id/class of the element

//         $('#portaBlockWrapper').addClass('large-12 wideBlock');//////////////////////
//         $('#ketchBlockWrapper, #c2cBlockWrapper').addClass('large-6 medBlock')
//       });
//     });
//   });
// });

// //Ketch Flipper
// $(function () {
//   $('#ketchBlockWrapper').each(function(){
//     function flip(t) {      // t is the id/class of the element
//       $('#ketchClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
//                             // .off() removes mouseout/mouseover handlers
//         color_target: "none",
//         depth : "0",
//         light : ".1",
//         direction : "TOP",
//         duration : "400",
//         verso: "<h4>California-based production house Ketchum Labs needed a website, so I made one</h4>",
//         onFinish: function () {
//           $('#ketchClick').off().on('click', function () { 
//             $('#ketchClick').addClass('afterBlock');
//             // remove(d) handles again and add mouseout
//             flipBack('#ketchClick');
//             $('#ketchBlockWrapper').removeClass('large-12');
//           });
//         },

//         onReverseFinish: function () {
//           $('#ketchClick').off().on('click', function(){
//             $('#ketchBlockWrapper').toggleClass('large-12');

//             flip('#ketchClick');
//           });
//         }
//       });
//     }
    
//     function flipBack(t) {
//       $(t).flippyReverse({
//         direction: "TOP",
//         color_target: "none",
//         //verso: "<img class='small-12 small-centered' src='/assets/portaBlock.png' alt='Portablock' />",
//       });
//     }
    
//     $(function () {
//       $("#ketchClick").on('click', function () { 
//         $('#ketchBlockWrapper').addClass('large-12');
//         // at start bind mouseover and run function flip()
//         flip('#ketchClick'); // here you send the id/class of the element
//       });
//     });
//   });
// });

// //C2C Flipper

// $(function () {
//   $('#c2cBlockWrapper').each(function(){
//     function flip(t) {      // t is the id/class of the element
//       $('#c2cClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
//                             // .off() removes mouseout/mouseover handlers
//         color_target: "none",
//         depth : "0",
//         light : ".1",
//         direction : "TOP",
//         duration : "400",
//         verso: "<h4>The Coast to Coast foodtruck needed people to know where they are on the go</h4>",
//         onFinish: function () {

//           $('#c2cClick').off().on('click', function () { 
//             $('#c2cClick').addClass('afterBlock');

//             // remove(d) handles again and add mouseout
//             flipBack('#c2cClick');
//           });
//         },
//         onReverseFinish: function () {
//           $('#c2c').off().on('click', function(){
//             flip('#c2cClick');
//           });
//         }
//       });
//     }
    
//     function flipBack(t) {
//       $(t).flippyReverse({
//         direction: "TOP",
//         color_target: "none",
//         verso: "<img class='small-12 small-centered' src='/assets/c2cBlock.png' alt='Portablock' />",
//       });
//     }
    
//     $(function () {
//       $("#c2cClick").on('click', function () { 
//         // at start bind mouseover and run function flip()
//       flip('#c2cClick'); // here you send the id/class of the element
//       });
//     });
//   });
// });

// //Carol Flipper

// $(function () {
//   $('#carolBlockWrapper').each(function(){
//     function flip(t) {      // t is the id/class of the element
//       $('#carolClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
//                             // .off() removes mouseout/mouseover handlers
//         color_target: "none",
//         depth : "0",
//         light : ".1",
//         direction : "TOP",
//         duration : "400",
//         verso: "<h3>Carol Beehler is an awesome designer who asked me to put together her website from a series of illustrator mockups</h3>",
//         onFinish: function () {

//           $('#carolClick').off().on('click', function () { 
//             $('#carolClick').addClass('afterBlock');

//             // remove(d) handles again and add mouseout
//             flipBack('#carolClick');
//           });
//         },
//         onReverseFinish: function () {
//           $('#carol').off().on('click', function(){
//             flip('#carolClick');
//           });
//         }
//       });
//     }
    
//     function flipBack(t) {
//       $(t).flippyReverse({
//         direction: "TOP",
//         color_target: "none",
//         verso: "<img class='small-12 small-centered' src='/assets/carol.png' alt='Portablock' />",
//       });
//     }
    
//     $(function () {
//       $("#carolClick").on('click', function () { 
//         // at start bind mouseover and run function flip()
//       flip('#carolClick'); // here you send the id/class of the element
//       });
//     });
//   });
// });

// // Craw 

// $(function () {
//   $('#candlBlockWrapper').each(function(){
//     function flip(t) {                 // t is the id/class of the element
//       $('#candlClick').off().flippy({   // here instead of t you can also write #portaClick and remove it
//                                        // .off() removes mouseout/mouseover handlers
//         color_target: "none",
//         depth : "0",
//         light : ".1",
//         direction : "TOP",
//         duration : "400",
//         verso:  "<h4>Tulane University hired me to design the official website for their annual music festival that draws over 10,000 people every year</h4>",
//         onFinish: function () {

//           $('#candlClick').off().on('click', function () { 
//             $('#candlClick').addClass('afterBlock');

//             // remove(d) handles again and add mouseout
//             flipBack('#candlClick');
//           });
//         },
//         onReverseFinish: function () {
//           $('#candl').off().on('click', function(){
//             flip('#candlClick');
//           });
//         }
//       });
//     }
    
//     function flipBack(t) {
//       $(t).flippyReverse({
//         direction: "TOP",
//         color_target: "none",
//         verso: "<img class='small-12 small-centered' src='/assets/candl.png' alt='Portablock' />",
//       });
//     }
    
//     $(function () {
//       $("#candlClick").on('click', function () { 
//         // at start bind mouseover and run function flip()
//       flip('#candlClick'); // here you send the id/class of the element
//       });
//     });
//   });
// });




// $(function () {
//   $('.titleWrap').delay(1000).animate({
//     'right': '-=300',
//     'opacity': 0,

//   }, 4000);
// });

// $('.blockRow1').animate({
      //   'margin-top' : '+=50%'
      //   //opacity: '0',
      //  // top: '+=257'
      //   }, 500, function() {
      // //animation complete
      //   });
      // });