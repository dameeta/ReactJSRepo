// ... Spread, Rest
//{}, [] Destructuring

function ShowName({name, about, abc:linkedIn}){
    return <div>
        <h1>{name}</h1>
        { <i>linkedIn Profile: {linkedIn}</i> }
        <p>{about || "About is not available"}</p>
    </div>
    }
    
    export default ShowName;