import {render, cleanup, screen} from "@testing-library/react";
import Task from "../components/Task";

describe("Task test", () => {
    const todoMock = "todo-1";

    it("Task appears in document", () => {
        const taskElement = screen.getByTestId("task-id");
        expect(taskElement).toBeInTheDocument();
    })

    it("todo mocking appears in task component", () => {
        const taskElement = render(<Task todo = {todoMock}/>);
        expect(taskElement).toHaveTextContent(todoMock);
    })
})