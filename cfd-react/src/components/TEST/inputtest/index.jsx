import React, { forwardRef } from 'react'

 const InputTest = ({props, ref1}) => {
    return (
        <>
        <div ref={ref1} style={{ backgroundColor: "blue", width: "150px", height: "150px", marginTop: "30px" }}>
            box
        </div>
        <input type="text"  ref={ref1}/>
        </>
    )
}
export default InputTest