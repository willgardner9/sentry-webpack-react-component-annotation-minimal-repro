import { useState } from "react"

export default function App() {
    return <div><ChildComponent /><ChildComponentWithGenerics /></div>
}

// doesn't cause any problems
const ChildComponent = () => <p>I am a child</p>

const ChildComponentWithGenerics = () => {
    // const [myState, setMyState] = useState<string>("") // causes build error
    const [myState, setMyState] = useState("") // doesn't cause build error

    return <></>
}