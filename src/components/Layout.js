import {Container} from "react-bootstrap";

export const Layout = ({children}) => {

  return (
    <div className='Layout'>
      <Container>{children}</Container>
    </div>
  )
}