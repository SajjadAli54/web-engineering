onload = function(){
    // 1
    let section1 =  this.document.getElementById('container');

    //2
    let section2 = this.document.querySelector('section#container');

    // 3
    let listItemInClassSecond = this.document.getElementsByClassName('second');

    //4
    let listItemInClassThird = this.document.querySelector('ol .third');

    // 5
    section1.append('Hello!');

    // 6
    this.document.querySelector('div.footer').classList.add('main');
    
    // 7
    this.document.querySelector('div.footer').classList.remove('main');

    // 8
    let li = this.document.createElement('li');

    // 9
    li.innerText = 'Four';

    // 10
    this.document.querySelector('ul').appendChild(li);

    // 11
    let listItemsInOl = this.document.querySelectorAll('ol li');
    for(let li of listItemsInOl)
        li.style.backgroundColor = 'green';

    // 12
    this.document.body.removeChild(this.document.querySelector('div.footer'));
}