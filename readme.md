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
import User from './components/User'

function App() {
  return (
    <div className="App">
      <User name={'Ayhan'} situation={'online'} />
      <User name={'Ahmet'} situation={'online'} />
      <User name={'Kemal'} situation={'online'} />
    </div>
  )
}

export default App
```

```js
/*User Js*/
const User = ({ name, situation }) => {
  return (
    <div className="card">
      <h1>
        {name ? 'Merhaba ' : ''} İsmim {name}
      </h1>
      <h3 className="situation">Durum : {situation}</h3>
      <button>Durumu Guncelle</button>
    </div>
  )
}

export default User
```

### Working with Lists

```js
import React from 'react'
import UserList from './components/UserList'

class App extends React.Component {
  state = {
    user: [
      { name: 'Ayhan', situation: 'online' },
      { name: 'Ahmet', situation: 'online' },
      { name: 'Ali', situation: 'offline' },
    ],
  }
  render() {
    return (
      <div className="App">
        <UserList users={this.state.user} />
      </div>
    )
  }
}

export default App
```

```js
import User from './User'

const UserList = ({ users }) => {
  return users.map((user, idx) => {
    return <User name={user.name} situation={user.situation} key={idx} />
  })
}

export default UserList
```

```js
const User = ({ name, situation }) => {
  return (
    <div className="card">
      <h1>
        {name ? 'Merhaba ' : ''} İsmim {name}
      </h1>
      <h3 className="situation">Durum : {situation}</h3>
      <button>Durumu Guncelle</button>
    </div>
  )
}

export default User
```

## Form Usage Communication between components

```js
import React, { Component } from 'react'

export default class AddUser extends Component {
  state = {
    name: '',
  }
  submitHandler = (e) => {
    e.preventDefault()
    this.props.addUser(this.state.name)
  }
  changeHandler = (e) => {
    this.setState({
      name: e.target.value,
    })
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" id="name" onChange={this.changeHandler} />
        <button> Kaydet</button>
      </form>
    )
  }
}
```

```js
import React from 'react'
import AddUser from './components/AddUser'
import UserList from './components/UserList'

class App extends React.Component {
  state = {
    user: [
      { name: 'Ayhan', situation: 'online' },
      { name: 'Ahmet', situation: 'online' },
      { name: 'Ali', situation: 'offline' },
    ],
  }
  addUser = (name) => {
    console.log(name)
  }
  render() {
    return (
      <div className="App">
        <UserList users={this.state.user} />
        <hr />
        <AddUser addUser={this.addUser} />
      </div>
    )
  }
}

export default App
```

## Form Usage 2 , spread operator Communication between components

```js
addUser = (name) => {
  let user = {
    name: name,
    situation: 'online',
  }
  let users = [...this.state.user, user]
  this.setState({
    user: users,
  })
}
```
