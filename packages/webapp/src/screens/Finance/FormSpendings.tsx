import React from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const FormSpendings = () => {
  // Handler for form submission
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Add logic to handle form data
    console.log("Form submitted");
  };

  return (
    <Container className={"p-sm-4"}>
      <h2 className="mb-5">Spending Request Form</h2>
      <Form onSubmit={handleSubmit} className="form-style">
        <FormGroup>
          <Label htmlFor="title">Title</Label>
          <br />
          <Input type="text" id="title" name="title" required />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Reason for Spending:</Label>
          <br />
          <Input
            type={"textarea"}
            id="description"
            name="description"
            className="form-textarea"
            required
            maxLength={500}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="fileUpload">Upload File (photo or PDF):</Label>
          <br />
          <Input type="file" id="fileUpload" name="fileUpload" required />
        </FormGroup>

        <Button type="submit" className="submit-button">
          Submit Request
        </Button>
      </Form>
    </Container>
  );
};
export default FormSpendings;
