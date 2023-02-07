import {render, cleanup, screen} from "@testing-library/react";
import Task from "../components/Task";

describe("Task test", () => {
    const todoMock = "todo-1";

    it("Task appears in document", () => {
        const taskElement = screen.getByTestId("task-id");
        expect(taskElement).toBeInTheDocument();
    })

    it("todo mocking appears in task component", () => {
        render(<Task todo={todoMock} />);
        const taskElement = screen.getByTestId("task-id");

        expect(taskElement.textContent).toHaveTextContent(todoMock);
    })
})