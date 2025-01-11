function changeTonumberImage() {
    const background = document.querySelectorAll('.background');

    const backgroundImage = [
        'one.jpg',
        'two.jpg',
        'three.jpg',
        'four.jpg',
    ];

    for(let i = 0; i < background.length; i++) {
        if(backgroundImage.length === 0) break;
        const randonNumberColor = Math.floor( Math.random() * backgroundImage.length );
        const selectNumber = `<img src="data/${backgroundImage[randonNumberColor]}" />`;
        if(background === null) {
            background[i].insertAdjacentHTML('afterbegin',selectNumber);
        }
        else {
            background[i].innerHTML = selectNumber;
        }
        backgroundImage.splice(randonNumberColor, 1);
    };
};

function changeContent() {
    const background = document.querySelectorAll('.background');
    const shape = document.querySelectorAll('.shape');
    const number = document.querySelectorAll('.number');
    const colorText = document.querySelectorAll('.color-text');
    const shapeText = document.querySelectorAll('.shape-text');

    const backgroundPropertys = [
        {backgroundColor: 'rgb(252, 0, 0)'}, //半角スペースを入れておかないと取得したbackground-colorとif文で比較したときに常にfalseになる
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

    for(let i=0; i < background.length; i++) {
        const randomBackground = Math.floor(Math.random() * backgroundPropertys.length);
        Object.assign(background[i].style, backgroundPropertys[randomBackground]);
        backgroundPropertys.splice(randomBackground, 1); 
    }
    
    for(let j=0; j < shape.length; j++) {
        let randomShape = Math.floor(Math.random() * shapeProperties.length);
        let currentBackground = window.getComputedStyle(background[j]);

        while(currentBackground.backgroundColor === shapeProperties[randomShape].backgroundColor) {
            randomShape = Math.floor(Math.random() * shapeProperties.length);
        }
        Object.assign(shape[j].style, shapeProperties[randomShape]);
        shapeProperties.splice(randomShape, 1);

        /* 下記のif文でも動作するが上記のwhile文の方が簡略化されている。
            またspliceの第一引数にrandomShapeを指定しなければならないため下記のif文ではもっと複雑になる
        if(currentBackground.backgroundColor === shapeProperties[randomShape].backgroundColor) { 
            const newshapeProperties = shapeProperties.filter(shapeProperty => {
                return shapeProperty.backgroundColor !== shapeProperties[randomShape].backgroundColor;
            });
            const secondnumber = Math.floor(Math.random() * newshapeProperties.length);
            Object.assign(shape[j].style, newshapeProperties[secondnumber]);
        }
        else {
            Object.assign(shape[j].style, shapeProperties[randomShape]);
        }*/
    }

    for(let k=0; k < number.length; k++) {
        let randonNumberColor = Math.floor(Math.random() * colorProperties.length);
        const randomNumberContent = Math.floor(Math.random() * numberContent.length);
        let currentshape = window.getComputedStyle(shape[k]);
        currentBackground = window.getComputedStyle(background[k]); //これは上のfor文で用意したcurrentBackgroundにはbackground[j]が代入してあるためbackground[k]を代入しなおす

        while(currentBackground.backgroundColor === colorProperties[randonNumberColor].color || currentshape.backgroundColor === colorProperties[randonNumberColor].color) {
            randonNumberColor = Math.floor(Math.random() * colorProperties.length);
        }
        Object.assign(number[k].style, colorProperties[randonNumberColor]);
        number[k].textContent = numberContent[randomNumberContent];
        numberContent.splice(randomNumberContent, 1);
    }

    for(let l=0; l < colorText.length; l++) {
        let randomColorTextColor = Math.floor(Math.random() * colorProperties.length);
        let randomShapeTextColor = Math.floor(Math.random() * colorProperties.length);
        const randomColorTextContent = Math.floor(Math.random() * colorTextContent.length);
        const randomShapeTextContent = Math.floor(Math.random() * shapeTextContent.length);
        let currentNumber = window.getComputedStyle(number[l]);
        currentshape = window.getComputedStyle(shape[l]);

        while(currentBackground.backgroundColor === colorProperties[randomColorTextColor].color || currentshape.backgroundColor === colorProperties[randomColorTextColor].color || currentNumber.color === colorProperties[randomColorTextColor].color) {
            randomColorTextColor = Math.floor(Math.random() * colorProperties.length);
        }
        while(currentBackground.backgroundColor === colorProperties[randomShapeTextColor].color || currentshape.backgroundColor === colorProperties[randomShapeTextColor].color || currentNumber.color === colorProperties[randomShapeTextColor].color) {
            randomShapeTextColor = Math.floor(Math.random() * colorProperties.length);
        }
        colorText[l].textContent = colorTextContent[randomColorTextContent];
        shapeText[l].textContent = shapeTextContent[randomShapeTextContent];
        Object.assign(colorText[l].style, colorProperties[randomColorTextColor]);
        Object.assign(shapeText[l].style, colorProperties[randomShapeTextColor]);
    }

}
function preparation() {
    const ready = document.querySelector('.ready');
    const go = document.querySelector('.go');
    const preparation = document.querySelector('.preparation');

    ready.classList.add('ready-animate');
    ready.classList.remove('none');
    go.classList.add('go-animate');
    setTimeout(() => {
        preparation.classList.add('none');
        changeTonumberImage();
        //changeContent();
    }, 2700);
}
const btn = document.querySelector('.btn');
//btn.addEventListener('click', changeTonumberImage);
//btn.addEventListener('click', changeContent);
btn.addEventListener('click', preparation);