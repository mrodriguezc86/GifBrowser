import { useState } from "react"
import {AddCategory, GifGrid} from './componentes'

export const GifExpertApp = () => {

    const [category, setCategory] = useState([])

    const onSubmitCategory = (inputValue) => {
        if(category.includes(inputValue))return;
        setCategory([inputValue, ...category])
    }

  return (
    <>
        <h1>Gif Browser</h1>
        <AddCategory onSubmitCategory={onSubmitCategory}/>
        
       
            {
                category.map(category => (
                    <GifGrid key={category} category={category}></GifGrid>
                ))
            }
           
        
    </>
  )
}
