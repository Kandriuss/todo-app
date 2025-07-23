import type { TodoTitle } from "../Types";
import { CreateTodo } from "./CreateTodo";

interface Props {
    onAddTodo: (title: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({onAddTodo}) => {
    return (
        <header className="header">
            <h1>Todo <img 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
                alt="React Logo"
                className="logo"
                width={50}
                height={50}
            />
            </h1>

            <CreateTodo saveTodo={onAddTodo}/>
        </header>
    )
}
