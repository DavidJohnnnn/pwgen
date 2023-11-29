import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  let app = {
    backgroundImage: "#eeeeee",
    textAlign: "center",
    fontFamily: `"Work Sans", sans-serif`,
    margin: "auto",
    maxWidth: "100%"
  }

  return (
    <Container className={app} fluid>
      <Home />
      
      <br />
      <br />
      <Footer />
    </Container>
  );
}

export default App;
