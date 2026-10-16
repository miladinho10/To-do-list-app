const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

const errorText = document.querySelector("#error-text");

const taskList = document.querySelector("#task-list");

const itemCounter = document.querySelector("#item-counter");

const tasks = [];
function render() {
    taskList.textContent = ""

    const doneTasksCount = tasks.filter(task => task.done).length;

    itemCounter.textContent = `${doneTasksCount}/${tasks.length}`;

    for (let i = 0; i < tasks.length; i++) {
        const taskLi = document.createElement("li");

        taskLi.textContent = tasks[i].todo;

        if (tasks[i].done) {
            taskLi.classList.add("done");
        }

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "X";
        removeBtn.addEventListener("click", function () {
            event.stopPropagation();

            tasks.splice(i, 1)
            render();

        });

        taskLi.addEventListener("click", function () {
            taskLi.classList.toggle("done");

            const doneTasksCount = document.querySelectorAll(".done").length;

            itemCounter.textContent = `${doneTasksCount}/${tasks.length}`;

        })

        if (taskLi)

        taskLi.textContent = tasks[i].todo
        taskLi.appendChild(removeBtn)
        taskList.appendChild(taskLi)

        console.log(tasks)
    }
    //1. skapa upp elementen
    //2. lägga till text i elementen
    //3. lägga till elemenen  på våran hemsida
}



todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // const todoText = todoInput.value.trim();

    // if (todoText === "" || todoText === " ") {
    //     errorText.textContent = "Please enter a task!";
    //     return;
    // }

    // let taskObject = {task: todoText}
    // tasks.push(taskObject);

    const itemObj = {
        todo: todoInput.value,
        done: false
    }

    tasks.push(itemObj)

    render()

});
