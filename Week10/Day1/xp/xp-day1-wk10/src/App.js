import logo from "./logo.svg";
import "./App.css";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";
function App() {
  return (
    <div>
      {/* <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary> */}
      {/* <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter/>
      </ErrorBoundary> */}
      {/* <BuggyCounter />
      <BuggyCounter /> */}
    </div>
  );
}

export default App;
