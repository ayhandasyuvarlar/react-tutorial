# React - Tutorial

### Hello everyone, I wanted to prepare a short and concise reaction-tutorial for you in this project or in this work. in components, status, status update, redux, redirect And I will offer you more. I will provide you more readmes as I progress.

## class component

```js
class Personel extends React.Component {
  state = {
    name: 'Ayhan',
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  }
  clickHandler = (e) => {
    this.setState({
      name: 'Software Developer',
    })
  }
  render() {
    const { name, array } = this.state

    return (
      <>
        <div>{name}</div>
        <div style={{ display: 'flex' }}>
          {array.map((arr, idx) => (
            <div key={idx} id={idx}>
              {arr}
            </div>
          ))}
        </div>
        {name === 'Ayhan' ? <div>what is your name ?</div> : ''}
        <button onClick={this.clickHandler}>click meeee</button>
      </>
    )
  }
}
ReactDOM.render(<Personel />, document.getElementById('root'))
```
## Function Component
```js
const MyTwoComponent = () => {
  const name = 'ayhan'
  const situation = 'online'
  return (
    <div>
      <h3> {name} </h3>
      <p>{situation}</p>
    </div>
  )
}
ReactDOM.render(<MyTwoComponent />, document.getElementById('root'))
```

```js
function MyComponent() {
  const name = 'ayhan'
  const situation = 'online'
  return (
    <div>
      <h3> {name} </h3>
      <p>{situation}</p>
    </div>
  )
}
ReactDOM.render(<MyComponent />, document.getElementById('root'))
```


## Creating an application environment with React

```js 
npx create-react-app my-app
 ```
### after the download is finished open terminal and this code write terminal

```js 
npm run start
```

### Components state with accessories

```js 
 /*APP.JS */
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


```

```js 
/*User Js*/
const User = ({ name, situation  }) => {
  return (
    <div className="card">
      <h1>{name ? 'Merhaba ': ''} İsmim {name}</h1>
      <h3 className="situation">Durum : {situation}</h3>
      <button>Durumu Guncelle</button>
    </div>
  );
};

export default User;

```