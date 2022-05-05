import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App  from "./App";
import { store } from "./store";
import "./index.css";
import { StrictMode } from "react";

render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
    
  </Provider>,
  
  document.getElementById("root")
);
