import { useState } from "react";
import GlobalStyle from "../styles";
import Head from "next/head";

const dummyData = [
  { id: "1", text: "Water the plants" },
  { id: "2", text: "Clean the houses" },
  { id: "3", text: "collect the eggs" },
];

export default function App({ Component, pageProps }) {
  const [listItems, setListItems] = useState(dummyData);
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component
        {...pageProps}
        listItems={listItems}
        setListItems={setListItems}
      />
    </>
  );
}
