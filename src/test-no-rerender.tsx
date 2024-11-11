import { useState } from "react"

export const NoReRender = () => {
    const [b, setB] = useState(false);

    return (
        <div>
            <button onClick={() => setB(!b)}>Toggle</button>
            <div style={{ visibility: b ? "hidden" : "visible" }}>
                <span>Outside Component</span>
                <Inside />
            </div>
        </div>
    )
}

export const Inside = () => {
    return <span>Inside Component</span>
}