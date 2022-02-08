import React from 'react'
import {Skeleton as SkeletonM} from "@mui/material"
export const Skeleton = (props) => {
    return (
            <SkeletonM {...props} style={{transform: 'scale(1)'}}/>
    )
}
