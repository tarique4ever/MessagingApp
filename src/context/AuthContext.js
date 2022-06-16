import {createContext} from 'react';

export const UserContext = createContext()

const useAuth= ({Children})=> {

    let username ='demo'
    const value={
        username
    }
    return (
        <UserContext.Provider value={value}>
            {Children}
        </UserContext.Provider>


    )
}

  
