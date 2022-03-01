import React from 'react'

function Alert(props) {

  // Capitalizing the first letter
  const capitalize = (word) => {
    const letter = word.toLowerCase();
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  }

  return (
    // if props.alert is null then it won't get executed, else condition T then expression gets executed, 
    <div style = {{height: "50px"}}>
       {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show rounded mx-5 p-6`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>}
    </div>

  )
}

export default Alert