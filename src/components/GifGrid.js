import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    /*const [ images, setImages ] = useState([]);
*/
    
    const {data:images, loading} = useFetchGifs( category );

    return (
        <div className="card-grid">
            <h1>{ category }</h1>

            { loading && <p>Loading</p>}

            <div>
                {
                    images.map( img => (
                        <GifGridItem
                            key={img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </div>
    );
}