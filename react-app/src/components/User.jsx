const User = ({ name, situation  }) => {
  return (
   <div className="col-12">
     <div className="card mt-1 p-5 w-100">
     <button className="btn btn-danger" style={{position:'absolute' , right:'10px' ,top:'5px'}}>Sil</button>
      <h3>{name ? 'Merhaba ': ''} İsmim {name}</h3>
      <h3 className="situation">Durum : {situation}</h3>
    </div>
   </div>
  );
};

export default User;
