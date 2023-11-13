import { gsap } from "gsap";
import SplitType from "split-type";

export const pruebaComments = (commentRef) => {
    const tl = gsap.timeline({repeat: 20});
    let duration = 2;
    let pause = 2;
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

export const fadeRevealText = (textRef) => {
    console.log(textRef.current)
    const splitText = new SplitType(textRef.current)
    gsap.to('.char', {
        y: 80,
        stagger: 0.05,
        delay: 0.6,
        duration: 0.1,
    })
}