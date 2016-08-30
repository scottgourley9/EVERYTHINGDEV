import React from 'react';


var Child = React.createClass({

  render(){
    return (
      <div>
        {this.props.people.map(name => {
          return (
            <div key={name.name}>{name.name}<button onClick={this.state.removeIt}>X</button></div>

          )
        })}




      </div>




    )
  },
  removeIt(e){
    console.log(e);
      this.setState({

      })
  }

})

export default Child
