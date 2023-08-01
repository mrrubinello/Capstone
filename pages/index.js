import Heading from "../components/Heading";
import Liste from "../components/Liste";
import Link from "next/link";
import { ButtonDiv, MainButtonStyle } from "../components/Liste/styles";

export default function Home({ listItems, setListItems }) {
  console.log(listItems);
  return (
    <main>
      <Heading>🏄‍♂️🏄‍♀️🏄 Ruben´s App 🏄🏄‍♀️🏄‍♂️</Heading>
      <Liste listItems={listItems} />
      <ButtonDiv>
        <MainButtonStyle>
          <Link href="/list"> + </Link>
        </MainButtonStyle>
      </ButtonDiv>
    </main>
  );
}
