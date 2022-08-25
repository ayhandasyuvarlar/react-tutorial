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
