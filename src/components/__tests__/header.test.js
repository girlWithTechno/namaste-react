import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from '../../utils/appStore';

describe("Header component",() => {
    it("Should load with a login button",() => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const loginButton = screen.getByRole("button",{name:"Log In"});
        expect(loginButton).toBeInTheDocument();
    });
    it("Should load with a cart items button",() => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const loginButton = screen.getByText(/Cart/);
        expect(loginButton).toBeInTheDocument();
    });
    it("Should change login button to logout on click",() => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const loginButton = screen.getByRole("button",{name:"Log In"});
        fireEvent.click(loginButton);
        
        const logoutButton = screen.getByRole("button",{name:"Log Out"});
        expect(logoutButton).toBeInTheDocument();
    });
})