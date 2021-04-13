import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react';

function ProductScreen() {

    const productDetails = useSelector(state => state.productDetails)
    const dispatch = useDispatch();
    const {product, loading, error } =  productDetails;

    useEffect(() => {
        dispatch(detailsProduct());
        return () => {
            
        }
    }, [])
    return (
        <div>
            <Link to="/">Back</Link>
            
        </div>
    )
}

export default ProductScreen
