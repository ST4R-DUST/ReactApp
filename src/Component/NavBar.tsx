
import React, { Component } from 'react'
import {
    Menu, Breadcrumb, Dropdown, Sticky,Icon,Button,Search, DropdownMenu, DropdownItem,
  } from "semantic-ui-react";
import './NavBar.css';


  interface IProps{  
    list_series: Array<{
      id: number,
      text: string,
      years: number
    }>
  }



export default class NavBar extends Component <IProps>{


    render(){

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
                  <Dropdown text='Series' options={this.props.list_series} simple item />
              </DropdownMenu>
            </Dropdown>
            </Menu.Menu>    
        <Menu.Menu position='right'>
            <Search fluid></Search>
            <Button inverted style={{ margin: 0 }} size='large'>Login</Button>
        </Menu.Menu>

      </Menu>
      
      </div>

      <div style={{ backgroundColor:'#e5dfdf'}}>
        <Breadcrumb>
          <Breadcrumb.Section link>Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron'/>
          
        </Breadcrumb>
      </div>
    </Sticky>
    )
    }
}
