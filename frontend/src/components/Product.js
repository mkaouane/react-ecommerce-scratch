import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';



function Product({product}) {
    return (
        <Container>

            <Card>
                <ImageContainer>
                    <Image src={("https://i.pinimg.com/originals/a1/3a/59/a13a59cbec5bd30957a65e63dd321d5c.png")} />
                </ImageContainer>  
                <Link to={'/product/' + product.id}>

                        <Title>
                         <p>{product.name}</p>
                        </Title>
                </Link>
                    <BottomCard>
                        <Price>
                            ${product.price}
                        </Price>
                        <Button variant="contained" color="primary">Add</Button>

                    </BottomCard>
            </Card>
        </Container>
    )
}

export default Product

const Container = styled.div`

`

const Card = styled.div`
background: rgba( 0, 0, 0, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 12.5px );
-webkit-backdrop-filter: blur( 12.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
margin: 20px;
height: 400px;
width: 300px;
display:flex;
flex-direction: column;
justify-content: space-around;
`

const ImageContainer = styled.div`
display:flex;
justify-content:center;
align-items: end;`

const Image = styled.img`
max-height: 260px`

const Title = styled.div`
color: white;
text-align: center;
`

const BottomCard = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 4px;
    align-items: flex-end;
`

const Price = styled.div`
font-weight: 700;
font-size: 24px;`

const AddToCartButton = styled.button``


