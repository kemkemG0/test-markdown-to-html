import InputMarkdown from './components/InputMarkdown';
import OutputHTML from './components/OutputHtml';
import styled from 'styled-components';
import { useState } from 'react';
import { marked } from 'marked';

function App() {
  const [markdown, setMarkdown] = useState("")
  return (
    <div className="App">
      <Container>
        <Left>
          <InputMarkdown setMarkdown = {setMarkdown}/>
        </Left>
        <Right>
          <OutputHTML html = {marked.parse(markdown)}></OutputHTML>
        </Right>
      </Container>
    </div>
  );
}

export default App;



const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  height:100vh;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
  border-right: 1px dotted black;
  flex:0.5;
`;
const Right = styled.div`
  display: flex;
  height:100vh;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
  border-right: 1px dotted black;
  flex:0.5;
`;