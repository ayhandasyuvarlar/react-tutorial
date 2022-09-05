const User = ({ user, deleteMethod, changeUpdateMethod }) => {
  const changeHandler = (e) => {
    changeUpdateMethod({ situation: e.target.value, id: user.id });
  };
  return (
    <div className="col-12" id={user.id} key={user.id}>
      <div className="card mt-1 p-5 w-100">
        <button
          className="btn btn-danger"
          style={{ position: "absolute", right: "10px", top: "5px" }}
          onClick={deleteMethod}
        >
          Sil
        </button>
        <h3>
          {user.name ? "Merhaba " : ""} İsmim {user.name}
        </h3>
        <h3 className="situation">Durum : {user.situation}</h3>
        <select
          name="state"
          id="state"
          onChange={changeHandler}
          className={"form-select"}
          aria-label="Default select example"
          value={user.situation}
        >
          <option value="online">online</option>
          <option value="offline">offline</option>
          <option value="busy">busy</option>
        </select>
      </div>
    </div>
  );
};

export default User;
