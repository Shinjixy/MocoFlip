import React from "react";
import FormTestimoni from "../components/form-testimoni";
import { Container} from "react-bootstrap";

function TestimoniPage() {
    return (
        <Container fluid style={{
            backgroundColor: '#1B232E'
          }}>
            <FormTestimoni/>
        </Container>
    )
}

export default TestimoniPage;