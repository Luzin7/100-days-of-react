import { StyledButton } from "./components/Button.style";
import { Wrapper } from "./components/Wrapper.style";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(true);
  return (
    <div className="App">
      <Wrapper>
        {showText ? (
          <h1>Using Styled Components...</h1>
        ) : (
          <h1>Life can be easy!</h1>
        )}
        <StyledButton onClick={() => setShowText(!showText)}>
          Click here
        </StyledButton>
      </Wrapper>
    </div>
  );
}

export default App;
