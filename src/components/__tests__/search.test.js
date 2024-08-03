import { fireEvent, render, screen } from "@testing-library/react";
import {act} from 'react'
import Body from '../Body';
import "@testing-library/jest-dom";
import MOCK_DATA from '../mocks/mockResList.json'
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

describe("Search", () => {
    it("should give output on search", async () => {
        await act( async ()=>render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ));

        const cardsBeforeSearch = screen.getAllByTestId("resCard");
        expect(cardsBeforeSearch.length).toBe(8);

        const searchButton = screen.getByRole("button", { name:"Search" });
        expect(searchButton).toBeInTheDocument();
        
        const searchInput = screen.getByTestId("searchId");

        fireEvent.change(searchInput, {target: {value: "Pizza"}})
        fireEvent.click(searchButton);

        const cards = screen.getAllByTestId("resCard");
        expect(cards.length).toBeGreaterThan(1);
    });
    it("should filter top rated restaurants", async () => {
        await act( async ()=>render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        ));

        const topRatedButton = screen.getByRole("button", { name: "Top Rated Restaurants" });
        
        fireEvent.click(topRatedButton);

        const cards = screen.getAllByTestId("resCard");
        expect(cards.length).toBe(7);
    });
});