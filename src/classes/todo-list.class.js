import { Todo } from './todo.class';

export class TodoList{

    constructor(){

        this.cargarLocalStorage();

    }

    nuevoTodo( todo ){
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo ( id ){
        
        this.todos = this.todos.filter( todo => todo.id != id );   // Regresa un nuevo arreglo excluyendo la condición
        this.guardarLocalStorage();
    }

    marcarCompletado ( id ){

        for( const todo of this.todos){

             if ( todo.id == id){
                 todo.completado = !todo.completado;
                 break;
             }
        }
        this.guardarLocalStorage();

    }

    eliminarCompletados (){
        
        const eliminados = this.todos.filter( todo => todo.completado  );
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();

        return eliminados;

    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));    // Local Storage solo admite strings, por esto se emplea el método JSON para que abra el objeto y lo convierta a String para poderlo guardar

    }

    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo')) 
                    ? JSON.parse(localStorage.getItem('todo')): 
                    [];

        // Convierte los objetos devueltos por el local storage a instancias de Todo. 
        // De esta manera, son accesibles los métodos que pueda tener esta clase en un futuro.            
       
        // this.todos = this.todos.map( obj => Todo.fromJson( obj ) )   // Forma 1
       
        // this.todos = this.todos.map(( obj ) => {                     // Forma 2
        //     return Todo.fromJson( obj );
        // })

        this.todos = this.todos.map( Todo.fromJson );                  // Forma 3        
        
    }


}

// Al cargar elementos (Instancias de una clase como en este caso) del local storage, 
// estos se cargan como objetos más no como instancias. Sus métodos se pierden