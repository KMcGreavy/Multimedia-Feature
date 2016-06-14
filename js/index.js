// Uncomment to initialise WOW.js
new WOW().init();

// Owl Carousel initialisation
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true
  });
  // This adds an additional carousel. Remove/comment out if not needed
  $(".alps-carousel").owlCarousel({
    items: 1,
    dots: false,
    autoplay: true,
    animateOut: 'fadeOut'
  }); //

});



// YouTube Stuff

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'tRKl0tSOKs0',
    playerVars: {
      controls: 0,
      modestbranding: 0,
      showinfo: 0
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.pauseVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 600000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


// Scroll Magic Stuff

var controller = new ScrollMagic.Controller();

//
$(function () {
  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#_video", duration: 500})

  .on("enter", function () {
    player.playVideo();
  })
  .on("leave", function () {
    player.pauseVideo();
  })
  .addTo(controller);
});



$(function () {
  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#_goproVid", duration: 500})
  // var htmlVideo = document.getElementById("foo")[0];

  .on("enter", function () {
    document.getElementById('foo').play();
  })
  .on("leave", function () {
    document.getElementById('foo').pause();

  })
  .addTo(controller);
});

$(function () {
  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#_speedvid", duration: 500})
  // var htmlVideo = document.getElementById("foo")[0];

  .on("enter", function () {
    document.getElementById('fop').play();
  })
  .on("leave", function () {
    document.getElementById('fop').pause();

  })
  .addTo(controller);
});

$(function () { // wait for document ready
         // build scene
         var scene = new ScrollMagic.Scene({triggerElement: "#keeper", duration: 1200})


                 .on("enter", function () {
                     document.getElementById('goalkeeper').play();
                     })
                 .on("leave", function () {
                    $('#goalkeeper').trigger("pause");
                  })
                 .addTo(controller);
       });



$(function () {
         // build scene
      var scene = new ScrollMagic.Scene({triggerElement: "#info1", duration: 250})

      .on("enter", function () {
        console.log("entered");
       	document.getElementById('info1').style.opacity = "1";
      })
      .on("leave", function () {
       	document.getElementById('info1').style.opacity = "0";
        console.log("left");
      })
      .addTo(controller);
});



$(function () {
         // build scene
      var scene = new ScrollMagic.Scene({triggerElement: "#info2", duration: 250})

      .on("enter", function () {
        console.log("entered");
       	document.getElementById('info2').style.opacity = "1";
      })
      .on("leave", function () {
       	document.getElementById('info2').style.opacity = "0";
        console.log("left");
      })
      .addTo(controller);
});

$(function () {
         // build scene
      var scene = new ScrollMagic.Scene({triggerElement: "#info3", duration: 250})

      .on("enter", function () {
        console.log("entered");
       	document.getElementById('info3').style.opacity= "1";
      })
      .on("leave", function () {
       	document.getElementById('info3').style.opacity = "0";
        console.log("left");
      })
      .addTo(controller);
});

$(function () {
         // build scene
      var scene = new ScrollMagic.Scene({triggerElement: "#info4", duration: 250})

      .on("enter", function () {
        console.log("entered");
       	document.getElementById('info4').style.opacity = "1";
      })
      .on("leave", function () {
       	document.getElementById('info4').style.opacity = "0";
        console.log("left");
      })
      .addTo(controller);
});

$(function () {
         // build scene
      var scene = new ScrollMagic.Scene({triggerElement: "#info5", duration: 450})

      .on("enter", function () {
        console.log("entered");
       	document.getElementById('info5').style.opacity = "1";
      })
      .on("leave", function () {
       	document.getElementById('info5').style.opacity = "0";
        console.log("left");
      })
      .addTo(controller);
});

$(function () {
         // build scene
      var scene = new ScrollMagic.Scene({triggerElement: "#fact1", duration: 300})

      .on("enter", function () {
        console.log("entered");
       	document.getElementById('fact1').style.visibility = "visible";
      })
      .on("leave", function () {
       	document.getElementById('fact1').style.visibility = "hidden";
        console.log("left");
      })
      .addTo(controller);
});
$(function () {
         // build scene
      var scene = new ScrollMagic.Scene({triggerElement: "#plus", duration: 250})

      .on("enter", function () {
        console.log("entered");
       	document.getElementById('plus').style.visibility = "visible";
      })
      .on("leave", function () {
       	document.getElementById('plus').style.visibility = "hidden";
        console.log("left");
      })
      .addTo(controller);
});
$(function () {
         // build scene
      var scene = new ScrollMagic.Scene({triggerElement: "#fact2", duration: 300})

      .on("enter", function () {
        console.log("entered");
       	document.getElementById('fact2').style.visibility = "visible";
      })
      .on("leave", function () {
       	document.getElementById('fact2').style.visibility = "hidden";
        console.log("left");
      })
      .addTo(controller);
});
$(function () {
         // build scene
      var scene = new ScrollMagic.Scene({triggerElement: "#equals", duration: 200})

      .on("enter", function () {
        console.log("entered");
       	document.getElementById('equals').style.visibility = "visible";
      })
      .on("leave", function () {
       	document.getElementById('equals').style.visibility = "hidden";
        console.log("left");
      })
      .addTo(controller);
});
$(function () {
         // build scene
      var scene = new ScrollMagic.Scene({triggerElement: "#fact3", duration: 300})

      .on("enter", function () {
        console.log("entered");
       	document.getElementById('fact3').style.visibility = "visible";
      })
      .on("leave", function () {
       	document.getElementById('fact3').style.visibility = "hidden";
        console.log("left");
      })
      .addTo(controller);
});
