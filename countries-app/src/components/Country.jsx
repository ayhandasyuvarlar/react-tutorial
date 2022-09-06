const Country = (props) => {
    let name = props.match.params.name
    return ( 
        <div>
          UlkeADI {name}
        </div>
     );
}   
 
export default Country;