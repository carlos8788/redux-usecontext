import './App.css'
import Component1 from './components/RxJS/Component1'
import Component2 from './components/RxJS/Component2'
import Gentleman from './pages/Gentleman/Gentleman'
import { Provider } from 'react-redux';
import store from './redux/store';
import ComponentRedux2 from './pages/Gentleman/components/ComponentRedux2';
import ComponentRedux1 from './components/Redux/ComponentRedux1';

function App() {

  return (
    <>
      <Provider store={store}>
        <h2>RxJS</h2>
        <Component1 />
        <Component2 />
        <h2>Context</h2>
        <Gentleman />
        <h2>Redux</h2>
        <ComponentRedux1 />
        <ComponentRedux2 />
      </Provider>
    </>
  )
}

export default App
