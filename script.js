gsap.from("#page1 #box",{
    scale:1,
    rotate:360,
    duration:1,
    repeat:5,

    

})
gsap.from("#page2 #box",{
    
    scale:-1,
    rotate:360,
    duration:1,
    

    

})
gsap.to("#page3 #box",{
    x:5000,
    scale:1,
    rotate:360,
    duration:5,

    scrollTrigger:{
        trigger:'#page3 #box',
        scroller:'body',
    }
})
s