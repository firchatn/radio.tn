"use strict";

const radios = [{
    "src": "http://jalinburton.com/portfolio/ID-Stronghold.mp3",
    "title": "ID Stronghold",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mi enim, ultricies egestas tincidunt vitae, cursus in erat. Etiam id cursus dui. Curabitur congue.",
    "img": "imgs/id-stronhold-logo-lg.png",
}, {
    "src": "http://jalinburton.com/portfolio/Buca-Di-Beppo.mp3",
    "title": "Buca Di Beppo",
    "description": "Neque porta suscipit interdum, libero odio consectetur purus, vehicula pretium nunc mauris ac neque. Pellentesque dapibus, enim quis cursus facilisis, tellus nisi ullamcorper odio.",
    "img": "imgs/bucca-di-beppo-logo-lg.png",
}, {
    "src": "http://jalinburton.com/portfolio/Simple-Mobile.mp3",
    "title": "Simple Mobile",
    "description": "Vitae pulvinar metus nisl quis ex. Donec tempor quam non ligula sodales, vel porttitor mauris bibendum. Donec eget velit a diam congue commodo.",
    "img": "imgs/simple-mobile-logo-lg.png",
}, {
    "src": "http://jalinburton.com/portfolio/Chocolate-Pen.mp3",
    "title": "Chocolate Pen",
    "description": "Pellentesque maximus mi eget arcu cursus, sit amet viverra arcu luctus.",
    "img": "imgs/chocolate-pen-logo-lg.png",
}, {
    "src": "http://jalinburton.com/portfolio/Subway.mp3",
    "title": "Subway",
    "description": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum condimentum, arcu ut egestas congue.",
    "img": "imgs/subway-logo-lg.png",
}, {
    "src": "http://jalinburton.com/portfolio/Courtesy-Toyota.mp3",
    "title": "Courtesy Toyota",
    "description": "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris id porttitor felis, in vulputate mi. In rhoncus vestibulum nisl ac feugiat.",
    "img": "imgs/toyota-logo-lg.png",
}];

const radiosScreenUL = document.getElementById("radios-screen");
const radiosTunerUL = document.getElementById("radios-tuner");
let radiosScreenHTML = "";
let radiosTunerHTML = "";
for (const radio of radios) {
  radiosScreenHTML += `
  <li data-audio-src="${radio.src}" data-title="${radio.title}" data-description="${radio.description}">
      <img src="${radio.img}" />
  </li>
  `;
  radiosTunerHTML += `
  <li>
      <img src="${radio.img}" alt="${radio.title}" />
  </li>
  `;
}
radiosScreenUL.innerHTML = radiosScreenHTML;
radiosTunerUL.innerHTML = radiosTunerHTML;
radiosScreenUL.children[0].className = "active";
radiosTunerUL.children[0].className = "active";


// Slider Functionality
var slideCount = $('.radio-slide-logo ul li').length;
var slideWidth = $('.radio-slide-logo ul li').width() + 80;
var slideHeight = $('.radio-slide-logo').height();
var sliderUlWidth = slideCount * slideWidth;

$('.radio-slide-logo .slide-wrap').css({
    width: slideWidth - 80,
    height: slideHeight
});

$('.radio-slide-logo ul').css({
    width: sliderUlWidth,
    marginLeft: -slideWidth - 40,
    height: slideHeight
});

$('.radio-slide-logo ul li:last-child').prependTo('.radio-slide-logo ul');


// Add active class for previous slide
function prevSlide() {
    // Main Slide
    var active = $('.radio-slide-logo ul li.active').removeClass('active');
    if (active.prev() && active.prev().length) {
        active.prev().addClass('active');
    } else {
        active.siblings(":first").addClass('active');
    }

    // Tuner Icon
    var activeTuner = $('ul.radio-clients li.active').removeClass('active');
    if (activeTuner.prev() && activeTuner.prev().length) {
        activeTuner.prev().addClass('active');
    } else {
        activeTuner.siblings(":last").addClass('active');
    }
};


// Add active class for next slide
function nextSlide() {
    // Main Slide
    var active = $('.radio-slide-logo ul li.active').removeClass('active');
    if (active.next() && active.next().length) {
        active.next().addClass('active');
    } else {
        active.siblings(":first").addClass('active');
    }

    // Tuner Icon
    var activeTuner = $('ul.radio-clients li.active').removeClass('active');
    if (activeTuner.next() && activeTuner.next().length) {
        activeTuner.next().addClass('active');
    } else {
        activeTuner.siblings(":first").addClass('active');
    }
};


