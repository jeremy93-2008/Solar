import { IonPage } from '@ionic/react';
import {useDispatch} from "react-redux"
import "../../theme/base.css"
import './Home.css';
import {RouteComponentProps} from "react-router";
import {useFetchData} from "../../hook/useFetchData";

export const Home = (props: RouteComponentProps) => {
    const dispatch = useDispatch()

    useFetchData((data) => {
        dispatch({
            type: "changeSolarData",
            payload: data
        })
        props.history.push("/solar")
    })

    return (
        <IonPage>
          <div className="content">
            <div className="title">
                {"Solar".split("").map((letter, idx, arr) =>
                    <span key={letter} className="letter" style={{animationDelay: `0.${arr.length-idx}s`}}>{letter}</span>
                )}
            </div>
          </div>
        </IonPage>
    );
};
