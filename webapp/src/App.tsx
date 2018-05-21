import { ExtensionStore, RenderContext } from 'es-extensions-api';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';

type Context = RenderContext & {
  index: number
}

function extensionA(context: Context) {
  ReactDOM.render(<p>ExtensionA - index {context.index}</p>, context.container);
}

function extensionC(context: RenderContext) {
  ReactDOM.render(<p>ExtensionC</p>, context.container);
}

ExtensionStore.getInstance().register("extB", extensionC);
ExtensionStore.getInstance().register("test.ext", extensionA);

class App extends React.Component {
  public render() {
    const extensions = ExtensionStore.getInstance().getExtensions<Context>("test.ext");
    return (
      <div className="App">
        <p>App Extension Point "test.ext"</p>
        <div className="App_ext"> 
          {extensions.map((extension, index) => {
            return <div className="extdiv" key={"key-"+index} ref={(container) => container && extension({container, index})} />
          })}
        </div >    
      </div>
    );
  }
}

export default App;
