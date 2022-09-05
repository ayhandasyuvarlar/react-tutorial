import User from "./User";

const UserList = ({ users , deleteMethod ,changeUpdateMethod }) => {
     if(users.length > 0){
       return users.map(user =>{
        return(
          <div className="container">
          <User user={user} deleteMethod={()=>{deleteMethod(user.id)}} key={user.id} changeUpdateMethod={changeUpdateMethod}/>
        </div>
        )
       })
     }else{
      return (
        <div className="alert alert-danger mt-5">
          Kullanıcı Bulunamadı
        </div>
      )
    }}
export default UserList;
