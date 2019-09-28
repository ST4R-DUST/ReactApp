
import React, { Component } from 'react'
import LoginModal from './LoginModal';
import {
    Menu, Dropdown, Sticky,Icon,Button,Search, DropdownMenu, DropdownItem,
  } from "semantic-ui-react";
import '../css/NavBar.css';


export interface IProps{  
  list_series: Array<{
    id: number,
    text: string,
    years: number
  }>
}

export default function NavBar(props: IProps){

    const[open, setOpen] = React.useState(false);
    
    let showModal = ()=>{
      setOpen(!open);
    }

    return (
    <Sticky>
      <div className='header'>
      <Menu inverted style={{ margin: 0 }} attached='top' size='huge'>
        <Menu.Menu position='left'>
            <Dropdown item icon ='list' simple >
              <DropdownMenu>
                <DropdownItem>Home</DropdownItem>
                <DropdownItem>
                  <Icon name='dropdown'/>
                  <span className='text'>Peliculas</span>
                  <DropdownMenu>
                    <DropdownItem>Accion</DropdownItem>
                    <DropdownItem>Drama</DropdownItem>
                    <DropdownItem>Infantil</DropdownItem>
                  </DropdownMenu>
                </DropdownItem>  
                  <Dropdown text='Series' options={props.list_series} simple item />
              </DropdownMenu>
            </Dropdown>
            </Menu.Menu>    
        <Menu.Menu position='right'>
            <Search fluid></Search>
            <Button inverted style={{ margin: 0 }} size='large' onClick={showModal} >Login</Button>
            <LoginModal open={open} closeModal={showModal}/>
            
        </Menu.Menu>

      </Menu>
      
      </div>
    </Sticky>
    )
    
}
