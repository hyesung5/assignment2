import React from 'react';

// class Button extends React.Component {
//   render() {
    
//     return (
//       <>
//       {this.props.Text !== "등록" ? <button style={{color:this.props.FontColor}} onClick={() => this.props.OnClick(this.props.Id)}>{this.props.Text}</button>:<button>{this.props.Text}</button>}
//       </>
//     )
//   }
// }

//함수형
const Button =(({Text, FontColor, Id , OnClick})=> {
  
  const handremove =(id) => {
    OnClick(id);
  }


if(Text === "등록") return<button>{Text}</button>;
else return<button style={{color:FontColor}} onClick={()=> handremove(Id)} >{Text}</button>
})
export default Button;
