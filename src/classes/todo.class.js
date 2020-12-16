

export class Todo {

    // Convierte los objetos devueltos por el local storage a instancias de Todo. 
    // De esta manera, son accesibles los métodos que pueda tener esta clase en un futuro. 
    
    static fromJson( { tarea, id, completado, creado } ){

        const tempTodo = new Todo(tarea);
        
        tempTodo.id        = id;
        tempTodo.completado= completado;
        tempTodo.creado    = creado;

        return tempTodo;

    }

    constructor ( tarea ){

        this.tarea = tarea;
        this.id         = new Date().getTime();  // 126764534
        this.completado = false;
        this.creado     = new Date();

    }

}