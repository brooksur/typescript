import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get<Todo>(url).then((response) => {
  const todo = response.data;
  logTodo(todo);
});

const logTodo = (todo: Todo) => {
  console.log(`
    The Todo with ID: ${todo.id}
    Has a title of: ${todo.title}
    Is it finished? ${todo.completed}
  `);
};
