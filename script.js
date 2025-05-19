const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Добавление новой задачи
addBtn.onclick = function() {
  const taskText = taskInput.value.trim();
  
  if (taskText === "") {
    alert("Пожалуйста, введите задачу");
    return;
  }

  // Создаем элемент списка
  const li = document.createElement('li');

  // Создаем чекбокс для отметки выполненной задачи
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Обработчик для отметки задачи как выполненной
  checkbox.onchange = function() {
    if (this.checked) {
      span.classList.add('done');
    } else {
      span.classList.remove('done');
    }
  };

  // Текст задачи
  const span = document.createElement('span');
  
   span.className = 'task-text';
   span.textContent = taskText;

   // Кнопка удаления задачи
   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Удалить';
   deleteBtn.onclick = function() {
     taskList.removeChild(li);
   };

   // Собираем элементы вместе
   li.appendChild(checkbox);
   li.appendChild(span);
   li.appendChild(deleteBtn);

   // Добавляем задачу в список
   taskList.appendChild(li);

   // Очищаем поле ввода
   taskInput.value = "";
};