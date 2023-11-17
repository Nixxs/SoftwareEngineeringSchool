function Greeting({name="Welcome", children}){
    return(
        <>
            <h3>Hello {name}</h3>
            {children}
        </>
    )
}
export default Greeting