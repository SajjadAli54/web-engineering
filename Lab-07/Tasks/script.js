$(document).ready(() => {
    $('#change_heading').text('Hello World!');

    let div = `<div 
    class="purple"
    ></div>`;
    $('section').append(div);

    $('section *').on({
        mouseenter: mouseEnter,
        mouseleave: mouseLeave
    });

    function mouseEnter(event){
        $('.selected').text(`${event.target.className}`);
    }

    function mouseLeave(){
        $('.selected').text('None');
    }
})