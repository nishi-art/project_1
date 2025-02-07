import {backgroundImage, backgroundPropertys, shapeProperties, colorProperties, numberContent, colorTextContent, shapeTextContent, questionContent, colorObject ,shapeObject} from './data.mjs';

function game() {
    function changeToNumberImage() {
        const contentBoxs = document.querySelectorAll('.contentbox');

        //hasメソッドを使いたいから配列リテラルではない
        const usedImages = new Set();

        for(let i = 0; i < contentBoxs.length; i++) {
            if(usedImages.size === backgroundImage.length) break;
            let randomOrder = 0;

            do {
                randomOrder = Math.floor( Math.random() * backgroundImage.length );
            }while(usedImages.has(randomOrder));
            usedImages.add(randomOrder);
            //ordersは後でデータ属性として要素に数字を設定するために必要
            orders.push(randomOrder + 1);

            const assignedNumber = `<img class="img" src="data/${backgroundImage[randomOrder]}" />`;
            if(contentBoxs[i] === null) {
                contentBoxs[i].insertAdjacentHTML('afterbegin',assignedNumber);
            }
            else {
                contentBoxs[i].innerHTML = assignedNumber;
            }
        };
        setTimeout(() => {
            contentBoxs.forEach((contentBox) => {
                contentBox.classList.add('none');
            });
            changeContent();
        }, 3000);
    };

    function changeContent() {
        function backgroundColor(selectBackground,number) {
            const BaCo = window.getComputedStyle(selectBackground[number]);
            const colorName = colorObject[BaCo.backgroundColor];
            return colorName;
        }
        function shapeBackgroundColor(selectShape,number) {
            const ShBaCo = window.getComputedStyle(selectShape[number]);
            const colorName = colorObject[ShBaCo.backgroundColor];
            return colorName;
        }
        function numberBackgroundColor(selectNumber,number) {
            const NuBaCo = window.getComputedStyle(selectNumber[number]);
            const colorName = colorObject[NuBaCo.color];
            return colorName;
        }
        function colorTextBackgroundColor(selectColorText,number) {
            const CoTeBaCo = window.getComputedStyle(selectColorText[number]);
            const colorName = colorObject[CoTeBaCo.color];
            return colorName;
        }
        function shapeTextBackgroundColor(selectShapeText,number) {
            const ShTeBaCo = window.getComputedStyle(selectShapeText[number]);
            const colorName = colorObject[ShTeBaCo.color];
            return colorName;
        }
        function answerCheck(userInput,correctAnswer) {
            if(userInput.value === correctAnswer) {
                clearInterval(interval);
                timeLimitBar.style.transition = 'none'
                timeLimitBar.style.width = '100%'
                timeLimitBar.style.marginLeft = 0;
                timeLimitBar.style.marginRight = 0;
                if(runCount === 0) {
                    changeContent();
                    runCount += 1;
                }
                else if(runCount === 1) {
                    success.classList.remove('none');
                }
                else {}
            }
            else if(userInput.value !== correctAnswer){
                fail.classList.remove('none');
            }
            else{}
        }
        function dataFind(element, number) {
            const elementToArray = Array.from(element);
            elementToArray.forEach((value, index) => {
                value.dataset.number = orders[index];
            });
            const elementIndex = elementToArray.findIndex((value) => {
                return Number(value.dataset.number) === number;
            });
            return elementIndex;
        }

        const background = document.querySelectorAll('.background');
        const shape = document.querySelectorAll('.shape');
        const number = document.querySelectorAll('.number');
        const colorText = document.querySelectorAll('.color-text');
        const shapeText = document.querySelectorAll('.shape-text');
        const timeLimitBar = document.querySelector('.bar');
        const question = document.querySelector('.question');
        const answer = document.querySelector('.answer');
        const success = document.querySelector('.successResult');
        const fail = document.querySelector('.failureResult');

        //background
        const backgroundPropertysCopy = [...backgroundPropertys];
        for(let i=0; i < background.length; i++) {
            const randomBackground = Math.floor(Math.random() * backgroundPropertysCopy.length);
            Object.assign(background[i].style, backgroundPropertysCopy[randomBackground]);
            backgroundPropertysCopy.splice(randomBackground, 1); 
        }
        
        //shape
        const shapePropertiesCopy = [...shapeProperties];
        for(let j=0; j < shape.length; j++) {
            let randomShape = Math.floor(Math.random() * shapePropertiesCopy.length);
            const currentBackground = window.getComputedStyle(background[j]);

            while(currentBackground.backgroundColor === shapePropertiesCopy[randomShape].backgroundColor) {
                randomShape = Math.floor(Math.random() * shapePropertiesCopy.length);
            }
            Object.assign(shape[j].style, shapePropertiesCopy[randomShape]);
            shapePropertiesCopy.splice(randomShape, 1);
        }

        //number
        const numberContentCopy = [...numberContent];
        for(let k=0; k < number.length; k++) {
            let randonNumberColor = Math.floor(Math.random() * colorProperties.length);
            const randomNumberContent = Math.floor(Math.random() * numberContentCopy.length);
            const currentshape = window.getComputedStyle(shape[k]);
            const currentBackground = window.getComputedStyle(background[k]); //これは上のfor文で用意したcurrentBackgroundにはbackground[j]が代入してあるためbackground[k]を代入しなおす

            while(currentBackground.backgroundColor === colorProperties[randonNumberColor].color || currentshape.backgroundColor === colorProperties[randonNumberColor].color) {
                randonNumberColor = Math.floor(Math.random() * colorProperties.length);
            }
            Object.assign(number[k].style, colorProperties[randonNumberColor]);
            number[k].textContent = numberContentCopy[randomNumberContent];
            numberContentCopy.splice(randomNumberContent, 1);
        }

        //color,shape text
        for(let l=0; l < colorText.length; l++) {
            let randomColorTextColor = Math.floor(Math.random() * colorProperties.length);
            let randomShapeTextColor = Math.floor(Math.random() * colorProperties.length);
            const randomColorTextContent = Math.floor(Math.random() * colorTextContent.length);
            const randomShapeTextContent = Math.floor(Math.random() * shapeTextContent.length);
            const currentNumber = window.getComputedStyle(number[l]);
            const currentshape = window.getComputedStyle(shape[l]);
            const currentBackground = window.getComputedStyle(background[l]);

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

        //タイムリミットバー
        const reBtn = document.querySelector('.reset');
        timeLimitBar.classList.add('timeLimit');
        timeLimitBar.style.transition = 'width 1s linear, margin-left 1s linear, margin-right 1s linear';
        let barWidth = 100;
        const interval = setInterval(() => {
            if(barWidth > 0) {
                barWidth -= 10;
                const barMargin = (100 - barWidth) / 2;
                timeLimitBar.style.width = barWidth + '%';
                timeLimitBar.style.marginLeft = barMargin + '%';
                timeLimitBar.style.marginRight = barMargin + '%';
            }
            else if(barWidth === 0) {
                fail.classList.remove('none');
                clearInterval(interval);
            }
            else {}
            reBtn.addEventListener('click', () => {
                clearInterval(interval);
                timeLimitBar.style.transition = 'none'
                timeLimitBar.style.width = '100%'
                timeLimitBar.style.marginLeft = 0;
                timeLimitBar.style.marginRight = 0;
                timeLimitBar.classList.remove('timeLimit');
            });
        }, 1000);

        //questionとanswer
        const randomQuestion_1 = Math.floor(Math.random() * questionContent.length);
        let randomQuestion_2 = Math.floor(Math.random() * questionContent.length);
        let number_1 = Math.floor(Math.random() * 5);
        let number_2 = Math.floor(Math.random() * 5);
        while(number_1 === 0 || number_2 === 0 || number_1 === number_2) {
            number_1 = Math.floor(Math.random() * 5);
            number_2 = Math.floor(Math.random() * 5);
        }
        while(randomQuestion_1 === randomQuestion_2) {
            randomQuestion_2 = Math.floor(Math.random() * questionContent.length);
        }
        number_1 -= 1;
        number_2 -= 1;
        question.textContent = `${questionContent[randomQuestion_1]} (${orders[number_1]}) AND ${questionContent[randomQuestion_2]} (${orders[number_2]})`;
        answer.innerHTML = 'Answer<input class="input" type="text" placeholder="答えの間に半角スペースを入力すること"></input>';

        //画面表示の番号と要素の番号を一致させる　ex)（４）と４番目の要素を一致させる
        let firstQuestionIndex = 0;
        let secondQuestionIndex = 0;
        switch(questionContent[randomQuestion_1]) {
            case 'background color':
                firstQuestionIndex = dataFind(background,orders[number_1]);
                break;
            case 'shape':
            case 'shape background color':
                firstQuestionIndex = dataFind(shape,orders[number_1]);
                break;
            case 'number background color':
                firstQuestionIndex = dataFind(number,orders[number_1]);
                break;
            case 'color text':
            case 'color text background color':
                firstQuestionIndex = dataFind(colorText,orders[number_1]);
                break;
            case 'shape text':
            case 'shape text background color':
                firstQuestionIndex = dataFind(shapeText,orders[number_1]);
                break;
        }
        switch(questionContent[randomQuestion_2]) {
            case 'background color':
                secondQuestionIndex = dataFind(background,orders[number_2]);
                break;
            case 'shape':
            case 'shape background color':
                secondQuestionIndex = dataFind(shape,orders[number_2]);
                break;
            case 'number background color':
                secondQuestionIndex = dataFind(number,orders[number_2]);
                break;
            case 'color text':
            case 'color text background color':
                secondQuestionIndex = dataFind(colorText,orders[number_2]);
                break;
            case 'shape text':
            case 'shape text background color':
                secondQuestionIndex = dataFind(shapeText,orders[number_2]);
                break;
        }
        //問題の正解、不正解後の処理
        const input = document.querySelector('.input');
        let query = 0;
        let correctInput = 0;
        function keydownEvent(event) {
            if(event.key === 'Enter') {
                switch(questionContent[randomQuestion_1]) {
                    case 'background color':
                        const BaCo = backgroundColor(background,firstQuestionIndex);
                        switch(questionContent[randomQuestion_2]) {
                            case 'shape background color':
                                const ShBaCo = shapeBackgroundColor(shape,secondQuestionIndex);
                                correctInput = `${BaCo} ${ShBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'number background color':
                                const NuBaCo = numberBackgroundColor(number,secondQuestionIndex);
                                correctInput = `${BaCo} ${NuBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text background color':
                                const CoTeBaCo = colorTextBackgroundColor(colorText,secondQuestionIndex);
                                correctInput = `${BaCo} ${CoTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text background color':
                                const ShTeBaCo = shapeTextBackgroundColor(shapeText,secondQuestionIndex);
                                correctInput = `${BaCo} ${ShTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape':
                                const Sh = window.getComputedStyle(shape[secondQuestionIndex]);
                                const shapeName = shapeObject[Sh.clipPath];
                                correctInput = `${BaCo} ${shapeName}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text':
                                correctInput = `${BaCo} ${colorText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text':
                                correctInput = `${BaCo} ${shapeText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            default:
                                console.log('Unknown');
                        }
                        break;
                    case 'shape background color':
                        const ShBaCo = shapeBackgroundColor(shape,firstQuestionIndex);
                        switch(questionContent[randomQuestion_2]) {
                            case 'background color':
                                const BaCo = backgroundColor(background,secondQuestionIndex);
                                correctInput = `${ShBaCo} ${BaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'number background color':
                                const NuBaCo = numberBackgroundColor(number,secondQuestionIndex);
                                correctInput = `${ShBaCo} ${NuBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text background color':
                                const CoTeBaCo = colorTextBackgroundColor(colorText,secondQuestionIndex);
                                correctInput = `${ShBaCo} ${CoTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text background color':
                                const ShTeBaCo = shapeTextBackgroundColor(shapeText,secondQuestionIndex);
                                correctInput = `${ShBaCo} ${ShTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape':
                                const Sh = window.getComputedStyle(shape[secondQuestionIndex]);
                                const shapeName = shapeObject[Sh.clipPath];
                                correctInput = `${ShBaCo} ${shapeName}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text':
                                correctInput = `${ShBaCo} ${colorText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text':
                                correctInput = `${ShBaCo} ${shapeText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            default:
                                console.log('Unknown');
                        }
                        break;
                    case 'number background color':
                        const NuBaCo = numberBackgroundColor(number,firstQuestionIndex);
                        switch(questionContent[randomQuestion_2]) {
                            case 'background color':
                                const BaCo = backgroundColor(background,secondQuestionIndex);
                                correctInput = `${NuBaCo} ${BaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape background color':
                                const ShBaCo = shapeBackgroundColor(shape,secondQuestionIndex);
                                correctInput = `${NuBaCo} ${ShBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text background color':
                                const CoTeBaCo = colorTextBackgroundColor(colorText,secondQuestionIndex);
                                correctInput = `${NuBaCo} ${CoTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text background color':
                                const ShTeBaCo = shapeTextBackgroundColor(shapeText,secondQuestionIndex);
                                correctInput = `${NuBaCo} ${ShTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape':
                                const Sh = window.getComputedStyle(shape[secondQuestionIndex]);
                                const shapeName = shapeObject[Sh.clipPath];
                                correctInput = `${NuBaCo} ${shapeName}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text':
                                correctInput = `${NuBaCo} ${colorText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text':
                                correctInput = `${NuBaCo} ${shapeText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            default:
                                console.log('Unknown')
                        }
                        break;
                    case 'color text background color':
                        const CoTeBaCo = colorTextBackgroundColor(colorText,firstQuestionIndex);
                        switch(questionContent[randomQuestion_2]) {
                            case 'background color':
                                const BaCo = backgroundColor(background,secondQuestionIndex);
                                correctInput = `${CoTeBaCo} ${BaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape background color':
                                const ShBaCo = shapeBackgroundColor(shape,secondQuestionIndex);
                                correctInput = `${CoTeBaCo} ${ShBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'number background color':
                                const NuBaCo = numberBackgroundColor(number,secondQuestionIndex);
                                correctInput = `${CoTeBaCo} ${NuBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text background color':
                                const ShTeBaCo = shapeTextBackgroundColor(shapeText,secondQuestionIndex);
                                correctInput = `${CoTeBaCo} ${ShTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape':
                                const Sh = window.getComputedStyle(shape[secondQuestionIndex]);
                                const shapeName = shapeObject[Sh.clipPath];
                                correctInput = `${CoTeBaCo} ${shapeName}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text':
                                correctInput = `${CoTeBaCo} ${colorText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text':
                                correctInput = `${CoTeBaCo} ${shapeText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            default:
                                console.log('Unknown')
                        }
                        break;
                    case 'shape text background color':
                        const ShTeBaCo = shapeTextBackgroundColor(shapeText,firstQuestionIndex);
                        switch(questionContent[randomQuestion_2]) {
                            case 'background color':
                                const BaCo = backgroundColor(background,secondQuestionIndex);
                                correctInput = `${ShTeBaCo} ${BaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape background color':
                                const ShBaCo = shapeBackgroundColor(shape,secondQuestionIndex);
                                correctInput = `${ShTeBaCo} ${ShBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'number background color':
                                const NuBaCo = numberBackgroundColor(number,secondQuestionIndex);
                                correctInput = `${ShTeBaCo} ${NuBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text background color':
                                const CoTeBaCo = colorTextBackgroundColor(colorText,secondQuestionIndex);
                                correctInput = `${ShTeBaCo} ${CoTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape':
                                const Sh = window.getComputedStyle(shape[secondQuestionIndex]);
                                const shapeName = shapeObject[Sh.clipPath];
                                correctInput = `${ShTeBaCo} ${shapeName}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text':
                                correctInput = `${ShTeBaCo} ${colorText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text':
                                correctInput = `${ShTeBaCo} ${shapeText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            default:
                                console.log('Unknown')
                        }
                        break;
                    case 'shape':
                        const Sh = window.getComputedStyle(shape[firstQuestionIndex]);
                        const shapeName = shapeObject[Sh.clipPath];
                        switch(questionContent[randomQuestion_2]) {
                            case 'background color':
                                const BaCo = backgroundColor(background,secondQuestionIndex);
                                correctInput = `${shapeName} ${BaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape background color':
                                const ShBaCo = shapeBackgroundColor(shape,secondQuestionIndex);
                                correctInput = `${shapeName} ${ShBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'number background color':
                                const NuBaCo = numberBackgroundColor(number,secondQuestionIndex);
                                correctInput = `${shapeName} ${NuBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text background color':
                                const CoTeBaCo = colorTextBackgroundColor(colorText,secondQuestionIndex);
                                correctInput = `${shapeName} ${CoTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text background color':
                                const ShTeBaCo = shapeTextBackgroundColor(shapeText,secondQuestionIndex);
                                correctInput = `${shapeName} ${ShTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text':
                                correctInput = `${shapeName} ${colorText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text':
                                correctInput = `${shapeName} ${shapeText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            default:
                                console.log('Unknown')
                        }
                        break;
                    case 'color text':
                        switch(questionContent[randomQuestion_2]) {
                            case 'background color':
                                const BaCo = backgroundColor(background,secondQuestionIndex);
                                correctInput = `${colorText[firstQuestionIndex].textContent} ${BaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape background color':
                                const ShBaCo = shapeBackgroundColor(shape,secondQuestionIndex);
                                correctInput = `${colorText[firstQuestionIndex].textContent} ${ShBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'number background color':
                                const NuBaCo = numberBackgroundColor(number,secondQuestionIndex);
                                correctInput = `${colorText[firstQuestionIndex].textContent} ${NuBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text background color':
                                const CoTeBaCo = colorTextBackgroundColor(colorText,secondQuestionIndex);
                                correctInput = `${colorText[firstQuestionIndex].textContent} ${CoTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text background color':
                                const ShTeBaCo = shapeTextBackgroundColor(shapeText,secondQuestionIndex);
                                correctInput = `${colorText[firstQuestionIndex].textContent} ${ShTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape':
                                const Sh = window.getComputedStyle(shape[secondQuestionIndex]);
                                const shapeName = shapeObject[Sh.clipPath];
                                correctInput = `${colorText[firstQuestionIndex].textContent} ${shapeName}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text':
                                correctInput = `${colorText[firstQuestionIndex].textContent} ${shapeText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            default:
                                console.log('Unknown')
                        }
                        break;
                    case 'shape text':
                        switch(questionContent[randomQuestion_2]) {
                            case 'background color':
                                const BaCo = backgroundColor(background,secondQuestionIndex);
                                correctInput = `${shapeText[firstQuestionIndex].textContent} ${BaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape background color':
                                const ShBaCo = shapeBackgroundColor(shape,secondQuestionIndex);
                                correctInput = `${shapeText[firstQuestionIndex].textContent} ${ShBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'number background color':
                                const NuBaCo = numberBackgroundColor(number,secondQuestionIndex);
                                correctInput = `${shapeText[firstQuestionIndex].textContent} ${NuBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text background color':
                                const CoTeBaCo = colorTextBackgroundColor(colorText,secondQuestionIndex);
                                correctInput = `${shapeText[firstQuestionIndex].textContent} ${CoTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape text background color':
                                const ShTeBaCo = shapeTextBackgroundColor(shapeText,secondQuestionIndex);
                                correctInput = `${shapeText[firstQuestionIndex].textContent} ${ShTeBaCo}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'shape':
                                const Sh = window.getComputedStyle(shape[secondQuestionIndex]);
                                const shapeName = shapeObject[Sh.clipPath];
                                correctInput = `${shapeText[firstQuestionIndex].textContent} ${shapeName}`;
                                answerCheck(input,correctInput);
                                break;
                            case 'color text':
                                correctInput = `${shapeText[firstQuestionIndex].textContent} ${colorText[secondQuestionIndex].textContent}`;
                                answerCheck(input,correctInput);
                                break;
                            default:
                                console.log('Unknown')
                        }
                        break;
                    default:
                        console.log('Unknown : Unknown')
                }
            }
            else {}
        }
        document.addEventListener('keydown', keydownEvent);
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
            changeToNumberImage();
        }, 2700);
    }
    const orders = [];
    let runCount = 0;
    const btn = document.querySelector('.btn');
    const reBtn = document.querySelector('.reset');
    const ruleBtn = document.querySelector('.rule');
    const closeBtn = document.querySelector('.closeBtn');
    const description = document.querySelector('.description');
    btn.addEventListener('click', preparation);
    reBtn.addEventListener('click', () => {
        location.reload();
    });
    ruleBtn.addEventListener('click', () => {
        description.classList.add('rule-slidedown');
        description.classList.remove('rule-slideup');
    });
    closeBtn.addEventListener('click', () => {
        description.classList.add('rule-slideup');
        description.classList.remove('rule-slidedown');
    });
}
document.addEventListener('DOMContentLoaded', () => {
    game();
});