// Move to previous slide
function moveLeft() {
    $('.radio-slide-logo ul').animate({
        left: +slideWidth
    }, 400, function() {
        $('.radio-slide-logo ul li:last-child').prependTo('.radio-slide-logo ul');
        $('.radio-slide-logo ul').css('left', '');
    });
};


// Move to next slide
function moveRight() {
    $('.radio-slide-logo ul').animate({
        left: -slideWidth
    }, 400, function() {
        $('.radio-slide-logo ul li:first-child').appendTo('.radio-slide-logo ul');
        $('.radio-slide-logo ul').css('left', '');
    });
};


// Swap audio source
function audioSource() {
    var audioPlayer = $('.radio-play-btn .music');
    var currentAudio = $('.radio-slide-logo li.active').data('audio-src');
    audioPlayer.attr('src', currentAudio);
}


// Swap slide text
function slideText() {
    var slideTitle = $('.radio-slide-logo li.active').data('title');
    var slideDescription = $('.radio-slide-logo li.active').data('description');
    var slideLink = $('.radio-slide-logo li.active').data('link');
    var currentTitle = $('.radio-slide-content .radio-slide-title');
    var currentDescription = $('.radio-slide-content p');
    var currentLink = $('.radio-slide-content a');

    currentTitle.text(slideTitle);
    currentDescription.text(slideDescription);
    currentLink.attr('href', slideLink);
}

slideText();


// Adjust slide content height
function slideContentHeight() {
    var contentHeight = $('.active-content').height();
    $('.radio-slide-content').css('height', contentHeight + 25);
}

//slideContentHeight();


// Reposition turner depending on active slide
if ($('body').hasClass('home')) {
    function tunerDial() {
        var tunerOffset = $('.radio-clients li.active').offset();
        var tunerLeft = tunerOffset.left;
        var tunerWidth = $('.radio-clients li.active').width();
        var containerOffset = $('.radio-tuner').offset()
        var containerLeft = containerOffset.left;
        var tunerMath = tunerWidth / 2 + tunerLeft - containerLeft + 10;
        var tunerPosition = Math.round(tunerMath);
        $('.tuner-dial').css('left', tunerPosition + 'px');
    };

    // Update tuner position
    $(function() {
        setInterval(function() {
            tunerDial();
        }, 0);
    });
}


// Responsive Slider Width
$(window).resize(function() {
    var slideCount = $('.radio-slide-logo ul li').length;
    var slideWidth = $('.radio-slide-logo ul li').width() + 80;
    var slideHeight = $('.radio-slide-logo').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('.radio-slide-logo .slide-wrap').css({
        width: slideWidth - 80,
        height: slideHeight
    });

    $('.radio-slide-logo ul').css({
        width: sliderUlWidth,
        marginLeft: -slideWidth - 40,
        height: slideHeight
    });
});





// Home Page Audio Functionality
$(".radio-play-btn i").on("click", function() {
    var currentPlayer = $(".radio-play-btn").find(".music")[0];

    if (currentPlayer.paused == false) {
        currentPlayer.pause();
        $(".radio-play-btn i").addClass("fa-play");
        $(".radio-play-btn").find(".fa-play.fa-pause").removeClass("fa-pause");

    } else {
        var sounds = document.getElementsByTagName('audio');
        for (i = 0; i < sounds.length; i++) sounds[i].pause();
        $(".fa-pause").addClass("fa-play");
        $(".fa-play.fa-pause").removeClass("fa-pause");

        currentPlayer.play();
        $(".radio-play-btn").find(".fa-play").addClass("fa-pause");
        $(".radio-play-btn").find(".fa-play.fa-pause").removeClass("fa-play");
    }

    // Remove Play Button On Audio End
    currentPlayer.onended = function() {
        $(".fa-pause").addClass("fa-play");
        $(".fa-play.fa-pause").removeClass("fa-pause");
    }
});

// Audio Auto Play
function autoPlay() {
    var currentPlayer = $(".radio-play-btn").find(".music")[0];
    if ($(".radio-play-btn i").hasClass("fa-pause")) {
        currentPlayer.play();
    }
}

// Reset play button class
function playReset() {
    $(".radio-play-btn i").addClass("fa-play");
    $(".radio-play-btn").find(".fa-play.fa-pause").removeClass("fa-pause");
}


// Previous button
$('.radio-nav-previous').click(function() {
    prevSlide();
    audioSource();
    //playReset();
    slideText();
    //slideContentHeight();
    moveLeft();
    autoPlay();
});


// Next button
$('.radio-nav-next').click(function() {
    nextSlide();
    audioSource();
    //playReset();
    slideText();
    //slideContentHeight();
    moveRight();
    autoPlay();
});
