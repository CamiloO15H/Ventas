import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { FormControl, Nav, Navbar, NavDropdown, Breadcrumb, Form, Card, CardGroup, Table, Container, Row, Col } from 'react-bootstrap'
import Button from '@restart/ui/esm/Button';

function App() {
  return (
    <div className="App">
        <Navbar bg="light" variant="light"
          sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src={logo} width="40px" height="40px" />{' '}
            MintickVentas
          </Navbar.Brand>
          <Navbar.Toggle className="coloring" />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Productos">
                <NavDropdown.Item href="#products/tea">Cuota</NavDropdown.Item>
                <NavDropdown.Item href="#products/coffee">Deudas</NavDropdown.Item>
                <NavDropdown.Item href="#products/chocolate">Asesorias</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#blog">Precio</Nav.Link>
              <Nav.Link href="#contact-us">Contactanos</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary">Search</Button>{' '}
            </Form>
          </Navbar.Collapse>
        </Navbar>

 
      <div className="contenido">
      <Form.Select aria-label="Default select example">
        <option>Barra de herramientas</option>
        <option value="1">Sesion de venta</option>
        <option value="2">Sesion de compra</option>
      </Form.Select>
      </div>
      
    
      <div className="contenido_0">
        <CardGroup>
              <Col>
                    <Card>
                      <Card.Img variant="top"/>
                      <Card.Body>
                          <Card.Title variant>$9,705.00</Card.Title>
                          <Card.Title><Button variant="third" size="sm">
                              Aceptar y seguir
                            </Button></Card.Title>
                          <Card.Title><small className="text-muted">
                              <Button variant="third" size="sm">
                                Descargar
                              </Button>{' '}
                              <Button variant="third" size="sm">
                                imprimir
                              </Button>
                              </small></Card.Title>
                        <Card.Text>
                          <CardGroup>
                            <Card>
                              <Card.Img variant="top0"/>
                              <Card.Body variant>
                                <Card.Title>
                                  <Breadcrumb>
                                    <Breadcrumb.Item href="#">S0O18</Breadcrumb.Item>
                                  </Breadcrumb></Card.Title>
                                <Card.Title><Breadcrumb>
                                    <Breadcrumb.Item href="#">Detalles</Breadcrumb.Item>
                                  </Breadcrumb></Card.Title>
                                <Card.Title><Breadcrumb>
                                    <Breadcrumb.Item href="#">Comunicacion</Breadcrumb.Item>
                                  </Breadcrumb></Card.Title>  
                              </Card.Body>
                            </Card>
                          </CardGroup>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer>
                  <CardGroup>
                  <Card>
                    <Card.Img variant="top"/>
                    <Card.Body>
                      <Card.Title>Your Name</Card.Title>
                      <Card.Text>
                        Your number
                      </Card.Text>
                      <Card.Text>
                      <Breadcrumb>
                                    <Breadcrumb.Item href="#">Enviar Mensaje</Breadcrumb.Item>
                                  </Breadcrumb>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                        </CardGroup>
                    </Card.Footer>
                  </Card>
            </Col>


            <Col>
                <Card>
                  <Card.Img variant="top"/>
                  <Card.Body>
                    <Card.Title>FACTURA</Card.Title>
                    <Card.Text>
                    <CardGroup>
                <Card>
                  <Card.Img variant="top"/>
                  <Card.Body>
                    <Card.Title>Fecha: 12/10/2021</Card.Title>
                    <Card.Title>Direccion de facturacion</Card.Title>
                    <Card.Text>
                      Direccion: Cra99c #48b 40 San Javier blas de lezo segunda etapa bloque 8 apto 101
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>{' '}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted"><Table responsive="sm">
                <thead>
                  <tr>
                    <th>DETALLES</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th>Productos</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Monto</th>
                    <th>IVA</th>\
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Paneles</td>
                    <td>3.000</td>
                    <td>$2,950.00</td>
                    <td></td>
                    <td>$8,850.00</td>
                  </tr>
                  <tr>
                  <td>Cable Electrico</td>
                    <td>5.000</td>
                    <td>$145.00</td>
                    <td></td>
                    <td>$725.00</td>
                  </tr>
                  <tr>
                  <td>Paneles</td>
                    <td>3.000</td>
                    <td>$2,950.00</td>
                    <td></td>
                    <td>$8,850.00</td>
                  </tr>
                </tbody>
              </Table></small>
                  </Card.Footer>
                </Card>
          </Col>
      </CardGroup>
      </div>
      
      <div className="mb-2">
        <Button variant="primary" size="sm">
          Aceptar Y seguir
        </Button>{' '}
        <Button variant="secundary" size="sm">
          Contactanos
        </Button>{' '}
        <Button variant="third" size="sm">
          Rechazar
        </Button>
      </div>
      

      
    </div>
  );
}

export default App;
