import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';

function Home() {
  let page = {
    backgroundImage: "#eeeeee",
    textAlign: center,
    fontFamily: `"Work Sans", sans-serif`,
    margin: "auto",
    maxWidth: "100%"
  }
  return (
    <Container className={page} fluid>

      <br />
      <br />

    </Container>
  );
}

export default Home;
