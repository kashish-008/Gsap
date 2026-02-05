// gsap.to(".box1",{
//     x:930,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor:"blue", 
//     borderRadius:"50%",
//     scale:0.5
// }) 

// gsap.from(".box2",{
//     x:930,
//     duration:2,
//     delay:1
// }) 

// gsap.from("h1",{
//     color:"red",
//     duration:1,
//     delay:1,
//     opacity:0,
//     y:30,
//     stagger:-1,
//     scrub:1,
// })

// gsap.to(".box3",{
//     x:930,
//     duration:1,
//     delay:1,
//     rotate:360,
//     repeat:-1,
//     yoyo:true
// })

// gsap.to(".box4",{
//     x:930,
//     duration:1,
//     delay:1,
//     rotate:360,
// })
// gsap.to(".box5",{
//     x:930,
//     backgroundColor:"yellow",
//     duration:1,
//     delay:1
// })
// gsap.to(".box6",{
//     x:930,
//     scale:0.8,
//     duration:1,
//     borderRadius:"50%"
// })

// var tl = gsap.timeline()

// tl.to(".box4",{
//     x:930,
//     duration:1,
//     delay:1,
//     rotate:360
// })
// tl.to(".box5",{
//     x:930,
//     backgroundColor:"yellow",
//     duration:1
// })
// tl.to(".box6",{
//     x:930,
//     scale:0.8,
//     borderRadius:"50%"
// })

var tl = gsap.timeline()

tl.from("h2",{
    opacity:0,
    y:-20,
    duration:1,
    delay:0.5
})
tl.from("h4",{
    opacity:0,
    y:-20,
    duration:1,
    stagger:0.3
})
tl.from("h1",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2
})