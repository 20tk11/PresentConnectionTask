import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Dropdown, Icon, Menu, Segment } from "semantic-ui-react";


export default function NavBar() {

    return (
        <Segment inverted>
            <Menu inverted secondary>
                <Container >
                    <Menu.Item as={NavLink} to='/' header name='Create Model'>
                        <img src="\logo.svg" alt="logo" color="white" style={{ marginRight: '10px' }} />
                        PresentConnection Task
                    </Menu.Item>
                    <Menu.Item as={NavLink} to='/bill' name='Bill' />
                </Container>
            </Menu>
        </Segment>
    )
}