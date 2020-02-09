
// $("main, section").hide();
// SPLASH SCREEN //////////////////////////////////////////////

// display splash screen
// $("main, section").show();

// animate on the splash screen on app load

TweenMax.from("#splashLogo", 0.5, {
    delay: 1,
    scale: 0,
    ease: Back.easeOut
});
TweenMax.from("#splashText", 0.5, {
    delay: 1,
    scale: 0,
    ease: Back.easeOut
});

// wait 4 secs then fade out and load landing screen
// TweenMax.to("#splashLogo", 0.5, {
//     delay: 4, 
//     opacity: 0,
//     x: 30,
//     onComplete: loadLanding
// });
