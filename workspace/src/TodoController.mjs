import TodoService from "./TodoService.mjs";

/**
 * Todo item과 관련한 서비스를 조작하는 컨트롤러입니다
 * @module TodoController
 * */
export default class TodoController {
  /**
   * 생성자
   * @constructor
   */
  constructor() {
    this._todoService = TodoService.getInstance();
  }

  /**
   * 할 일을 추가한다.
   * @param {Todo} todo
   * @throws 파라미터가 null이라면 에러를 던집니다
   *
   * @example
   * createTodo(new Todo("id", "content", "confirmed", "category", ["tag1", "tag2"]))
   */
  createTodo(todo) {
    this._todoService.createTodo(todo);
  }

  /**
   * 모든 할 일을 조회한다.
   */
  readAllTodo() {
    this._todoService.readAllTodo();
  }

  /**
   * ID를 기반으로 특정 할 일을 조회한다.
   * @param {string} id
   */
  readTodo(id) {
    this._todoService.readTodo();
  }

  /**
   * ID를 제외한 모든 속성을 수정한다.
   * @param {string} id
   * @param {Todo} todo
   * @throws 아이디를 수정하려는 경우 에러를 던집니다
   */
  updateTodo(id, todo) {
    if (id !== todo.id) {
      throw new Error("아이디는 수정할 수 없습니다");
    }
    this._todoService.updateTodo(id, todo);
  }

  /**
   * 특정 할 일의 특정 태그를 수정한다.
   * @param {string} id - 아이디
   * @param {string} tag - 수정할 태그
   * @param {string} newTag - 새로운 태그
   */
  updateTag(id, tag, newTag) {
    this._todoService.updateTag(id, tag, newTag);
  }

  /**
   * 모든 할 일을 제거한다.
   */
  deleteAllTodo() {
    this._todoService.deleteAllTodo();
  }

  /**
   *
   * ID를 기반으로 특정 할 일을 삭제한다.
   * @param {string} id
   * @param {string} tag
   */
  deleteTodo(id) {
    this._todoService.deleteTodo(id);
  }

  /**
   * 특정 할 일의 모든 태그를 제거한다.
   * @param {string} id - 아이디
   */
  deleteAllTag(id) {
    this._todoService.deleteAllTag(id);
  }

  /**
   * 특정 할 일의 특정 태그를 삭제할 수 있다.
   * @param {string} id - 아이디
   * @param {string} tag - 삭제할 태그
   */
  deleteTag(id, tag) {
    this._todoService.deleteTag(id, tag);
  }
}
