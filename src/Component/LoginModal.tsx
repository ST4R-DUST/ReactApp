import * as React from 'react'; 
import { Modal, Button, Grid, Segment,Form, Header, Message} from 'semantic-ui-react';

export interface ILoginModalProps{
    open:boolean;
    closeModal? : ()=>void | undefined;
}

export function LoginModal(props: ILoginModalProps){

    let localClose = ()=>{
        props.closeModal && props.closeModal();      
    }

    return(
        <Modal open={props.open} onClose={localClose} >
        <Modal.Header> </Modal.Header>
        <Modal.Content>
        <Grid centered columns={2}>
    <Grid.Column>
      <Segment>
      <Header as="h3" textAlign="center" color="grey">
        Login
      </Header>
      </Segment>
      <Segment>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Example@gmail.com"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          
          <Button color="blue" fluid size="large">
            Sign in
          </Button>
          
        </Form>
      </Segment>
      <Message>
        Not a registered user? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
        </Modal.Content>

      </Modal>
    );
}

export default LoginModal