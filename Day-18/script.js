document.addEventListener("DOMContentLoaded", () => {
  const usrInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length > 0) {
    tasks.forEach((task) => {
      displayTasks(task);
    });
  }
  addBtn.addEventListener("click", () => {
    let usrInputText = usrInput.value.trim();
    if (usrInputText === "") return;
    const eachTaskInfo = {
      id: Date.now(),
      name: usrInputText,
      iscompleted: false,
    };
    tasks.push(eachTaskInfo);

    saveTasks();
    usrInput.value = "";
    displayTasks(eachTaskInfo);
    console.log(tasks);
  });

  function displayTasks(task) {
      const li = document.createElement("li");
      li.setAttribute("data-id", task.id);
      todoList.appendChild(li);
      li.innerHTML = ` 
      <span>${task.name}</span>
      <button>Delete</button>
      `;
      if (task.iscompleted) li.classList.add("completed");
      li.addEventListener("click", (e) => {
          if (e.target.tagName == "BUTTON") return;
          task.iscompleted= !task.iscompleted;
          li.classList.toggle("completed");
          saveTasks(); 
        });
        li.querySelector("button").addEventListener("click",(e)=>{
            e.stopPropagation; //prevent bubbling of event
            tasks = tasks.filter((t)=>t.id !== task.id); //filter out the task that is clicked, and update the tasks array
            //here every li has their own id as in line 29, so we are filtering out the task that is clicked by comparing the id of the task (t.id) with the id of the li(task.id)
            saveTasks();
            li.remove();//remove the li from the DOM

        })
    }
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
