import {render, cleanup, screen} from "@testing-library/react";
import ToDo from "../components/ToDo";

test("should_render_todo_component()", ()=>{
    render(<ToDo/>);
    const todoElement = screen.getByTestId("todo-id");
    expect(todoElement).toBeInTheDocument();
})