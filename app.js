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
        // Save task to Local Storage whenever 'li' added
        saveTasksToLocalStorage();
    }
    textBox.value = '';

});

ul.addEventListener('click', (e) => {
    if (e.target.nodeName == 'SPAN') {
        e.target.parentElement.remove();
        // Save task to Local Storage whenever 'li' removed
        saveTasksToLocalStorage();
    }
    else if (e.target.nodeName == "LI") {
        e.target.classList.toggle("checked");
        // Save task to Local Storage whenever 'li' status changed
        saveTasksToLocalStorage();
    }
});


// Function to save tasks to local storage
function saveTasksToLocalStorage() {
    let tasks = [];
    ul.querySelectorAll('li').forEach(item => {
        tasks.push({
            text: item.innerText.trim().replace(/\u00d7$/, '').replace(/\n/g, ''),
            checked: item.classList.contains('checked')
        });
    });
   
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasksFromLocalStorage() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => {
            let li = document.createElement("li");
            li.innerText = task.text;
            if (task.checked) {
                li.classList.add('checked');
            }
            let span = document.createElement('span');
            span.innerText = '\u00d7';
            li.appendChild(span);
            ul.appendChild(li);
        });
    }
}

// Load tasks from local storage when the page is loaded
window.addEventListener('DOMContentLoaded', loadTasksFromLocalStorage);