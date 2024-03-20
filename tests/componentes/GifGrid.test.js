import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/componentes"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//mock from hook
jest.mock('../../src/hooks/useFetchGifs');

describe('Testing for <GifGrid/>', () => { 

    const category = 'Hello';

    test('should show loadind message', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        //screen.debug()
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));
     })

     test('should show gifs after receiving array with images', () => { 

        const gifs = [
            {
                id: 'abc',
                title: 'Hello 1',
                url: 'https://www.Hello1.com'
            },
            {
                id: 'def',
                title: 'Hello 2',
                url: 'https://www.Hello2.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category}/>)
        //screen.debug()

        //show img elements from array
        expect(screen.getAllByRole('img').length).toBe(2);

        //find the names of images in the array
        expect(screen.getByText('Hello 1')).toBeTruthy();
        expect(screen.getByText('Hello 2')).toBeTruthy();
        
      })
 })