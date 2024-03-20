import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Testing for hook useFetchGifs', () => { 
    test('should return initial value', () => { 
        const {result} = renderHook(()=>useFetchGifs('Hello'))
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     })
     
    test('should return images after loaded', async () => { 
        const {result} = renderHook(()=>useFetchGifs('Hello'))

        //wait for hook to change its state
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
     })
 })