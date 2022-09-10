import { createContext, useState } from "react";

const Wrapper = createContext();

export function WrapperProvider ({children})  {
    const [name, setName] = useState("");

    const updateName = (input) => {
        setName(input);
    }
    return (
        <Wrapper.Provider value={{name,updateName}}>{children}</Wrapper.Provider>
    )
}


export default Wrapper;