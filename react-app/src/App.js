import User from "./components/User";


function App() {
  return (
    <div className="App">
     <User name={'Ayhan'} situation={'online'}/>
     <User name={'Ahmet'} situation={'online'}/>
     <User name={'Kemal'} situation={'online'}/>
    </div>
  );
}

export default App;
