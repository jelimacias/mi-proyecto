let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // Cargar las tareas desde localStorage

// Función para agregar tareas
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const newTask = {
        text: taskText,
        completed: false
    };
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Guardar las tareas en localStorage
    renderTasks(); // Volver a renderizar la lista
    taskInput.value = ''; // Limpiar el campo de entrada
}

// Función para eliminar tareas
function removeTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Actualizar tareas en localStorage
    renderTasks(); // Volver a renderizar la lista
}

// Función para marcar una tarea como completada
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Actualizar tareas en localStorage
    renderTasks(); // Volver a renderizar la lista
}

// Función para renderizar la lista de tareas
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Limpiar la lista antes de volver a renderizarla

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        const taskText = document.createElement('span');
        taskText.innerText = task.text;
        if (task.completed) taskText.classList.add('completed');
        taskText.onclick = () => toggleTaskCompletion(index);

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Eliminar';
        removeButton.classList.add('remove');
        removeButton.onclick = () => removeTask(index);

        li.appendChild(taskText);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}

// Inicializar la lista al cargar la página
window.onload = renderTasks;
