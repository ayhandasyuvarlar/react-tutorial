const User = ({ name, situation  }) => {
  return (
   <div className="col-12">
     <div className="card mt-1 p-5 w-100">
      <h3>{name ? 'Merhaba ': ''} İsmim {name}</h3>
      <h3 className="situation">Durum : {situation}</h3>
      <button className="btn btn-dark">Durumu Guncelle</button>
    </div>
   </div>
  );
};

export default User;
