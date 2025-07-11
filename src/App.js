import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className ="navbar">
      <h1>About</h1>
    </div>

    {/* about section */}
    <div className = "aboutcontainer">
      <div className= "abouttext">
        <p>Welcome to Shashanth Stack — a place where I share my daily work, learning progress, and proof of what I've built.</p>
      </div>
    </div>

    {/* daily work section */}
    <div className = "navbar dailywork">
      <h1>Daily Work</h1>
    </div>
    {/* now 3 containers in one section and another three in down section */}
    <div className = "containersection">
      <div className= "firstrow">
        <div className="container">
          <h1>container1</h1>
        </div>
        <div className="container">
          <h1>container2</h1>
        </div>
        <div className="container">
          <h1>container3</h1>
        </div>
      </div>
      <div className= "secondrow">
        <div className="container">
          <h1>container1</h1>
        </div>
        <div className="container">
          <h1>container2</h1>
        </div>
        <div className="container">
          <h1>container3</h1>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
