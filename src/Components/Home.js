import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack, Card } from 'react-bootstrap';


function Home() {
  let page = {
    backgroundImage: "#eeeeee",
    textAlign: "center",
    fontFamily: `"Work Sans", sans-serif`,
    margin: "auto",
    maxWidth: "100%"
  }

  // First div in the stack will be the line where the password that is generated will show up as well as a refresh button to redo the password based on the entered parameters.
  function PasswordLine() {
    return (
      <>
        <Card>
          <Card.Body>Placeholder text for generated password.</Card.Body>
        </Card>
      </>
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
