
let title= document.querySelector(".title");
let button_video = document.querySelector(".button_play");
let count= 0;
let play= document.querySelector(".fa-play");

function reduce_container()
{
   
    let container = document.querySelector(".container_logo");
    let logo_position = document.querySelector(".logo_position");
    let img_logo = document.querySelector(".img_logo");
    let burger = document.querySelector(".menu_burger");
    let menu_ele = document.querySelector(".menu_element");
    let menu_nav = document.querySelector(".menu_nav");
    let menu_button= document.querySelector(".menu_button");
    

    container.style.height = "30vh";
    container.style.transition= "height 2000ms";
    container.style.position ="relative";
    logo_position.style.marginTop = "4vh";
    logo_position.style.transition="all 1000ms";
    logo_position.style.fontSize = "15px";
    logo_position.style.marginLeft= 0;
    img_logo.style.transform="rotate(0.5turn) scale(0.5)";
    img_logo.style.height = "4rem";
    img_logo.style.width= "4rem";
    img_logo.style.marginLeft= "1rem";
    img_logo.style.transition= "all 2000ms";
    title.style.marginTop= "0";
    title.style.transition= "margin-top 1000ms";
    
    burger.addEventListener("mouseover", ()=>
    {
        menu_ele.style.display="flex";
        menu_ele.style.flexDirection="column";
        menu_ele.style.fontSize="12px";
        menu_button.style.display= "none";
       

    })
    burger.addEventListener("mouseleave", ()=>
    {
       
        menu_ele.style.display="none";
        menu_ele.style.flexDirection="row";
        menu_button.style.display="block";
    })
    
}

function translate_title()
{
    title.style.marginLeft = "10rem";
    title.style.transition= "all 1000ms";
}
function back_title()
{
    title.style.marginLeft = "0rem";
    title.style.transition= "all 2000ms";
}
function get_sentence()
{
    let expression = document.querySelector(".container_expression");
    let menu = document.querySelector('.menu_nav');
    let video_expression = document.querySelector('.video_expression');
    let video_lorem = document.querySelector('.video_lorem');
    let btn_consultation = document.querySelector(".button_consultation");

    menu.style.display="flex";
    expression.style.display = "block";
   
    setTimeout(()=>{
    video_expression.style.display="block";
    video_expression.style.transform = "translateY(10rem)";
    video_expression.style.transition= "transform 800ms";}, 500);
    video_lorem.style.display="block";
    play.style.display="block";
    setTimeout(()=>{
    btn_consultation.style.display="block";
    btn_consultation.style.transform="translateY(-15rem)";
    btn_consultation.style.transition="transform 800ms";
    },700 );
    setTimeout(()=>{video_lorem.style.transform = "translateY(-13rem)";
    video_lorem.style.transition= "transform 800ms";}, 500);
}
function get_input()
{
    let element = document.querySelectorAll(".menu_element_a");
}
setTimeout(translate_title, 400);
setTimeout(reduce_container, 2000);
setTimeout(back_title, 2000);
setTimeout(get_sentence, 2500);

button_video.addEventListener("click", ()=>
{
    let video = document.querySelector("#myVideo");
    count+=1;
    if (count%2 == 0)
    {
        video.play();
    }
    else
    {video.pause();}
    
}
)

