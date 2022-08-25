import User from "./User";

const UserList = ({users}) => {
    return ( 
        users.map((user , idx)=>{
            return(
                <User name={user.name} situation={user.situation} key={idx}/>
            )
        })
     );
}
 
export default UserList;