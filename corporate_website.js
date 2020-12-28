
let title= document.querySelector(".title");
function reduce_container()
{
    let big_container = document.querySelector(".container")
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
    logo_position.style.fontSize = "10px";
    logo_position.style.marginLeft= 0;
    img_logo.style.transform="rotate(0.5turn) scale(0.5)";
    img_logo.style.height = "2rem";
    img_logo.style.width= "2rem";
    img_logo.style.marginLeft= "2rem";
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
    title.style.marginLeft = "15rem";
    title.style.transition= "all 1000ms";
}
function back_title()
{
    title.style.marginLeft = "4rem";
    title.style.transition= "all 2000ms";
}
function get_sentence()
{
    let expression = document.querySelector(".container_expression");
    let menu = document.querySelector('.menu_nav');
    let video_expression = document.querySelector('.video_expression');
    let video_lorem = document.querySelector('.video_lorem');
    let play= document.querySelector(".fa-play");
    menu.style.display="flex";
    expression.style.display = "block";
    video_expression.style.display="block";
    setTimeout(()=>{video_expression.style.transform = "translateY(11rem)";
    video_expression.style.transition= "transform 800ms";}, 500);
    video_lorem.style.display="block";
    play.style.display="block";
    
    setTimeout(()=>{video_lorem.style.transform = "translateY(-8rem)";
    video_lorem.style.transition= "transform 800ms";}, 500);
}
setTimeout(translate_title, 400);
setTimeout(reduce_container, 2000);
setTimeout(back_title, 2000);
setTimeout(get_sentence, 2500);

