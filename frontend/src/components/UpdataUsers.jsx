import { useAuthStore } from '../store/authStote';

export default function UpdataUsers({edit,setEdit}) {
  
   const { updateUser} = useAuthStore();
 
   return (
     <div className="contaner-form">
       <form onSubmit= {()=>{updateUser(edit._id , edit)}} className="form">
         <input
           type="text"
           placeholder="username"
           value={edit.username}
           onChange={(e) => setEdit({ ...edit, username: e.target.value })}
         />
         
         <input
           type="email"
           placeholder="email"
           value={edit.email}
           onChange={(e) =>
             setEdit({ ...edit, email: e.target.value })
           }
         />
         
         <select
           name="user_type"
           id="user_type"
           value={edit.user_type}
           onChange={(e) =>
             setEdit({ ...edit, user_type: e.target.value })
           }
         >
           <option value="intel">intel</option>
           <option value="airforce">airforce</option>
           <option value="admin">admin</option>
         </select>
         <button type="submit">
          Update
         </button>
       </form>
     </div>
   );
}
