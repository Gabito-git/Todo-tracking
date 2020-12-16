
import './styles.css';
import { Todo, TodoList } from './classes'                             // Busca por defecto el archivo index.js
import { crearTodoHtml } from './js/componentes';

const footer          = document.querySelector('.footer');

export const todoList = new TodoList();

// todoList.todos.forEach(todo =>( crearTodoHtml( todo ) ));    // For each para uno más argumentos
todoList.todos.forEach( crearTodoHtml );                        // For each para un solo argumento

if(todoList.todos.length > 0){ footer.classList.remove('hidden') };
// const newTodo = new Todo('Aprender Javascript');
// todoList.nuevoTodo( newTodo );

// console.log('todos', todoList.todos);

