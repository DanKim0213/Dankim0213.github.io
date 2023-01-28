import Todo from "./Todo.mjs";
import TodoController from "./TodoController.mjs";

const controller = new TodoController();

const todoItem = new Todo("id1", "content1", false, "food", ["tag1"]);
controller.createTodo(todoItem);
controller.readAllTodo();
controller.readTodo(todoItem.id);
controller.updateTodo(
  todoItem.id,
  new Todo("id1", "new content", false, "grocery")
);
controller.updateTag(todoItem.id, todoItem.tags[0], "new tag 1");
controller.deleteAllTag(todoItem.id);
controller.deleteAllTodo();
controller.deleteTag(todoItem.id, todoItem.tags[0]);
controller.deleteTodo(todoItem.id);
