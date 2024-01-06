import {Card, Form, InputGroup, Button } from 'react-bootstrap';

export default function PasswordInput ({pwLength}) {
  
  return (
    <>
      <Card body>
        <InputGroup size="lg" className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default">
            Enter Desired Passphrase Here
          </InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            maxLength={pwLength}
          />
          <br />
        </InputGroup>
        Hint: When coming up with a passphrase, make sure it is both memorable
        and unique! Don't use common sayings (ex. c'est la vie), instead use
        phrases that while being memorable to you are nonsensical (ex. Coin Ring
        Costanza Bonanza)
        <div className="d-grid gap-2">
          <Button variant="outline-secondary" size="lg" type="submit">
            Generate Password
          </Button>
        </div>
      </Card>
    </>
  );
}
