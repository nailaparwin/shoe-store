import React from 'react'
import { useParams } from 'react-router-dom';

export default function Product() {
    const { id } = useParams();
   console.log('id' + id)
    return (
        <div>
            product
        </div>
    )
}
