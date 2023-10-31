import { gsap } from "gsap";

export const pruebaComments = (commentRef) => {
    const tl = gsap.timeline({repeat: 20});
    let duration = 3;
    let pause = 3;
    let stagger = duration + pause;
    let targets = commentRef.current;
    let number = targets.length;
    let repeatDelay = (stagger*(number-1))+pause;

    gsap.set(targets, {
        autoAlpha: 1
    })
    tl.from(targets, {
        x: 100,
        opacity: 0,
        stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay
        }
    }).to(targets, {
        x:-100,
        opacity: 0,
        stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay
        }
    }, duration)
}