/*
a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW
powered by GSAP : http://www.greensock.com/
*/

TweenLite.set("#wrap", {
        perspective: 600
    })
    // TweenLite.set("img", {
    //   xPercent: "-50%",
    //   yPercent: "-50%"
    // })

var total = 55;
var warp = document.getElementById("wrap"),
    w = window.innerWidth - 200,
    h = window.innerHeight - 300;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, {
        attr: {
            class: 'dot'
        },
        x: R(0, w),
        y: R(-50, 0),
        z: R(-200, 200)
    });
    warp.prepend(Div);
    animm(Div);
}

function animm(elm) {
    TweenMax.to(elm, R(6, 15), {
        y: "+=2500",
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15
    });
    TweenMax.to(elm, R(4, 8), {
        x: '+=100',
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut
    });
    TweenMax.to(elm, R(2, 8), {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5
    });
};

function R(min, max) {
    return min + Math.random() * (max - min)
};

// a Pen by DIACO : twitter.com/Diaco_ml  ||  codepen.io/MAW