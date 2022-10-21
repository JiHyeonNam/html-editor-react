import { DraftWysiwyg, CkComp, Jodit, Demo } from "./component/Editor";
import styled, { css } from "styled-components";
import "./App.css";

function App() {
  return (
    <Main className="App">
      <EditorWrapper>
        <DraftWysiwyg />
      </EditorWrapper>
      <EditorWrapper>
        <Jodit />
      </EditorWrapper>
      <EditorWrapper>
        <CkComp />
      </EditorWrapper>
    </Main>
  );
}
const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const EditorWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: auto;
`;
export default App;
