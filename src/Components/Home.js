import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack, Card, Row, Col, Form, ProgressBar } from 'react-bootstrap';


function Home() {
  let page = {
    backgroundImage: "#eeeeee",
    textAlign: "center",
    fontFamily: `"Work Sans", sans-serif`,
    margin: "auto",
    maxWidth: "70%"
  }

  // First div in the stack will be the line where the password that is generated will show up as well as a refresh button to redo the password based on the entered parameters.
  function PasswordLine() {
    // Includes progress bar to judge whether the password is decent or not.
    // The 'now' and 'variant' and 'label' will be based on a function that is checks whether the generated password is actually strong enough.

    let pwLine = {
      fontFamily: `"Lucida Console","Courier New",Monaco,"Nimbus Mono L",monospace`,
    }
    return (
      <>
        <Card>
          <Card.Body style={pwLine}>
            <Card.Title>Placeholder text for generated password.</Card.Title>
          </Card.Body>
          <ProgressBar now={60} variant="warning" label={'Not strong enough'}/>
        </Card>
      </>
    );
  }

  // Second item in stack will include input text field which captures the users intended memorable phrase that will be leeted. The memorable phrase should be matched against the pwnedpassword api: https://haveibeenpwned.com/Passwords

  function PasswordSelectors() {
    // First col: slider for password length
    // Second col: Specifiers for generated passwords
    // Third col: Checkbox list for whether the user wants uppercase, lowercase, numbers and special characters
    return (
      <Card>
        <Row>
          <Col>

          </Col>
        </Row>
      </Card>
    );
  }


  return (
    <Container style={page} fluid>
      <Stack gap={3}>
        <PasswordLine />
        <div className="p-2">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>
      <br />
      <br />
    </Container>
  );
}

export default Home;
