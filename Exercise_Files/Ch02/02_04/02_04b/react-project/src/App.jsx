import "./App.css";

function Header({name, year, year_now}) {
  return (
    <header>
      <h1> {name} is cooking </h1>
      <p>Operating since {year}. Current year {year_now}</p>
    </header>
  )
}

function App() {
  return (
  <div>
    <Header name="The Team" year={2024} year_now={new Date().getFullYear()} />
    <main>
      <h2> Ask about our Agent menu . </h2>
    </main>
    </div>
  )
  ;
}

export default App;
