import * as React from "react";
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";

export const Layout = ({children}) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  return (
    <div className='Layout' style={{height: `${windowHeight}px`}}>
      <Container>{children}</Container>
    </div>
  )
}