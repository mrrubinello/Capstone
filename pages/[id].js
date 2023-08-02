import { useRouter } from "next/router";

export default function Detailspage({ listItems, setListItems }) {
  const router = useRouter();
  const { id } = router.query;
  const listItem = listItems.find((item) => item.id === id);
  function löschenbutton() {
    setListItems(listItems.filter((item) => item.id !== id));
    router.push("/");
  }

  return (
    <>
      {" "}
      <h2>{listItem?.text}</h2>
      <button onClick={löschenbutton}>delete</button>
    </>
  );
}
