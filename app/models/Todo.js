export default class Todo {
  constructor({ _id, description }) {
    console.log(`Todo id: ${_id}`);
    console.log(`Todo item: ${description}`);
    this.id = _id
    this.item = description
  }

  get Template() {
    return `
    <li>${this.item}</li>
    `
  }
}