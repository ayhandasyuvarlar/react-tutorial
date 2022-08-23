# React - Tutorial

## class component 

```js
 class Personel extends React.Component {
      state = {
        name: "Ayhan",
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      };
      clickHandler = (e) => {
        this.setState({
          name: "Software Developer",
        });
      };
      render() {
        const { name, array } = this.state;

        return (
          <>
            <div>{name}</div>
            <div style={{ display: "flex" }}>
              {array.map((arr, idx) => (
                <div key={idx} id={idx}>
                  {arr}
                </div>
              ))}
            </div>
            {name === "Ayhan" ? <div>what is your name ?</div> : ""}
            <button onClick={this.clickHandler}>click meeee</button>
          </>
        );
      }
    }
    ReactDOM.render(<Personel />, document.getElementById("root"));
```