import {Container, Navbar} from 'react-bootstrap';

function Header() {
    let HeaderBox = {
        marginBottom: "50px"
    }
          
    let HeaderDiv = {
        padding: "3% 8%",
        margin: "0",
        height: "auto",
        backgroundColor: "#eeeeee",
        fontSize: "1rem",
        textDecoration: "none",
        textAlign: "right",
        color: "#eeeeee"
    }

    return (
      <Navbar className="bg-body-tertiary" style={HeaderBox}>
        <Container fluid style={HeaderDiv}>
          <Navbar.Brand>
            <img
              alt=""
              src={
                "https://picsum.photos/id/" +
                Math.floor(Math.random() * 150) +
                "/30/30"
              }
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            PASSWORD LEET GENERATOR
          </Navbar.Brand>
        </Container>
      </Navbar>
      // <div style={bottomBox}>
      //     <Container fluid style={bottomDiv}>
      //         <Row style={{textAlign: "center"}}>
      //         </Row>
      //         <Row>

      //         </Row>
      //         <Row>
      //             <Col></Col>
      //             <Col>© 2023 David John.</Col>
      //             <Col></Col>
      //         </Row>
      //     </Container>
      // </div>
    );
}

export default Header;