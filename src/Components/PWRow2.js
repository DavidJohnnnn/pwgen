import {Card, Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

export default function PasswordSelectors() {
  // First col: slider for password length
  // Second col: Specifiers for generated passwords (radio buttons; note that name is what makes radio buttons select only one element)
  // Third col: Checkbox list for whether the user wants uppercase, lowercase, numbers and special characters
  return (
    <Card>
      <Row>
        <Col>
          <PasswordLengthSlider />
        </Col>
        <Col>
          <PasswordRadioButtons />
        </Col>
        <Col>
          <PasswordCheckboxes />
        </Col>
      </Row>
    </Card>
  );
}

function PasswordLengthSlider ({slider}) {
  const [sliderValue, setSliderValue] = useState("24");
  const sliderTemp = (val) => {
    setSliderValue(val);
  }
  return (
    <Form.Group as={Row}>
      <Form.Label>Password Length</Form.Label>
      <Col>
        <Form.Control type="number" placeholder={sliderValue} max={128} min={8} value={sliderValue} onChange={(event) => {
          console.log(event);
          sliderTemp(event.target.value);
        }}/>
        {/* <Form.Control>{sliderValue}</Form.Control> */}
      </Col>
      <Col xs={9}>
        <Form.Range
          variant="success"
          min={8}
          max={128}
          defaultValue={24}
          value={sliderValue}
          onChange={(event) => {
            sliderTemp(event.target.value);
          }}
        />
      </Col>
    </Form.Group>
  );
}

function PasswordRadioButtons () {
    return (
      <Card>
        <Form>
          <div key="radio">
            <Form.Check // prettier-ignore
              type="radio"
              id="radio-1"
              label="Example pw radio"
              name="pwrad"
            />
            <Form.Check // prettier-ignore
              type="radio"
              id="radio-2"
              label="Example pw radio"
              name="pwrad"
            />
            <Form.Check // prettier-ignore
              type="radio"
              id="radio-3"
              label="Example pw radio"
              name="pwrad"
            />
          </div>
        </Form>
      </Card>
    );
}

function PasswordCheckboxes () {
  return (
    <Card>
      <Form>
        <div key="checkbox">
          <Form.Check
            type="checkbox"
            id="checkbox-1"
            label="Uppercase"
            name="pwchk"
          />
          <Form.Check
            type="checkbox"
            id="checkbox-2"
            label="Lowercase"
            name="pwchk"
          />
          <Form.Check
            type="checkbox"
            id="checkbox-3"
            label="Numbers"
            name="pwchk"
          />
          <Form.Check
            type="checkbox"
            id="checkbox-4"
            label="Special characters"
            name="pwchk"
          />
        </div>
      </Form>
    </Card>
  );
}

 