// when a user clicks a button the background changes

// on click event that triggers the color to change

//array of colors each click loops through and changes the index

const btn = document.querySelector(".btn");

const section = document.querySelector(".main-section");

const heading = document.querySelector(".heading");

btn.addEventListener("click", () => {
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    section.style.backgroundColor = color;
    heading.innerText = color;
    console.log(color);
   
});
