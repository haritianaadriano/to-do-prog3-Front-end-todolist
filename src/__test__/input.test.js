import {render, cleanup, screen} from "@testing-library/react";
import Input from "../components/Input";

test("", ()=>{
    render(<Input/>);
    const inputElement = screen.getByTestId("input-id");
    expect(inputElement).toBeInTheDocument();
})