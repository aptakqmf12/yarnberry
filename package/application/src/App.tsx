import "./App.css";
import { CommonButton } from "@monorepo/common";
import Layout from "./components/layout";
import styled from "styled-components";

function App() {
  return (
    <Layout>
      <div.wrap>
        <CommonButton type="primary">여긴 앱입니다</CommonButton>
      </div.wrap>
    </Layout>
  );
}

const div = {
  wrap: styled.div`
    width: 500px;
    background-color: red;
  `,
};

export default App;
