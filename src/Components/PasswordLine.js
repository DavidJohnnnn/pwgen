import { Card, ProgressBar } from 'react-bootstrap';



export default function PasswordLine() {
  // Includes progress bar to judge whether the password is decent or not.
  // The 'now' and 'variant' and 'label' will be based on a function that is checks whether the generated password is actually strong enough.

  let pwLine = {
    fontFamily: `"Lucida Console","Courier New",Monaco,"Nimbus Mono L",monospace`,
  };
  return (
    <>
      <Card>
        <Card.Body style={pwLine}>
          <Card.Title>Placeholder text for generated password.</Card.Title>
        </Card.Body>
        <ProgressBar now={60} variant="warning" label={"Not strong enough"} />
      </Card>
    </>
  );
}