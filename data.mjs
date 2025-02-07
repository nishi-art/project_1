const backgroundImage = [
    'one.jpg',
    'two.jpg',
    'three.jpg',
    'four.jpg',
]
const backgroundPropertys = [
    {backgroundColor: 'rgb(252, 0, 0)'}, //値の間に半角スペースを入れておかないとwhile文で取得したbackground-colorと比較したときに常にfalseになる
    {backgroundColor: 'rgb(0, 21, 250)'},
    {backgroundColor: 'rgb(1, 140, 4)'},
    {backgroundColor: 'rgb(244, 252, 3)'},
    {backgroundColor: 'rgb(250, 171, 0)'},
    {backgroundColor: 'rgb(232, 3, 252)'},
    {backgroundColor: 'rgb(0, 0, 0)'},
    {backgroundColor: 'rgb(255, 255, 255)'},
]
const shapeProperties = [
    {clipPath: 'inset(0 0 0 0)',backgroundColor: 'rgb(252, 0, 0)'},
    {clipPath: 'inset(0 0 0 0)',backgroundColor: 'rgb(0, 21, 250)'},
    {clipPath: 'inset(0 0 0 0)',backgroundColor: 'rgb(1, 140, 4)'},
    {clipPath: 'inset(0 0 0 0)',backgroundColor: 'rgb(244, 252, 3)'},
    {clipPath: 'inset(0 0 0 0)',backgroundColor: 'rgb(250, 171, 0)'},
    {clipPath: 'inset(0 0 0 0)',backgroundColor: 'rgb(232, 3, 252)'},
    {clipPath: 'inset(0 0 0 0)',backgroundColor: 'rgb(0, 0, 0)'},
    {clipPath: 'inset(0 0 0 0)',backgroundColor: 'rgb(255, 255, 255)'},
    {clipPath: 'inset(30px 0 30px 0)',backgroundColor: 'rgb(252, 0, 0)'},
    {clipPath: 'inset(30px 0 30px 0)',backgroundColor: 'rgb(0, 21, 250)'},
    {clipPath: 'inset(30px 0 30px 0)',backgroundColor: 'rgb(1, 140, 4)'},
    {clipPath: 'inset(30px 0 30px 0)',backgroundColor: 'rgb(244, 252, 3)'},
    {clipPath: 'inset(30px 0 30px 0)',backgroundColor: 'rgb(250, 171, 0)'},
    {clipPath: 'inset(30px 0 30px 0)',backgroundColor: 'rgb(232, 3, 252)'},
    {clipPath: 'inset(30px 0 30px 0)',backgroundColor: 'rgb(0, 0, 0)'},
    {clipPath: 'inset(30px 0 30px 0)',backgroundColor: 'rgb(255, 255, 255)'},
    {clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',backgroundColor: 'rgb(252, 0, 0)'},
    {clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',backgroundColor: 'rgb(0, 21, 250)'},
    {clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',backgroundColor: 'rgb(1, 140, 4)'},
    {clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',backgroundColor: 'rgb(244, 252, 3)'},
    {clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',backgroundColor: 'rgb(250, 171, 0)'},
    {clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',backgroundColor: 'rgb(232, 3, 252)'},
    {clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',backgroundColor: 'rgb(0, 0, 0)'},
    {clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',backgroundColor: 'rgb(255, 255, 255)'},
    {clipPath: 'circle(75px at center)',backgroundColor: 'rgb(252, 0, 0)'},
    {clipPath: 'circle(75px at center)',backgroundColor: 'rgb(0, 21, 250)'},
    {clipPath: 'circle(75px at center)',backgroundColor: 'rgb(1, 140, 4)'},
    {clipPath: 'circle(75px at center)',backgroundColor: 'rgb(244, 252, 3)'},
    {clipPath: 'circle(75px at center)',backgroundColor: 'rgb(250, 171, 0)'},
    {clipPath: 'circle(75px at center)',backgroundColor: 'rgb(232, 3, 252)'},
    {clipPath: 'circle(75px at center)',backgroundColor: 'rgb(0, 0, 0)'},
    {clipPath: 'circle(75px at center)',backgroundColor: 'rgb(255, 255, 255)'},
]
const colorProperties = [
    {color: 'rgb(252, 0, 0)'},
    {color: 'rgb(0, 21, 250)'},
    {color: 'rgb(1, 140, 4)'},
    {color: 'rgb(244, 252, 3)'},
    {color: 'rgb(250, 171, 0)'},
    {color: 'rgb(232, 3, 252)'},
    {color: 'rgb(0, 0, 0)'},
    {color: 'rgb(255, 255, 255)'},
]
const numberContent = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
]
const colorTextContent = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'black',
    'white',
]
const shapeTextContent = [
    'square',
    'rectangle',
    'triangle',
    'circle',
]
const questionContent = [
    'background color',
    'shape background color',
    'number background color',
    'color text background color',
    'shape text background color',
    'shape',
    'color text',
    'shape text',
]
const colorObject = {
    'rgb(252, 0, 0)': 'red',
    'rgb(0, 21, 250)': 'blue',
    'rgb(1, 140, 4)': 'green',
    'rgb(244, 252, 3)': 'yellow',
    'rgb(250, 171, 0)': 'orange',
    'rgb(232, 3, 252)': 'purple',
    'rgb(0, 0, 0)': 'black',
    'rgb(255, 255, 255)': 'white',
}
const shapeObject = {
    'inset(0px)': 'square',
    'inset(30px 0px)': 'rectangle',
    'polygon(50% 0px, 100% 100%, 0px 100%)': 'triangle',
    'circle(75px at 50% 50%)': 'circle',
}
const elementObject = {
    'background color': (type, element, number, input) => {
        const BaCo = backgroundColor(element,number);
        correctInput = `${type} ${BaCo}`;
        answerCheck(input,correctInput);
    },
    'shape background color': (type, element, number, input) => {
        const ShBaCo = shapeBackgroundColor(element,number);
        correctInput = `${type} ${ShBaCo}`;
        answerCheck(input,correctInput);
    },
    'number background color': (type, element, number, input) => {
        const NuBaCo = numberBackgroundColor(element,number);
        correctInput = `${type} ${NuBaCo}`;
        answerCheck(input,correctInput);
    },
    'color text background color': (type, element, number, input) => {
        const CoTeBaCo = numberBackgroundColor(element,number);
        correctInput = `${type} ${CoTeBaCo}`;
        answerCheck(input,correctInput);
    },
    'shape text background color': (type, element, number, input) => {
        const ShTeBaCo = numberBackgroundColor(element,number);
        correctInput = `${type} ${ShTeBaCo}`;
        answerCheck(input,correctInput);
    },
    'shape': (type, element, number, input) => {
        const Sh = window.getComputedStyle(element[number]);
        const shapeName = shapeObject[Sh.clipPath];
        correctInput = `${type} ${shapeName}`;
        ////console.log(correntInput);
        answerCheck(input,correctInput);
    },
    'color text': (type, element, number, input) => {
        correctInput = `${type} ${element[number].textContent}`;
        ////console.log(correntInput);
        answerCheck(input,correctInput);
    },
    'shape text': (type, element, number, input) => {
        correctInput = `${type} ${element[number].textContent}`;
        ////console.log(correntInput);
        answerCheck(input,correctInput);
    },
}

export {backgroundImage, backgroundPropertys, shapeProperties, colorProperties, numberContent, colorTextContent, shapeTextContent, questionContent, colorObject ,shapeObject, elementObject};