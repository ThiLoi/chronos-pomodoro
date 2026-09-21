import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Heading } from "./components/heading";

export function App() {
  console.log("Oi");

  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}
