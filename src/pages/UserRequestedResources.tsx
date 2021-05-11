import { Container } from "react-bootstrap";
import RequestedResources from "../components/RequestedResources";

const UserRequestedResources = () => {
  return (
    <Container fluid className="page-header">
      <RequestedResources />
    </Container>
  );
};

export default UserRequestedResources;
