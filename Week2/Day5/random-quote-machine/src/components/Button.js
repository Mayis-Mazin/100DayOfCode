import React from 'react';
const Button =({buttonDisplayName,clickHandler})=>(
    <button onClick={clickHandler}>{buttonDisplayName}Clickme</button>
)
export default Button;