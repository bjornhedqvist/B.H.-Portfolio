import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App h-100 cover-container d-flex w-100  p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start">Bjorn Hedqvist</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a
              className="nav-link fw-bold py-1 px-0 active"
              aria-current="page"
              href="#"
            >
              text
            </a>
            <a className="nav-link fw-bold py-1 px-0" href="#">
              text
            </a>
            <a className="nav-link fw-bold py-1 px-0" href="#">
              text
            </a>
          </nav>
        </div>
      </header>

      <main className="px-3 mx-auto">
        <h1>text</h1>
        <p className="lead">
          text
        </p>
        <p className="lead">
          <a
            href="#"
            className="btn btn-lg btn-light fw-bold border-white bg-white"
          >
            text
          </a>
        </p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>
          text{" "} 
          <a href="https://getbootstrap.com/" className="text-white">
            link
          </a>
          , text{" "}
          <a href="https://twitter.com/mdo" className="text-white">
            @link
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
