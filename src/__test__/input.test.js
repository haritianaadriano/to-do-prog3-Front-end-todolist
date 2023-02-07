import {render, fireEvent, screen} from "@testing-library/react";
import {create} from 'react-test-renderer';
import Input from "../components/Input";

describe("Input test", () => {
    it("Input appears in document", () => {
        render(<Input/>);
        const inputElement = screen.getByTestId("input-id");

        expect(inputElement).toBeInTheDocument();
    })

    it("[snapshot] Input renders correctly", () => {
        const renderer = create(<Input/>);
        const json = renderer.toJSON();

        expect(json).toMatchSnapshot();
    })

    it("Input testing on key down", () => {
        render (<Input setInput={() => {}}/>);
        const inputElement = screen.getByPlaceholderText("Enter a task ...");
        fireEvent.change(inputElement, {target: {value: "test"}});

        expect(inputElement.value).toBe("test");
    })
})