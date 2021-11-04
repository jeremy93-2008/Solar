import {collection, getDocs} from "firebase/firestore/lite";
import {db} from "../firebase";
import {useCallback, useEffect} from "react";
import {useSelector} from "react-redux";
import {usePersistentCache} from "./usePersistentCache";
import {IPlanets} from "../store";

export const useFetchData = (callback: (d: any[]) => void) => {
    const data = useSelector(d => d) as IPlanets[]
    const { hasNewData, getData, setData } = usePersistentCache(data)

    const fetchSolarSystem = useCallback(async () => {
        const solarCol = collection(db, 'SolarSystem');
        const solarSnapshot = await getDocs(solarCol);
        return solarSnapshot.docs.map(doc => doc.data());
    }, [])

    useEffect(() => {
        if(!hasNewData()) return
        if(getData().length > 0) {
            return callback(getData())
        }
        fetchSolarSystem().then((data) => {
            setData(data)
            callback(data)
        });
    }, [getData, setData, hasNewData, fetchSolarSystem, callback])
}