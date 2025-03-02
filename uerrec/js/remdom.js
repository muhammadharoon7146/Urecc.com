jQuery("button.form-search").click(function(){
    $("header .form-box").toggle();
  });


jQuery('#hero-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    // autoplay: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
        '<img src="https://urecc.mediaquest.co/wp-content/uploads/2024/12/left-btn.svg" alt="User Group Icon">',
        '<img src="https://urecc.mediaquest.co/wp-content/uploads/2024/12/right-btn.svg" alt="User Group Icon">'

    ],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        900: {
            items: 3.8
        },
        // 1000: {
        //     items: 4.7
        // },
        1024: {
            items: 4.7
        }
    }
});

// video container

const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const thumbnailImage = document.getElementById('thumbnailImage');
thumbnailImage.addEventListener('click', () => {
    videoContainer.classList.remove('paused');
    video.play();
});
video.addEventListener('click', () => {
    if (!video.paused) {
        video.pause();
        videoContainer.classList.add('paused');
    }
});
video.addEventListener('ended', () => {
    videoContainer.classList.add('paused');
});
const videoContainer1 = document.getElementById('videoContainer1');
const video1 = document.getElementById('video1');
const thumbnailImage1 = document.getElementById('thumbnailImage1');
thumbnailImage1.addEventListener('click', () => {
    videoContainer1.classList.remove('paused');
    video1.play();
});
video1.addEventListener('click', () => {
    if (!video1.paused) {
        video1.pause();
        videoContainer1.classList.add('paused');
    }
});
video1.addEventListener('ended', () => {
    videoContainer1.classList.add('paused');
});

$('#slider-featured').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: false,
    center: true,
    autoplay: false,
    // autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    navText: [
        '<img src="https://urecc.mediaquest.co/wp-content/uploads/2024/12/big-left.png" alt="User Group Icon">',
        '<img src="https://urecc.mediaquest.co/wp-content/uploads/2024/12/big-right.png" alt="User Group Icon">'
    ],

    responsive: {
        0: {

            items: 1,
            margin: 10,
        },
        767: {
            items: 2
        },
        991: {
            items: 3
        },
        // 1000: {
        //     items: 3
        // }
        1024: {
            items: 3
        }
    }
});