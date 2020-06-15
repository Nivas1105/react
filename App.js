import React,{ Component }  from 'react';
import Form from "./Form";


class App extends Component {
  

  onSubmit = fields => {
    console.log('app:',fields);
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={fields => this.onSubmit(fields)} />
       
      </div>
    );
  }
}

export default App;