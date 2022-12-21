import React, { useState } from "react";


export const ContextData = React.createContext();

function ContextProvider({children}) {
    const [open, setOpen] = useState(null);

    function toggle(i){
        if(open === i){
          return setOpen(null);
        }
        setOpen(i);
      }
    return(
        <ContextData.Provider value={{toggle, open}}>
            {children}
        </ContextData.Provider>
    )

}
export default ContextProvider;

