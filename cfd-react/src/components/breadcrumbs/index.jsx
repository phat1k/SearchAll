import React from "react"
import { Link } from "react-router-dom"
// import './style.scss'

export const Breadcrumbs = ({ children }) => {

    const len = React.Children.count(children)
    return (
        <div className="breadcrumbs">
            <ul>
                {
                    React.Children.map(children, (child, index) => <li>{child}{index < len - 1 ? '>' : ''}</li>)
                }
            </ul>
        </div>
    )
}

export const BreadcrumbsItem = ({ children, to }) => {
    return (
        <Link to={to} className="item">{children}</Link>
        
    )
}