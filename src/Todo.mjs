/**
 * Todo item 도메인 클래스입니다
 * @module Todo
 * */
export default class Todo {
  /**
   * Create a Todo item
   * @constructor
   * @param {string} id - 아이디
   * @param {string} content - 내용
   * @param {boolean} confirmed - 완료여부
   * @param {string} category - 카테고리
   * @param {string[]} [tags = []] - 태그들
   */
  constructor(id, content, confirmed, category, tags = []) {
    this._id = id;
    this._content = content;
    this._confirmed = confirmed;
    this._category = category;
    this._tags = tags;
  }

  /**
   * 아이디
   * @returns {string} id
   */
  get id() {
    return this._id;
  }

  /**
   * 태그들
   * @returns {string[]} tags
   */
  get tags() {
    return this._tags;
  }
}
