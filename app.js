let textBox = document.querySelector("#input-box");
let btn = document.querySelector("button");
let ul = document.querySelector("#list-container");
let crossIcon = document.querySelector("span");


btn.addEventListener('click', () => {
    if (textBox.value == '') {
        alert('You must write something!');
    }
    else {
        let li = document.createElement("li");
        li.innerText = textBox.value;
        let span = document.createElement('span');
        span.innerText = '\u00d7';
        li.appendChild(span);
        ul.appendChild(li);
    }
    textBox.value = '';

});

ul.addEventListener('click', (e) => {
    if (e.target.nodeName == 'SPAN'){
        e.target.parentElement.remove();
    }
    else if (e.target.nodeName == "LI"){
        e.target.classList.toggle("checked");
    }
});