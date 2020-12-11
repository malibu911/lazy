const ph1_sloth_show_duration = 0;

// вешаю обработчик на заргрузку страницы, как только загрузится , отработает код внутри
document.addEventListener("DOMContentLoaded", (e) => {
console.log("123333333")
    //do work
});


// ленивец
const sloth = document.querySelector(".sloth");
// текстовое облачко 1
const text_frame_1 = document.querySelector(".text-frame-1");
const text_content_1 = text_frame_1.textContent;
// текстовое облачко 2
const text_frame_2 = document.querySelector(".text-frame-2");
const text_content_2 = text_frame_2.textContent;

// кнопка 
const button_start = document.querySelector(".start-button");


// фаза 1, начало работы фрейма, появление ленивца, текста и кнопки

const start_animation = (slothDelay, textDelay, buttonDelay) =>{
   
    setTimeout(() => {
        sloth.classList.add("sloth_show")
    }, slothDelay);

    setTimeout(() => {
        text_frame_1.classList.add("text_show")
    }, slothDelay + textDelay);
    
    setTimeout(() => {
        button_start.classList.add("button_show")
    }, slothDelay + textDelay + buttonDelay);
    
}
start_animation(500, 200, 100);



