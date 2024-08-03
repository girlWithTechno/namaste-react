import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA from '../mocks/mockResMenu.json';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

describe("Cart",()=>{
    it("Should load restaurant menu component", async () => {
        await act(async () => render(
            <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
                <RestaurantMenu/>
                </Provider>
            </BrowserRouter>
        ));

        const accordionHeader = screen.getByText("Recommended (20)");
        fireEvent.click(accordionHeader);

        // expect(screen.getAllByTestId("foodItems").length).toBe(20);

        const addBtn = screen.getAllByRole("button", { name: "Add +" })
        fireEvent.click(addBtn[0]);

        expect(screen.getByText("Cart 1 items")).toBeInTheDocument();
    });
});