import { Provider } from "react-redux";
import { store } from "./data/modules/redux/store";
import RootRouter from "./router/rootRouter";
import { GlobalStyle } from "./styles/GlobalStyle";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RootRouter />
      <Counter/>
    </Provider>
  );
}

export default App;
