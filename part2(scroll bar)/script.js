gsap.from(".page1 .box",{
    scale:0,
    delay:1,
    duration:1,
    rotate:360
})

// gsap.from(".page2 .box",{
//     scale:0,
//     delay:1,
//     duration:1,
//     rotate:360,
//     scrollTrigger:{
//         trigger:".page2 .box",
//         scroller:"body",
//         markers:true,
//     }
// })

// gsap.from(".page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:".page2 h1",
//         scroller:"body",
//         // markers:true,
//         start:"top 70%"
//     }
// })
gsap.from(".page2 h2",{
    opacity:0,
    duration:2,
    x:-500,
    scrollTrigger:{
        trigger:".page2 h2",
        scroller:"body",
        // markers:true,
        start:"top 30%"
    }
})
gsap.from(".page3 .box",{
    opacity:0,
    scale:0,
    duration:1,
    rotate:880,
    scrollTrigger:{
        trigger:".page3 .box",
        scroller:"body",
        // markers:true,
       start:"top 60%",
       end:"top 30%",
       scrub:3,
       pin:false,
    }
})
gsap.to(".page6 h1",{
    transform:"translateX(-120%)",
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -80%",
        scrub:1,
        pin:true
    }
})

