import { ExtensionStore, RenderContext } from 'es-extensions-api';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
import logo from './logo.svg';

type Context = RenderContext & {
  index: number
}

function extensionA(context: Context) {
  ReactDOM.render(<p>ExtensionA - index {context.index}</p>, context.container);
}

ExtensionStore.getInstance().register("test.ext", extensionA);
class App extends React.Component {
  public render() {
    const extensions = ExtensionStore.getInstance().getExtensions<Context>("test.ext");
    extensions.keys()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          This is content
          <div> 
            {extensions.map((extension, index) => {
              return <div key={"key-"+index} ref={(container) => container && extension({container, index})} />
            })}
          </div>
        </div >    
      </div>
    );
  }
}

export default App;
