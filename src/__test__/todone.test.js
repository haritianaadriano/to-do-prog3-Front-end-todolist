import {render, cleanup, screen} from "@testing-library/react";
import {create} from 'react-test-renderer';
import ToDone from "../components/ToDone";

describe("To Done test", () => {
    const mock = ["mock-1", "mock-2"];

    it("ToDone renders correctly", () => {
        render(<ToDone done={mock}/>);
        const todoneElement = screen.getByTestId("todone-id");

        expect(todoneElement).toBeInTheDocument();
    })

    it("[snapshot] ToDone renders correctly", () => {
        const renderer = create(<ToDone done={mock}/>);
        const json = renderer.toJSON();

        expect(json).toMatchSnapshot();
    })

    it("ToDone renders correctly the list", () => {
        render(<ToDone done={mock}/>);
        const todoneElement = screen.getByTestId("todone-id");
        const [element1, element2] = mock;

        expect(todoneElement.children).toHaveLength(mock.length);
        expect(todoneElement).toHaveTextContent(element1);
        expect(todoneElement).toHaveTextContent(element2);
    })
})