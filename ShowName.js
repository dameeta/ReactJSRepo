function ShowName(props){
console.log(props);
return <div>
    <h1>{props.name}</h1>
    <p>{props.about || "About is not available"}</p>
</div>
}

export default ShowName;