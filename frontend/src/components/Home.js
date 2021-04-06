import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import Products from './Products'
import Sidebar from './Sidebar'
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"




export default function Home() {
    return (
        <Container>

        <Grid container spacing={2}>
        <Grid item xs={4} >
            <SidebarContainer>

                <Sidebar />
            </SidebarContainer>
            </Grid>
            <Grid item md={6} item xs={12} >
              <Products />
            </Grid>
        </Grid>
        </Container>
    )
}

const Container = styled.div`
margin-bottom: 200px;
   `

const SidebarContainer = styled.div`
@media (max-width: 1024px) {
    display: none ;
  }

`

const ProductsContainer = styled.div`


`