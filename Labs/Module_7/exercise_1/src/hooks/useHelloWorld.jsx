import { useState, useEffect } from "react"

export function useHelloWorld(name){
    const [data, setData] = useState(null)
    
    useEffect(
        function (){    
            setData(`hello ${name}`);
        }
    , [])

    return data
}