/**
 * Todo 아이템을 조작하는 클래스입니다.
 * @module TodoService
 * */
export default class TodoService {
  /**
   * create Todo service
   * @constructor
   */
  constructor() {}

  /**
   * get an instance complying with Singleton pattern
   * @returns {TodoService} instance
   */
  static getInstance() {
    if (!this._instance) {
      this._instance = new TodoService();
    }

    return this._instance;
  }

  /**
   * create a todo item
   * @param {Todo} todo
   */
  createTodo(todo) {
    if (!todo) {
      throw new Error("아이템이 없습니다");
    }
    console.log("// create todo");
  }

  readAllTodo() {
    console.log("// read all todo items");
  }

  readTodo(id) {
    console.log("// read the item of id");
  }

  updateTodo(id, todo) {
    console.log("// update the item of id");
  }

  updateTag(id, tag, newTag) {
    console.log("// update the item's tags of id");
  }

  deleteAllTodo() {
    console.log("// delete all todo items");
  }

  deleteTodo(id) {
    console.log("// delete the item of id");
  }

  deleteAllTag(id) {
    console.log("// delete all tags from the item of id");
  }

  deleteTag(id, tag) {
    console.log("// delete a tag from the item of id");
  }
}
