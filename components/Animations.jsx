import { gsap } from "gsap";

export const prueba = (pedidoRef) => {
    const tl = gsap.timeline();
    tl.to(pedidoRef.current, {
        xPercent: 60,
        duration: 6,
        repeat: -1,
        ease: "power3.inOut",
    })
    return tl;
}

export const pruebaComments = (commentRef) => {
    const tl = gsap.timeline({repeat: 20});
    let duration = 1;
    let pause = 1;
    let stagger = duration + pause;
    let targets = commentRef.current;
    let number = targets.length;
    let repeatDelay = (stagger*(number-1))+pause;

    gsap.set(targets, {
        autoAlpha: 1
    })
    tl.from(targets, {
        x: 80,
        opacity: 0,
        stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay
        }
    }).to(targets, {
        x:-80,
        opacity: 0,
        stagger: {
            each: stagger,
            repeat: -1,
            repeatDelay: repeatDelay
        }
    }, duration)
}