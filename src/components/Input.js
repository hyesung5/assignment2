import React from 'react';


// class Input extends React.Component{
//     render(){
//         return(
//             <>
//             <input name={this.props.Name} placeholder={this.props.Placeholder} value={this.props.Value} onChange={this.props.OnChange}/>
//             </>

//         )
//     }
// }

//함수형
const Input = (({Name, Placeholder, Value, OnChange})=> {
    return(
        <>
        <input name={Name} placeholder={Placeholder} value={Value} onChange={OnChange} /> 
        </>
    )
})

export default Input;