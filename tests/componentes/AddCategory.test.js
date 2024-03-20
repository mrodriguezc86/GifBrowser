import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/componentes"

describe('test for <AddCategory/>', () => { 
    test('should match snapshot', () => { 
        const {container} = render(<AddCategory onSubmitCategory={ ()=>{} } />)
        //screen.debug();
        expect(container).toMatchSnapshot();
     }) 

     test('should change the texbox value', () => { 
        render(<AddCategory onSubmitCategory={ ()=>{} } />)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, { target: { value: "Hello" } })
        expect(input.value).toBe('Hello')
      })

      test('should call onSubmitCategory if the input has a value', () => { 
        const inputValue = 'Hello'
        const onSubmitCategory = jest.fn();

        render(<AddCategory onSubmitCategory={onSubmitCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, {target: {value: inputValue}})
        fireEvent.submit(form);
        //screen.debug();

        //clear the textbox
        expect(input.value).toBe('');

        //onSubmitCategory called
        expect(onSubmitCategory).toHaveBeenCalled()
        expect(onSubmitCategory).toHaveBeenCalledTimes(1)
        expect(onSubmitCategory).toHaveBeenCalledWith(inputValue)

       })

       test('should not call onSubmitCategory if input is empty', () => { 
          const inputValue = ''
          const onSubmitCategory = jest.fn()

          render(<AddCategory onSubmitCategory={onSubmitCategory}/>);

          const input = screen.getByRole('textbox');
          const form = screen.getByRole('form');
  
          fireEvent.input( input, {target: {value: inputValue}})
          fireEvent.submit(form);
          //screen.debug();

          //onSubmitCategory not called
          expect(onSubmitCategory).not.toHaveBeenCalled()
          expect(onSubmitCategory).toHaveBeenCalledTimes(0)

        })
 })  