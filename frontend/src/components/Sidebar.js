import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
    return (
        <SideContainer>
            <InputSearchContainer>
                <InputSearch placeholder="Search"/>
                <InputSearchIconContainer>
                    <SearchIcon/>
                </InputSearchIconContainer>
            </InputSearchContainer>
           
        </SideContainer>
    )
}

export default Sidebar

const SideContainer = styled.div`
    height: 700px;
    width: 300px;
    display: flex;
    flex-direction: column; 
    margin-top: 50px;
    margin-left: 50px;
    border-radius: 30px;
    background-color: black;

    background: rgba( 17, 21, 28, 0.40 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 4px );
    -webkit-backdrop-filter: blur( 4px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const InputSearchContainer = styled.div`
 display:flex;
 flex-direction: row;
 height: 40px;
 overflow: hidden;
 margin-top:7px;
margin-left: 7px;
border-right-radius: 7px 7px;
  `


const InputSearch = styled.input`
color:white;
font-size: 16px;
flex-grow: 3;
border: 0;
:focus {
    outline: none;
}
:focus-within {
    box-shadow: 0 0 0 3px rgba( 83, 0, 129, 0.60 );
}
background: rgba( 17, 21, 28, 0.55 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.0px );
-webkit-backdrop-filter: blur( 8.0px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
border-radius: 5px;
`



const InputSearchIconContainer = styled.div`
width: 45px;
color: #343333;
display:flex;
justify-content: center;
align-items: center;
color:white;
background: rgba( 83, 0, 129, 0.60 );
cursor: pointer;
border-radius: 3px;

`