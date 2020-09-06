import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import ToDo from "../models/Todo.js"

// TODO you will need to change 'YOURNAME' to your actual name or all requests will be rejected
let url = 'Addyson/todos/'


class TodoService {

  async getTodos() {
    let res = await api.get(url);
    console.log("Getting the Todo List", res);
    //TODO Handle this response from the server
    ProxyState.todos = res.data.data.map(t => new ToDo(t))
  }

  async addTodo(todo) {

    console.log(todo)
    let res = await api.post(url, todo);
    console.log(res)
    //TODO Handle this response from the server
    let item = new ToDo(res.data.data)
    ProxyState.todos = [...ProxyState.todos, item]
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);
    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)

    let res = await api.put(url + todoId, todo);
    //TODO how do you trigger this change
  }

  async removeTodo(todoId) {
    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, how do you update the state
    let res = await api.delete(id)
    console.log(res)
    let index = ProxyState.todos.findIndex(todo => todo.id == todoId)
  }
}

const todoService = new TodoService();
export default todoService;