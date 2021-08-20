import './style.css';
import * as PIXI from 'pixi.js';

function getPassword3() {
    alert("Alexa, do you have something for special agent Maks?");
    const response = prompt("Введи подтверждение");
    if(response === null) return;

    if (response.toLowerCase() === "i love yxu") {
        alert("Ты отлично справился со всеми загадками, пришло время приступать к полевым испытаниям! Все инструкции в красной шкатулке. На выход, стажёр!");
    } else {
        alert("Это не верно!");
        getPassword3();
    }
}

function getPassword2() {
    alert("Агент должен иметь навыки сапёра. В твоем доме заложена бомба. Найди ее и обезвредь. Быстрее, часики тикают! Тик-так!");
    const response = prompt("Введи подтверждение");
    if(response === null) return;

    if (response.toLowerCase() === "hello world") {
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

    if (response.toLowerCase() === "salmana") {
        alert("Верно!");
        getPassword2();
    } else {
        alert("Это не верно!");
        getPassword1();
    }
}

function getResponse3() {
    const response = prompt("Скiльки бубочок на ожинi?");
    if(response !== null) {
        alert("Максим, ты справился с первым испытанием и зачислен в стажёры. Пройди все испытания чтобы получить статус Спец Агента");
        alert("Самый важный навые агента: Агент должен уметь согреть холодное сердце!");
        getPassword1();
    } else {
        getResponse1();
    }
}

function getResponse2() {
    const response = prompt("Сколько людей побывало на луне?");
    if(response === null) return;

    if (response === "12") {
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

let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type);

let app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        antialias: true,
        transparent: false,
        resolution: 1
    }
);

app.loader.load(setup);

function setup(loader, resources) {
    let gfx = new PIXI.Graphics();
    gfx.beginFill(0x000000);
    gfx.drawRect(0, 0, window.innerWidth, 20);
    gfx.endFill();

    app.stage.addChild(gfx);
    gfx.position.set(0, window.innerHeight/2);
    gfx.interactive = true;
    gfx.buttonMode = true;
    gfx.on("click", () => {
        getPassword2();
    }).on("pointerdown", () => {
        getPassword2();
    });

    app.start();
}

document.body.appendChild(app.view);

getResponse1();

