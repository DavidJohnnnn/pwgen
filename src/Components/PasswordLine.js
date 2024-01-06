import { Card, ProgressBar } from 'react-bootstrap';



export default function PasswordLine({pwLength}) {
  // Includes progress bar to judge whether the password is decent or not.
  // The 'now' and 'variant' and 'label' will be based on a function that is checks whether the generated password is actually strong enough.

  let pwLine = {
    fontFamily: `"Lucida Console","Courier New",Monaco,"Nimbus Mono L",monospace`,
  };
  return (
    <>
      <Card>
        <Card.Header as="h2" style={pwLine}>
          {"********************************************************************************************************************************".slice(0, pwLength)}
        </Card.Header>
        <ProgressBar now={60} variant="warning" label={"Not strong enough"} />
      </Card>
    </>
  );
}