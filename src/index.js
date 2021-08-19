import './style.css';
import * as PIXI from 'pixi.js';

function getPassword3() {
    alert("Alexa, do you have something for special agent Maks?");
    const response = prompt("Введи подтверждение");
    if(response === null) return;

    if (response === "dinosaur" || response === "DINOSAUR") {
        alert("Ты отлично справился со всеми загадками, пришло время приступать к полевым испытаниям! Все инструкции в красной шкатулке. На выход, стажёр!");
    } else {
        alert("Это не верно!");
        getPassword3();
    }
}

function getPassword2() {
    alert("Агент должен уметь согреть холодное сердце!");
    const response = prompt("Введи подтверждение");
    if(response === null) return;

    if (response === "salmana" || response === "SALMANA") {
        alert("Верно!");
        getPassword3();
    } else {
        alert("Это не верно!");
        getPassword2();
    }
}

function getPassword1() {
    const response = prompt("Введи подтверждение");
    if(response === null) return;

    if (response === "hello world" || response === "HELLO WORLD") {
        alert("Верно!");
        button.style.visibility = "visible";
    } else {
        alert("Это не верно!");
        getPassword1();
    }
}

function getResponse3() {
    const response = prompt("Скiльки бубочок на ожинi?");
    if(response !== null) {
        alert("Максим, ты справился с первым испытанием и зачислен в стажёры. Пройди все испытания чтобы получить статус Спец Агента");
        alert("Агент должен иметь навыки сапёра. В твоем доме заложена бомба. Найди ее и обезвредь. Быстрее, часики тикают! Тик-так!");
        getPassword1();
    } else {
        getResponse1();
    }
}

function getResponse2() {
    const response = prompt("Сколько людей побывало на луне?");
    if(response === null) return;

    if (response === "124") {
        alert("Верно!");
        getResponse3();
    } else {
        alert("Это не верно!");
        getResponse2();
    }
}

function getResponse1() {
    const response = prompt("Сколько у меня наград?");
    if(response === null) return;
    if (response === "16") {
        alert("Верно!");
        getResponse2();
    } else {
        alert("Это не верно!");
        getResponse1();
    }
}

const intro = document.createElement('div');
intro.innerHTML = "Агент должен уметь находить иголку в стоге сена";
document.body.appendChild(intro);

let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type);

let app = new PIXI.Application({
        width: window.innerWidth,
        height: 4600,
        antialias: true,
        transparent: false,
        resolution: 1
    }
);

app.loader.load(setup);

function setup(loader, resources) {
    let gfx = new PIXI.Graphics();
    gfx.beginFill(0x000000);
    gfx.drawRect(0, 0, window.innerWidth, 30);
    gfx.endFill();

    app.stage.addChild(gfx);
    gfx.position.set(0, 4600/2);
    gfx.interactive = true;
    gfx.buttonMode = true;
    gfx.on("click", () => {
        getPassword2();
    });

    app.start();
}

document.body.appendChild(app.view);

const el = document.createElement('div');
el.innerHTML = "Look for the button somewhere in the middle";
el.style.marginLeft = "400px";
document.body.appendChild(el);

getResponse1();

