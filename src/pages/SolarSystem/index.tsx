import React from "react"

import "../../theme/base.css"
import "./Solar.css"
import {useSelector} from "react-redux";
import {RouteComponentProps} from "react-router";
import {IPlanets} from "../../store";

export function Solar(props: RouteComponentProps) {
    const data = useSelector(d => d) as IPlanets[]
    const planets = data.sort((d1, d2) => d1.idx - d2.idx)
    return <div className="content">
        {planets.map(d => {
            const image = require(`../../assets/images/${d.image}`).default
            return <div>{d.title} <img width={128 * d.size} alt={d.title} src={image}/></div>
        })}
    </div>
}