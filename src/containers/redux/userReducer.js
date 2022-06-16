import { v1 as uuidv1 } from 'uuid';
const initalState ={users:[]}

const id = uuidv1();


const userReducer = (state=initalState, action)=>{
    switch(action.type){
        case 'add_User':
            const {data}= action.payload;
            return {
                ...state, users:[...state.users, 

                    {id, 
                    email:data.email,
                    password:data.password
                }
                ]
            }
        default: return state
    }
}
export default userReducer