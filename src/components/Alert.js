import React from 'react'

export default function Alert(props) {
  return (
    <>
        <div class={`alert alert-${props.alert} alert-dismissible fade show`} role="alert">
            <strong>{props.mode} mode is Enabled :  {props.alert}</strong>
          
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>


    </>
  )
}
