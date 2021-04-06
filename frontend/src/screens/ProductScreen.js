import React from 'react'
import Product from '../components/Product'
import data from '../data'
import Products from '../components/Products'
import styled from 'styled-components'

function ProductScreen(props) {
    console.log(props.match.params.id)
    const product = data.products.find(x => x.id === props.match.params.id);
    console.log(product)
    return (
        <Container>
        </Container>
    )
}

export default ProductScreen;


const Container = styled.div`
margin-top: 50px;
height: 700px;
border:2px solid black;
display:flex;
justify-content:center;
flex-wrap: wrap;
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