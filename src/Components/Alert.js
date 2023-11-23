import React from 'react'

function Alert(props) {
    const capatalize = (word)=>
    {
        const lower=word.toLowerCase();
        const first=lower.charAt(0).toUpperCase()+lower.slice(1);
        return (first);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capatalize(props.alert.type)}:{props.alert.msg} </strong>
</div>
  )
}

export default Alert