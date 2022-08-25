import User from "./User";

const UserList = ({users}) => {
    return ( 
        users.map((user , idx)=>{
            return(
               <div className="container">
                 <User name={user.name} situation={user.situation} key={idx}/>
               </div>
            )
        })
     );
}
 
export default UserList;