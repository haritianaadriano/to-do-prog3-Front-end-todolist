import {render, cleanup, screen} from "@testing-library/react";
import {create} from 'react-test-renderer';
import Task from "../components/Task";

describe("Task test", () => {
    const todoMock = "todo-1";

    it("Task appears in document", () => {
        render(<Task/>);
        const taskElement = screen.getByTestId("task-id");
        expect(taskElement).toBeInTheDocument();
    })

    if("[snapshot] Task renders correctly", () => {
        const renderer = create(<Task todo={todoMock}/>);
        const json = renderer.toJSON();

        expect(json).toMatchSnapshot();
    })

    it("todo mocking appears in task component", () => {
        render(<Task todo={todoMock} />);
        const taskElement = screen.getByTestId("task-id");

        expect(taskElement).toHaveTextContent(todoMock);
    })
})