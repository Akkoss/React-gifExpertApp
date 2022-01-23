import react,{ useState, useEffect } from "react";
import { getGifs } from './../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    useEffect(()=>{
        getGifs( category )
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            });
    },[ category ]); //si pongo el useEfect con parentesis [] vacios se dispara una sola vez el renderizado

    return state; //{data:[], loading:true }
}