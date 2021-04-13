import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import { detailsProduct } from "../actions/productActions";

function ProductScreen(props) {

    const productDetails = useSelector((state) => state.productDetails);
    const dispatch = useDispatch();
    const {product, loading, error } = productDetails;
    
    console.log(product)

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            
        }
    }, [])
    return (
        loading ? <div>Loading..</div> :
    error ? <div>{error}</div> :
        <Container>
            {product.name}
            <button>Add to cart</button>
        </Container>
    )
}

export default ProductScreen;


const Container = styled.div`
margin-top: 50px;
height: 800px;
border:2px solid black;
margin: auto;
max-width: 900px;
overflow-y: scroll;

background: rgba( 255, 255, 255, 0.15 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 20.0px );
-webkit-backdrop-filter: blur( 20.0px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

/* width */
::-webkit-scrollbar {
width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
box-shadow: inset 0 0 5px grey; 
border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
background: rgba( 83, 0, 129, 0.60 );
border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: #11151C; 
}
`