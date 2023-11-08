gsap.registerPlugin(MotionPathPlugin);

gsap.to("#rect", {
    duration: 2,
    repeat: -1,
    repeatDelay: 1,
    yoyo: false,
    ease: "power1.inOut",
    motionPath: {
        path: "#path",
        align: "#path",
        autoRotate: true,
        alignOrigin: [0.5, 0.5]
    }
});