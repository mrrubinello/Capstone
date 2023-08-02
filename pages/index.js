import Heading from "../components/Heading";
import Liste from "../components/Liste";
import Link from "next/link";
import { ButtonDiv, MainButtonStyle } from "../components/Liste/styles";

export default function Home({ listItems, setListItems }) {
  return (
    <main>
      <Heading>🏄‍♂️🏄‍♀️🏄 Ruben´s To Do Liste 🏄🏄‍♀️🏄‍♂️</Heading>
      <Liste listItems={listItems} />
      <ButtonDiv>
        <MainButtonStyle>
          <Link href="/list"> + </Link>
        </MainButtonStyle>
      </ButtonDiv>
    </main>
  );
}
