import React from 'react'

export default function About(props) {
    // const [mystyle,setstyle]=useState({
    //     color:"white",
    //     backgroundColor:"black",
    // })
    // const [btntxt,newtxt]=useState("Enable Light Mode")
    // const changeMode = ()=>{
    //     if (props.mode==="white"){
    //         setstyle({
    //             color:"black",
    //             backgroundColor:"white",
    //             border: "1px solid white",
    //         })
    //         // newtxt("Enable Dark Mode")
    //     }
    //     else{
    //         setstyle({
    //             color:"white",
    //             backgroundColor:"black",
    //             border: "1px solid white",
    //         })
    //         // newtxt("Enable Light Mode")
    //     }
    // }
  return (
    <>
    <div className={`container my-3 bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}>
        <div class="accordion" id="accordionExample" >
            <div class="accordion-item" >
                <h2 class={`accordion-header bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} id="headingOne" >
                <button class={`accordion-button bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
                    <strong>Analyse Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class={`accordion-body bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div class="accordion-item" >
                <h2 class="accordion-header" id="headingTwo">
                <button class={`accordion-button bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class={`accordion-body bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} >
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                <button class={`accordion-button bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browse Easily</strong>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div class={`accordion-body bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}>
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
        {/* <button className="btn-primary my-3" onClick={changeMode}>{btntxt}</button> */}
    </div>
    </>
  )
}
