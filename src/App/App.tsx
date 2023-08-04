import SlothForm from "../SlothForm/SlothForm";
import "./App.css";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <h1 className="title-app">Sloths</h1>
      <SlothForm />
    </div>
  );
};

export default App;
