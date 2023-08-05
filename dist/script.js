const coffeeNav = document.querySelectorAll(".coffee__nav__link");
const coffeeContent = document.querySelectorAll(".coffee__item__content");
coffeeNav.forEach((coffee) => {
coffee.addEventListener("click", () => {
    removeActivecoffee();
    coffee.style = "transition:.5s ease";
    coffee.classList.add("active");
    coffee.style = "transition:.5s ease";
    const activeContent = document.querySelector(`#${coffee.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
});
});

function removeActivecoffee() {
coffeeNav.forEach((coffee) => {
    coffee.classList.remove("active");
});
}

function removeActiveContent() {
coffeeContent.forEach((coffee) => {
    coffee.classList.remove("active");
});
}

// const kalboNav = document.querySelectorAll(".kalbo__nav__link");
// const kalboContent = document.querySelectorAll(".kalbo__item__content");
// kalboNav.forEach((kalbo) => {
// kalbo.addEventListener("click", () => {
//     removeActiveKalbo();
//     kalbo.style = "transition:.5s ease";
//     kalbo.classList.add("active");
//     kalbo.style = "transition:.5s ease";
//     const activeContent = document.querySelector(`#${kalbo.id}-content`);
//     removeActiveContent();
//     activeContent.classList.add("active");
// });
// });

// function removeActiveKalbo() {
// kalboNav.forEach((kalbo) => {
//     kalbo.classList.remove("active");
// });
// }

// function removeActiveContent() {
// kalboContent.forEach((kalbo) => {
//     kalbo.classList.remove("active");
// });
// }

const headerNav = document.querySelector(".header__nav");
const toggleMenu = document.querySelector(".toggle__menu");
toggleMenu.addEventListener("click", () => {
headerNav.classList.toggle("open");
toggleMenu.classList.toggle("open");
});