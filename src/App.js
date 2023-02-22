import './App.css';
import Memo from './useMemo/Memo';
import ParentComp from './useCallback/ParentComp';
import Lifting from './Lifting/ParentComp';
import UseRef from './useRef/useRef';

function App() {

  return (
    <div className="App">
     HOOKS
     <Lifting/>
    </div>
  );
  
}

export default App;
