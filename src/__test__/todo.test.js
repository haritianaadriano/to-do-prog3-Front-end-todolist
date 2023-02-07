import {render, cleanup, screen} from "@testing-library/react";
import {create} from 'react-test-renderer';
import ToDo from "../components/ToDo";

describe('Todo test', () => {
    const mocks = [
        'ohatra__1',
        'ohatra__2'
    ]


it("renders correctly", () => {
    const element = render(<ToDo toDoList={mocks} />);

    const todoElement = screen.getByTestId("todo-id");
    expect(element.container.textContent).toContain("To-do");
    expect(todoElement).toBeInTheDocument();
})


it("[snapshot] renders correctly", () => {
    const renderer = create(<ToDo toDoList={mocks} />);
    const json = renderer.toJSON();

    expect(json).toMatchSnapshot();
})



it("maps todo item accoring to the todoList props", () => {
    render(<ToDo toDoList={mocks} />);

    const todoElement = screen.getByTestId("todo-id");

    const [todo1, todo2] = mocks;

    expect(todoElement.children).toHaveLength(mocks.length);
    expect(todoElement.textContent).toContain(todo1);
    expect(todoElement.textContent).toContain(todo2);
})
})
