onload = function(){
    // 2
    document.querySelector('#change_heading').innerText = 'Hello World!';

    // 3

    document.querySelector('div.brown').addEventListener('mouseover', changeTextAsColor);
    document.querySelector('div.brown').addEventListener('mouseleave', writeNone);

    document.querySelector('div.green').addEventListener('mouseover', changeTextAsColor);
    document.querySelector('div.green').addEventListener('mouseleave', writeNone);

    document.querySelector('div.blue').addEventListener('mouseover', changeTextAsColor);
    document.querySelector('div.blue').addEventListener('mouseleave', writeNone);

    document.querySelector('div.yellow').addEventListener('mouseover', changeTextAsColor);
    document.querySelector('div.yellow').addEventListener('mouseleave', writeNone);

    // 4
    let div = this.document.createElement('div');

    // 5
    div.classList.add('purple');
    div.addEventListener('mouseover', changeTextAsColor);
    div.addEventListener('mouseleave', writeNone);


    // 6
    this.document.querySelector('section').appendChild(div);
}

// 3

function changeTextAsColor(event){
    // debugger
    document.querySelector('span.selected').innerText = event.target.className; 
}

function writeNone(){
    document.querySelector('span.selected').innerText = 'None';
}

// 4