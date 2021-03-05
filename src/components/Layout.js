import * as React from "react";
import { Container } from "react-bootstrap";

export default class Layout extends React.Component{

  render() {
    return (
      <div className='Layout' style={{height: `${window.innerHeight}px`}}>
        <Container>{ this.props.children }</Container>
      </div>
    )
  }
}