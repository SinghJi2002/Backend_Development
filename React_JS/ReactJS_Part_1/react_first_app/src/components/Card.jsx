import React from "react";
import "./Card.css"

//8.U need to write props as the parameter of the function. When accessing the different arguments sent, to write javascript in {} and use props.<Name Of The Argument Sent>

//9. One thing to do here is usage of inline CSS jsx files. See below.
function Card(props) {
  return (
    <div className="card">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Frandom-objects&psig=AOvVaw0J6rZNy_pgMEoe5vm4-pXo&ust=1716223884407000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjO86yWmoYDFQAAAAAdAAAAABAE" alt="pics"/>
        
        <p className="title">
            {props.title}
        </p>
        <p className="subtitle">
            {props.subtitle}
        </p>
    </div>
  )
}

export default Card
