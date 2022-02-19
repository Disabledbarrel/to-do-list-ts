interface Todo {
    text: string;
    complete: boolean;
}

type AddTodo = (text: string) => void;