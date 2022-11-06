import * as React from "react";
import * as ReactDOM from "react-dom/client";

class NavComponent extends React.Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <a href="#">О НАС</a>
          </li>
          <li>
            <a href="#">НОВОСТИ</a>
          </li>
          <li>
            <a href="#">МЕНЮ</a>
          </li>
          <li>
            <a href="#">КОНТАКТЫ</a>
          </li>
        </ul>
      </>
    );
  }
}

function init() {
  const mount = document.getElementById("app");
  const root = ReactDOM.createRoot(mount);
  root.render(<NavComponent />);
}

if (document.readyState === "interactive") {
  init();
} else {
  document.addEventListener("DOMContentLoaded", init);
}
