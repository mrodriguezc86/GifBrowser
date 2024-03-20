import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/componentes";

describe('Test component <GetItem/>', () => { 

    const title = 'hello'
    const url = 'https://www.hello.com/'
    
    test('should match the snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
     })

     test('should show url image and alt text', () => { 
        render(<GifItem title={title} url={url}/>)
        //screen.debug();
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
      })

      test('should show Title', () => { 
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
       })
 })