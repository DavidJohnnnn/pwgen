import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
    let bottomBox = {
        marginTop: "100px",
        verticalAlign: "bottom",
        color: "#eeeeee"
    }
          
    let bottomDiv = {
        padding: "3% 8%",
        margin: "0",
        height: "auto",
        backgroundColor: "#222831",
        fontSize: "1rem",
        textDecoration: "none",
        textAlign: "right",
        color: "#eeeeee"
    }

    return (
        <div className={bottomBox}>
            <Container fluid className={bottomDiv}>
                <Row style={{textAlign: "center"}}>
                </Row>
                <Row>

                </Row>
                <Row>
                    <Col></Col>
                    <Col>© 2023 David John.</Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;