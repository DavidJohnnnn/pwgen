import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Stack, Form} from 'react-bootstrap';
import PasswordLine from './PasswordLine';
import PasswordSelectors from './PWRow2';
import PasswordInput from './PWRow3';

function Home() {
  let page = {
    backgroundImage: "#eeeeee",
    textAlign: "center",
    fontFamily: `"Work Sans", sans-serif`,
    margin: "auto",
    maxWidth: "70%"
  }

  // First item in the stack will be the line where the password that is generated will show up as well as a refresh button to redo the password based on the entered parameters.

  // Second item in stack will include input text field which captures the users intended memorable phrase that will be leeted. The memorable phrase should be matched against the pwnedpassword api: https://haveibeenpwned.com/Passwords


  return (
    <Container style={page} fluid>
      <Form>
        <Stack gap={3}>
          <PasswordLine />
          <PasswordSelectors />
          <PasswordInput />
        </Stack>
      </Form>
      <br />
      <br />
    </Container>
  );
}

export default Home;
