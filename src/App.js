import { Provider } from 'react-redux';
import './App.css';
import ContextProvider from './ContextProvider';
import Page from './Page';
import Page2 from './Page2';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ContextProvider>
        <Page />
        <Page2 value={0} />
      </ContextProvider>
    </Provider>
  );
}

export default App;
