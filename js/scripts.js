function TodoItem(){
	text = '';
};

var todo_app = { 

	createTask: function() {
		var new_task_field = document.getElementById("new-task-field").value;
		var item = new TodoItem();
		var task = todo_app.setTaskText(item, new_task_field);
		todo_app.appendTask(task);
	},

	setTaskText: function(item, new_task_field){
		item.text = new_task_field;
		return item;
	},

	appendTask: function(task) {
		var task_list = document.getElementById("todo-items");
		var li = document.createElement("li");
		li.innerHTML = task.text;
		li.appendChild(todo_app.createCompleteButton());
		li.appendChild(todo_app.createDeleteButton());
		task_list.appendChild(li);
	},

	createCompleteButton: function() {
		var completed_items = document.getElementById("completed-items")
		var button = document.createElement("button");
		button.innerHTML = 'Complete';
		button.onclick = function() {
		var li = this.parentElement;
		li.removeChild(button);	
		completed_items.appendChild(li);
		}
		return button;
	},

	createDeleteButton: function() {
		var button = document.createElement("button");
		button.innerHTML = 'Delete';
		button.onclick = function() {
		button.parentElement.parentElement.removeChild(button.parentElement);
		}
		return button;
	}
};

window.onload = function() {
	document.getElementById("add-item").addEventListener('click', todo_app.createTask);
}