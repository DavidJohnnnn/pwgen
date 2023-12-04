import Home from './Components/Home';
import Footer from './Components/Footer';
import Container from 'react-bootstrap/Container';
import Header from './Components/Header';

function App() {
  let app = {
    backgroundImage: "#eeeeee",
    textAlign: "center",
    fontFamily: `"Work Sans", sans-serif`,
    margin: "auto",
    maxWidth: "100%"
  }

  return (
    <Container style={app} fluid>
      <Header />
      <Home />
      
      <br />
      <br />
      <Footer />
    </Container>
  );
}

export default App;
