import React from 'react';

class Button extends React.Component {
  render() {
    
    return (
      <>
      {this.props.Text !== "등록" ? <button style={{color:this.props.FontColor}} onClick={() => this.props.OnClick(this.props.Id)}>{this.props.Text}</button>:<button>{this.props.Text}</button>}
      </>
    )
  }
}

export default Button;
