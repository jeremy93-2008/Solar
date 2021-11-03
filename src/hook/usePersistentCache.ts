import {useCallback, useRef} from "react";

const PERSISTENT_CACHE_KEY = "Persistent.Cache.Key"

export function usePersistentCache(initialData: any) {
    const hasNewData = useRef(true)
    const savedData = localStorage.getItem(PERSISTENT_CACHE_KEY) ?
        JSON.parse(localStorage.getItem(PERSISTENT_CACHE_KEY) as any) : null

    const setData = useCallback((data: any) => {
        hasNewData.current = true
        localStorage.setItem(PERSISTENT_CACHE_KEY, JSON.stringify(data))
    }, [])

    const getData = useCallback(() => {
        hasNewData.current = false
        return savedData || initialData
    }, [initialData, savedData]) as any

    if(!savedData && initialData) localStorage.setItem(PERSISTENT_CACHE_KEY, JSON.stringify(initialData))

    return { getData, setData, hasNewData: () => hasNewData.current }
}