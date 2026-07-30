const Books = (props) => {
return (
<>

<ul>
   

    <h3>{props.name}</h3>
    <p>{props.published}</p>
    <p>{props.genre}</p>
    <p>{props.author}</p>
    <img src={props.img} alt={props.imgAlt} width='180' />

     

   

    
</ul>

</>

)}


export default Books