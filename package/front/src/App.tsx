import "./App.css";
import { useState } from "react";
import { CommonButton, CommonInput } from "@monorepo/common";

function App() {
  const [text, setText] = useState("");
  return (
    <>
      <div>hi22!</div>
      <CommonButton>버튼</CommonButton>
      <CommonInput value={text} setValue={setText} />
    </>
  );
}

export default App;
