import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOpenLabel } from "../RestaurantCard";
import MOCK_DATA from '../mocks/resCardMock.json';
import "@testing-library/jest-dom";

describe("Restaurant Card", () => {
    it("should render the card with the props", () => {
        render(<RestaurantCard restaurantItem={MOCK_DATA}/>)

        const restaurantName = screen.getByText("Tossin Pizza");

        expect(restaurantName).toBeInTheDocument();
    });
    it("should render the card with the OPEN tag", () => {
        const OpenRestaurant = withOpenLabel(RestaurantCard);
        render(<OpenRestaurant restaurantItem={MOCK_DATA}/>)

        const isOpened = screen.getByText("Opened");

        expect(isOpened).toBeInTheDocument();
    });
})