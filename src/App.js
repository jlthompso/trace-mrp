import React, {Component} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import {Container, Navbar, Nav, Form, FormControl, Button, Row, Col} from 'react-bootstrap'
import PartCreate from './components/part-create.component'
import PartEdit from './components/part-edit.component'
import PartList from './components/part-list.component'
import {InventoryNavbar, ManufacturingNavbar, UserNavbar} from './components/sidenavbar.component'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {page: 'inventory'}
  }

  render () {
    let nav
    switch (this.state.page) {
      case 'inventory':
        nav = <InventoryNavbar />
        break
      case 'manufacturing':
        nav = <ManufacturingNavbar />
        break
      case 'user':
        nav = <UserNavbar />
        break
      default:
        break
    }

    return (
      <BrowserRouter>
        <Navbar expand="lg" bg="dark" variant="dark" className="mb-2">
          <Navbar.Brand href="/">traceMRP</Navbar.Brand>
          <Nav
            className="mr-auto"
            defaultActiveKey="inventory"
            onSelect={selectedKey => {this.setState({page: selectedKey})}}
          >
            <Nav.Link as={Link} to="/inventory/parts" eventKey="inventory">Inventory</Nav.Link>
            <Nav.Link as={Link} to="/manufacturing" eventKey="manufacturing">Manufacturing</Nav.Link>
            <Nav.Link as={Link} to="/user" eventKey="user">User</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
  
        <Container fluid>
          <Row>
            <Col xs={2}>
              {nav}
            </Col>
  
            <Col>
              <Route path="/inventory/parts" exact component={PartList} />
              <Route path="/inventory/parts/edit/:id" component={PartEdit} />
              <Route path="/inventory/parts/create" component={PartCreate} />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    )
  }
}

export default App
