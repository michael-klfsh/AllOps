import React, { Component } from "react";
import "reflect-metadata";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppRouter } from "./app/AppRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRoot } from "react-dom/client";

class Root extends Component {
  render() {
    return (
      <React.StrictMode>
        <div className={"h-100"}>
          <BrowserRouter>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              draggable
              pauseOnHover
              theme="colored"
              pauseOnFocusLoss
            />
            <AppRouter />
          </BrowserRouter>
        </div>
      </React.StrictMode>
    );
  }
}

export default Root;
const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Root />);

// render(<Root />, document.getElementById("root"));

// if (module.hot) {
//   // https://github.com/webpack/webpack/issues/418#issuecomment-53398056
//   module.hot.accept((err) => {
//     if (err) console.error(err.message); // eslint-disable-line no-console
//   });
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
