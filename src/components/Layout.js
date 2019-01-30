import * as React from "react";
import { Grid } from "react-bootstrap";

export default class Layout extends React.Component{

  render() {
    return (
      <div className='Layout'>
        <Grid>{ this.props.children }</Grid>
      </div>
    )
  }
}