import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface TopPanelType{
  onLogoutClick : any;
}

function TopPanel({onLogoutClick} : TopPanelType) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-0">
            <NavDropdown title="File" id="basic-nav-dropdown">
              <NavDropdown.Item>Open</NavDropdown.Item>
              <NavDropdown.Item>New File</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={onLogoutClick}>Logout</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Edit" id="basic-nav-dropdown">
              <NavDropdown.Item></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="View" id="basic-nav-dropdown">
              <NavDropdown.Item></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Help" id="basic-nav-dropdown">
              <NavDropdown.Item></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopPanel;