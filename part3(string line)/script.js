var startPath = 'M 10 100 Q 350 100 690 100'

var finalPath = 'M 10 100 Q 350 100 690 100'

var string = document.querySelector(".string")

string.addEventListener("mousemove",function(dets){
    startPath = `M 10 100 Q ${dets.x} ${dets.y} 690 100`,
    gsap.to("svg path",{
       attr:{d:startPath} ,
       duration:0.3,
       ease: "power3.out",
    })
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1,
        ease: "elastic.out(1,0.2)",
    })
})