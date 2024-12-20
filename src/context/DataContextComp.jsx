import React,{createContext,useState} from 'react'


export const UserContext = createContext(0)
const DataContextComp = ({name,children}) => {
    const [count,setCount]= useState(0)
  return (
    <>
<UserContext.Provider value={{count,setCount}}>
      {children}
</UserContext.Provider>
    </>
  )
}

export default DataContextComp