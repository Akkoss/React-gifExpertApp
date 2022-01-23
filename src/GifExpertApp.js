import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState( ['One Punch']);

    // const handleAdd = () => {
    //     // setCategories([...categories,'HunterxHunter']);
    //     setCategories(['HunterxHunter',...categories]);
    //     // setCategories( cats => ['HunterxHunter',...cats]);
    // }

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map((category)=>{                   
                        return <GifGrid 
                        key={ category }
                        category={category} 
                        />
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;