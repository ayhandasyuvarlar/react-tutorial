import {Link} from 'react-router-dom'

function CountryCard ({dat ,ClickHandler}){
    const HandleClikcHandler = (e) =>{
        ClickHandler(e.target.innerText)
      }
  return (
    <div className="countryCard" key={dat.unMember}>
      <div className="countryCardBody">
        <Link to={'/Country'} onClick={HandleClikcHandler}>
          <div className="countryCardOffical">{dat.name.official}</div>
        </Link>
        <p className="countryCardCommon">{dat.name.common}</p>
      </div>
    </div>
  );
};

export default CountryCard;
