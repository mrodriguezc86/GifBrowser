import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Testing for <GifExpertApp/>', () => { 
    test('should show loading message after providing an input value', () => { 
        render(<GifExpertApp/>);
        screen.debug();
        
        const inputValue = 'Hello'
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}})
        fireEvent.submit(form);
        screen.debug();

        expect(screen.getByText('Loading...'));
     })
     
     test('should show list of images for input value', () => { 
         render(<GifExpertApp/>);
         screen.debug();
         
         const inputValue = 'Hello'
         const input = screen.getByRole('textbox');
         const form = screen.getByRole('form');
 
         fireEvent.input( input, {target: {value: inputValue}})
         fireEvent.submit(form);
         screen.debug();
 
         //??? como esperar a que cambie el estado 
      })
 })