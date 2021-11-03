import React from "react"

import "../../theme/base.css"
import "./Solar.css"
import {useSelector} from "react-redux";
import {RouteComponentProps} from "react-router";

export function Solar(props: RouteComponentProps) {
    const data = useSelector(d => d) as any[]
    return <div className="content">
        <div>Buenas</div>
        {data.map(d => <div>{d.titulo}</div>)}
    </div>
}