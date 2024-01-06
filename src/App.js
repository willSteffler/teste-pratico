import React from "react"
import GlobalStyle from './styles/global'
import Header from './components/Header/index'
import Resume from './components/Resume/index'

function App() {
  return (
    <div className="App">
      <Header />
      <Resume />
      <GlobalStyle />
    </div>
  );
}

export default App;
