import logo from "./logo.svg";
import bjorn from "./bjorn.png";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App h-100 cover-container d-flex w-100  p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3
          // className="float-md-start"
          >
            Björn Hedqvist
          </h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            {/* <a
              className="nav-link fw-bold py-1 px-0 active"
              aria-current="page"
              href="/"
            >
              Home
            </a> */}
            {/* <a className="nav-link fw-bold py-1 px-0" href="#">
              Projects
            </a> */}
            {/* <a className="nav-link fw-bold py-1 px-0" href="/skills">
              Skills & Languages
            </a> */}
            {/* <a className="nav-link fw-bold py-1 px-0" href="#">
              About Me
            </a> */}
          </nav>
        </div>
      </header>

      <main className="paralaxText mb-0 mx-auto ">
        {/* <br></br> */}
        <div className="paralaxText">
          <img
            src={bjorn}
            style={{ width: "33%" }}
            className="img-fluid mt-0 mb-4 rounded-circle mx-auto h-25 d-inline-block"
            alt="Bjorn"
          />
          <h1>Frontend Software Developer</h1>
          <p className="lead">JavaScript • React • HTML • CSS • Bootstrap</p>
          <p className="lead d-grid gap-2 d-md-flex justify-content-md-center">
            <a
              href="mailto:bjornhedqvist22@gmail.com"
              className="btn btn-lg btn-light fw-bold border-white bs-light-bg-subtle"
            >
              Contact Me
            </a>
          </p>
          <p className="lead d-grid gap-2 d-md-flex justify-content-md-center">
            <Link
              type="button"
              to="https://github.com/bjornhedqvist"
              className="btn btn-lg btn-outline-secondary fw-bold bs-light-bg-subtle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
            <Link
              type="button"
              to="https://www.linkedin.com/in/bjorn-hedqvist"
              className="btn btn-lg btn-outline-primary fw-bold bs-primary-bg-subtle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </Link>
          </p>
          <br></br>
          <div>
            <h2
              id="skills-and-languages"
              // className="text-blue-900 dark:text-blue-300 text-3xl font-bold text-center pt-0 my-10"
              className="text-info-emphasis"
            >
              Skills and Languages
            </h2>
            <p className="lead d-grid gap-2 d-md-flex justify-content-md-center">
              <Link
                type="button"
                to="https://www.javascript.com/"
                className="btn btn-lg btn-outline-warning fw-bold bs-light-bg-subtle"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 32 32"
                  // className="btn btn-lg btn-outline fw-bold bs-light-bg-subtle"
                  className="text-blue-700 dark:text-blue-500 drop-shadow-lg mx-2 text-5xl"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.633 7.968h3.751v10.514c0 4.738-2.271 6.392-5.899 6.392-0.888 0-2.024-0.148-2.764-0.395l0.42-3.036c0.518 0.173 1.185 0.296 1.925 0.296 1.58 0 2.567-0.716 2.567-3.282v-10.489zM16.641 20.753c0.987 0.518 2.567 1.037 4.171 1.037 1.728 0 2.641-0.716 2.641-1.826 0-1.012-0.79-1.629-2.789-2.32-2.764-0.987-4.59-2.517-4.59-4.961 0-2.838 2.394-4.985 6.293-4.985 1.9 0 3.258 0.37 4.245 0.839l-0.839 3.011c-0.642-0.321-1.851-0.79-3.455-0.79-1.629 0-2.419 0.765-2.419 1.604 0 1.061 0.913 1.53 3.085 2.369 2.937 1.086 4.294 2.616 4.294 4.985 0 2.789-2.122 5.158-6.688 5.158-1.9 0-3.776-0.518-4.714-1.037l0.765-3.085z"></path>
                </svg>
                Javascript
              </Link>
              <Link
                type="button"
                to="https://react.dev/"
                className="btn btn-lg btn-outline-info fw-bold bs-light-bg-subtle"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 34 32"
                  class="text-blue-700 dark:text-blue-500 drop-shadow-lg mx-2 text-5xl"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.314 15.987c0 1.321-1.071 2.392-2.392 2.392s-2.392-1.071-2.392-2.392c0-1.321 1.071-2.392 2.392-2.392s2.392 1.071 2.392 2.392z"></path>
                  <path d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906 0.489 0 0.952-0.103 1.337-0.334 1.337-0.772 1.826-2.701 1.363-5.453-0.077-0.489-0.18-0.977-0.309-1.492 0.514-0.154 0.977-0.309 1.44-0.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-0.463-0.18-0.926-0.334-1.44-0.463 0.129-0.514 0.232-1.003 0.309-1.492 0.437-2.803-0.051-4.758-1.389-5.53-0.386-0.231-0.849-0.334-1.337-0.334-1.466 0-3.344 1.080-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-0.489 0-0.952 0.103-1.337 0.334-1.337 0.772-1.826 2.701-1.363 5.453 0.077 0.489 0.18 0.977 0.309 1.492-0.514 0.154-0.977 0.309-1.44 0.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909 0.463 0.18 0.926 0.334 1.44 0.463-0.129 0.514-0.232 1.003-0.309 1.492-0.437 2.752 0.051 4.707 1.363 5.453 0.386 0.232 0.849 0.334 1.337 0.334 1.492 0.051 3.344-1.029 5.221-2.829v0zM15.481 21.311c0.463 0.026 0.952 0.026 1.44 0.026s0.977 0 1.44-0.026c-0.463 0.617-0.952 1.183-1.44 1.723-0.489-0.54-0.977-1.106-1.44-1.723zM12.292 18.662c0.257 0.437 0.489 0.849 0.772 1.26-0.797-0.103-1.543-0.232-2.263-0.386 0.232-0.694 0.489-1.415 0.797-2.135 0.206 0.411 0.437 0.849 0.694 1.26zM10.8 12.463c0.72-0.154 1.466-0.283 2.263-0.386-0.257 0.412-0.514 0.823-0.772 1.26s-0.489 0.849-0.694 1.286c-0.334-0.746-0.592-1.466-0.797-2.161zM12.215 15.987c0.334-0.694 0.694-1.389 1.106-2.083 0.386-0.669 0.823-1.337 1.26-2.006 0.772-0.051 1.543-0.077 2.341-0.077 0.823 0 1.595 0.026 2.341 0.077 0.463 0.669 0.874 1.337 1.26 2.006 0.412 0.694 0.772 1.389 1.106 2.083-0.334 0.694-0.694 1.389-1.106 2.083-0.386 0.669-0.823 1.337-1.26 2.006-0.772 0.051-1.543 0.077-2.341 0.077-0.823 0-1.595-0.026-2.341-0.077-0.463-0.669-0.874-1.337-1.26-2.006-0.412-0.695-0.772-1.389-1.106-2.083v0zM22.272 14.598l-0.694-1.286c-0.257-0.437-0.489-0.849-0.772-1.26 0.797 0.103 1.543 0.232 2.263 0.386-0.231 0.72-0.489 1.44-0.797 2.161v0zM22.272 17.376c0.309 0.72 0.566 1.44 0.797 2.135-0.72 0.154-1.466 0.283-2.263 0.386 0.257-0.412 0.514-0.823 0.772-1.26 0.232-0.386 0.463-0.823 0.694-1.26v0zM22.863 26.301c-0.206 0.129-0.463 0.18-0.746 0.18-1.26 0-2.829-1.029-4.372-2.572 0.746-0.797 1.466-1.698 2.186-2.701 1.209-0.103 2.366-0.283 3.447-0.54 0.129 0.463 0.206 0.926 0.283 1.389 0.36 2.186 0.077 3.755-0.797 4.244zM24.201 12.746c2.881 0.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-0.412 0.154-0.874 0.309-1.337 0.437-0.334-1.055-0.746-2.135-1.26-3.241 0.514-1.106 0.952-2.186 1.26-3.241v0zM22.143 5.493c0.283 0 0.514 0.051 0.746 0.18 0.849 0.489 1.157 2.032 0.797 4.244-0.077 0.437-0.18 0.9-0.283 1.389-1.080-0.232-2.238-0.412-3.447-0.54-0.694-1.003-1.44-1.903-2.186-2.701 1.543-1.518 3.112-2.572 4.372-2.572zM18.362 10.663c-0.463-0.026-0.952-0.026-1.44-0.026s-0.977 0-1.44 0.026c0.463-0.617 0.952-1.183 1.44-1.723 0.489 0.54 0.977 1.132 1.44 1.723v0zM10.98 5.673c0.206-0.129 0.463-0.18 0.746-0.18 1.26 0 2.829 1.029 4.372 2.572-0.746 0.797-1.466 1.697-2.186 2.701-1.209 0.103-2.366 0.283-3.447 0.54-0.129-0.463-0.206-0.926-0.283-1.389-0.36-2.186-0.077-3.729 0.797-4.244v0zM9.643 19.228c-2.881-0.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803 0.412-0.154 0.874-0.309 1.337-0.437 0.334 1.055 0.746 2.135 1.26 3.241-0.514 1.106-0.952 2.212-1.26 3.241zM10.183 22.057c0.077-0.437 0.18-0.9 0.283-1.389 1.080 0.232 2.238 0.412 3.447 0.54 0.694 1.003 1.44 1.903 2.186 2.701-1.543 1.517-3.112 2.572-4.372 2.572-0.283 0-0.514-0.051-0.746-0.18-0.875-0.489-1.157-2.058-0.797-4.244z"></path>
                </svg>
                React
              </Link>
              <Link
                type="button"
                to="https://html.com/"
                className="btn btn-lg btn-outline-danger fw-bold bs-light-bg-subtle"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 32 32"
                  class="text-blue-700 dark:text-blue-500 drop-shadow-lg mx-2 text-5xl"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.665 3.411l2.063 23.176 9.258 2.574 9.284-2.578 2.065-23.172h-22.671zM8.951 8.911l-0.068-0.763h7.107v2.842h-4.005l0.259 2.911h3.746v2.842h-6.341l-0.698-7.833zM22.518 14.665l-0.667 7.483-0.043 0.48-5.822 1.616-5.814-1.616-0.398-4.463h2.849l0.202 2.267 3.163 0.854 3.165-0.856 0.329-3.686h-3.485v-2.842h6.587l-0.069 0.763zM23.032 8.911l-0.129 1.441-0.057 0.639h-6.846v-2.842h7.1l-0.068 0.762z"></path>
                </svg>
                HTML5
              </Link>
              <Link
                type="button"
                to="https://www.w3.org/Style/CSS/Overview.en.html"
                className="btn btn-lg btn-outline-primary fw-bold bs-light-bg-subtle"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  viewBox="0 0 32 32"
                  class="text-blue-700 dark:text-blue-500 drop-shadow-lg mx-2 text-5xl"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path>
                </svg>
                CSS3
              </Link>
              <Link
                type="button"
                to="https://getbootstrap.com/"
                className="btn btn-lg btn-outline-secondary fw-bold bs-light-bg-subtle"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  class="text-blue-700 dark:text-blue-500 drop-shadow-lg mx-2 text-5xl"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <path d="M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"></path>
                </svg>
                Bootstrap
              </Link>
            </p>
            <p>
              {/* <Link
                type="button"
                to="https://jquery.com/"
                className="btn btn-lg btn-outline-secondary fw-bold bs-light-bg-subtle"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  class="text-blue-700 dark:text-blue-500 drop-shadow-lg mx-2 text-5xl"
                  height="2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269.037.079.078.154.118.229.023.052.049.1.077.15.013.027.031.056.047.082.026.052.054.102.081.152l.157.266c.03.049.057.097.09.146.056.094.12.187.178.281.026.04.05.078.079.117a6.368 6.368 0 0 0 .31.445c.078.107.156.211.24.315.027.038.058.076.086.115l.22.269c.028.03.055.067.084.099.098.118.202.233.306.35l.005.006a3.134 3.134 0 0 0 .425.44c.08.083.16.165.245.245l.101.097c.111.105.223.209.34.309.002 0 .003.002.005.003l.057.05c.102.089.205.178.31.26l.125.105c.085.068.174.133.26.2l.137.105c.093.07.192.139.287.207.035.025.07.05.106.073l.03.023.28.185.12.08c.148.094.294.184.44.272.041.02.084.044.123.068.108.062.22.125.329.183.06.034.122.063.184.094.075.042.153.083.234.125a.324.324 0 0 1 .056.023c.033.015.064.031.096.047.12.06.245.118.375.175.024.01.05.02.076.034.144.063.289.123.438.182.034.01.07.027.105.04.135.051.274.103.411.152l.05.018c.154.052.305.102.46.15.036.01.073.023.111.033.16.048.314.105.474.137 10.273 1.872 13.258-6.177 13.258-6.177-2.508 3.266-6.958 4.127-11.174 3.169-.156-.036-.312-.086-.47-.132a13.539 13.539 0 0 1-.567-.182l-.062-.024c-.136-.046-.267-.097-.4-.148a1.615 1.615 0 0 0-.11-.04c-.148-.06-.29-.121-.433-.184-.031-.01-.057-.024-.088-.036a23.44 23.44 0 0 1-.362-.17 1.485 1.485 0 0 1-.106-.052c-.094-.044-.188-.095-.28-.143a3.947 3.947 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187-.034-.024-.073-.044-.112-.066a15.922 15.922 0 0 1-.439-.27 2.107 2.107 0 0 1-.118-.078 6.01 6.01 0 0 1-.312-.207c-.035-.023-.067-.048-.103-.073a9.553 9.553 0 0 1-.295-.212c-.042-.034-.087-.066-.132-.1-.088-.07-.177-.135-.265-.208l-.118-.095a10.593 10.593 0 0 1-.335-.28.258.258 0 0 0-.037-.031l-.347-.316-.1-.094c-.082-.084-.166-.164-.25-.246l-.098-.1a9.081 9.081 0 0 1-.309-.323l-.015-.016c-.106-.116-.21-.235-.313-.355-.027-.03-.053-.064-.08-.097l-.227-.277a21.275 21.275 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9.111 9.111 0 0 0 .678 1.133c.23.33.484.721.793.988.107.122.223.24.344.36l.09.09c.114.11.232.217.35.325l.016.013a9.867 9.867 0 0 0 .414.342c.034.023.063.05.096.073.14.108.282.212.428.316l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.132.318.197.017.007.032.016.048.023.09.055.188.108.282.157.033.02.065.035.1.054.066.033.132.068.197.102l.032.014c.135.067.273.129.408.19.034.014.063.025.092.039.111.048.224.094.336.137.05.017.097.037.144.052.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8.04 8.04 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.192l-.206-.107-.119-.06a5.673 5.673 0 0 1-.265-.15.62.62 0 0 1-.062-.035c-.106-.066-.217-.13-.318-.198-.034-.019-.065-.042-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313-.032-.029-.063-.053-.094-.079-1.499-1.178-2.681-2.79-3.242-4.613-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46.665 1.563 2.024 2.79 3.608 3.37.065.025.128.046.196.07l.088.027c.092.03.185.063.28.084 4.381.845 5.567-2.25 5.886-2.704-1.043 1.498-2.792 1.857-4.938 1.335a4.85 4.85 0 0 1-.516-.16 6.352 6.352 0 0 1-.618-.254 6.53 6.53 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" />
                </svg>
              </Link> */}
            </p>
          </div>
        </div>
        {/* <div className="paralaxText mt-5">
        
        </div> */}
        {/* <article className="paralaxText mt-5">
          <h1 className="mb-1 pb-5">Projects</h1>
          <h2>Project</h2>
          <p>
            Gfrejkah fgjkehgkewhgkuhujkerl qhgrehugerhquogh reuwwhgukeqhguo
            reqiorhgi orqhgoreq hughreui oqhgoreq hguiorhu oqhguiro eqhguior
            huogirhe uoqghuri oeqhgure qhgurehg uirehgui orehguir ehgirehg
            jkreqhfj kfebfj kdsabfjk dshfjkhfj kr;ehjk ;hqfjks a;njds;ahfjr
            ehqfrenjrehuo rehfjrheuiq hgjkrenfj kre;hqui ghrejke;qfgjkhu
            girehjkq;fhn jkreq;hfreh qjfgknerjk;q hgfuifren jk;ghuiren
            njgfk;rheuiq gjkreqhkg
          </p>
        </article>
        <article className="paralaxText mt-5">
          <h2>Project</h2>
          <p>
            Gfrejkah fgjkehgkewhgkuhujkerl qhgrehugerhquogh reuwwhgukeqhguo
            reqiorhgi orqhgoreq hughreui oqhgoreq hguiorhu oqhguiro eqhguior
            huogirhe uoqghuri oeqhgure qhgurehg uirehgui orehguir ehgirehg
            jkreqhfj kfebfj kdsabfjk dshfjkhfj kr;ehjk ;hqfjks a;njds;ahfjr
            ehqfrenjrehuo rehfjrheuiq hgjkrenfj kre;hqui ghrejke;qfgjkhu
            girehjkq;fhn jkreq;hfreh qjfgknerjk;q hgfuifren jk;ghuiren
            njgfk;rheuiq gjkreqhkg
          </p>
        </article>
        <article className="paralaxText mt-5">
          <h2>Project</h2>
          <p>
            Gfrejkah fgjkehgkewhgkuhujkerl qhgrehugerhquoghr euwwhgukeqhguo
            reqiorhgi orqhgoreq hughreui oqhgoreq hguiorhu oqhguiro eqhguior
            huogirhe uoqghuri oeqhgure qhgurehg uirehgui orehguir ehgirehg
            jkreqhfj kfebfj kdsabfjk dshfjkhfj kr;ehjk ;hqfjks a;njds;ahfjr
            ehqfrenjrehuo rehfjrheuiq hgjkrenfj kre;hqui ghrejke;qfgjkhu
            girehjkq;fhn jkreq;hfreh qjfgknerjk;q hgfuifren jk;ghuiren
            njgfk;rheuiq gjkreqhkg
          </p>
        </article> */}
      </main>

      {/* <footer className="mt-auto text-white-50">
        <p>
          text{" "}
          <a href="#" className="text-white">
            link{" "}
          </a>
          <a href="#" className="text-white">
            @link
          </a>
          , Photograph by Solarseven, Dreamstime.
        </p>
      </footer> */}
    </div>
  );
}

export default App;
