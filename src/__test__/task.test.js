import {render, cleanup, screen} from "@testing-library/react";
import Task from "../components/Task";

test("should_render_Task_component()", ()=>{
    render(<Task/>);
    const taskElement = screen.getByTestId("task-id");
    expect(taskElement).toBeInTheDocument();
})