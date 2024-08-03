import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact page",() => {

    beforeAll(()=>{
        console.log('Before all');
    });

    beforeEach(()=>{
        console.log("Before each");
    });

    afterAll(()=>{
        console.log("After all");
    });

    afterEach(()=>{
        console.log("After each");
    });
    it("Should load contact component",() => {
        render(<Contact/>)
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button inside contact component",() => {
        render(<Contact/>)
    
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input inside contact component",() => {
        render(<Contact/>)
    
        const emailButton = screen.getByPlaceholderText("email");
        expect(emailButton).toBeInTheDocument();
    });
    
    it("Should load 2 input boxes inside contact component",() => {
        render(<Contact/>)
    
        const allInput = screen.getAllByRole("textbox");
        expect(allInput.length).toBe(2);
    });
})
