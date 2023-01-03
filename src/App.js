import styled from "styled-components";
import Menu from "./bilesenler/Menu";
import Navbar from "./bilesenler/Navbar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;

const Wrapper = styled.div``;
function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>Videolar</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
