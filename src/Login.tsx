import React from 'react';
import './App.css';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';
export default () => (
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
            placeholder="SothaSil@clockworkcity.net"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="THE ENDING OF THE WORDS IS ALMSIVI"
            type="password"
          />
          
          <Button color="blue" fluid size="large">
          <a className= "ClockworkLink" href="https://www.youtube.com/embed/iR-K2rUP86M">Sign in</a>
          </Button>
          
        </Form>
      </Segment>
      <Message>
        Join the tribunal temple today! <a href="https://www.youtube.com/embed/0RtIsy9AHYE">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);