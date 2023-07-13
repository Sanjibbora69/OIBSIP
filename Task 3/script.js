document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const task = taskInput.value.trim();
      if (task !== '') {
        addTask(task);
        taskInput.value = '';
      }
    });
  
    function addTask(task) {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const label = document.createElement('label');
      label.textContent = task;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
  
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          label.classList.add('completed');
          completedTasksList.appendChild(li);
        } else {
          label.classList.remove('completed');
          pendingTasksList.appendChild(li);
        }
      });
  
      deleteButton.addEventListener('click', function() {
        li.remove();
      });
  
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteButton);
  
      pendingTasksList.appendChild(li);
    }
  });
  