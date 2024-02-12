import { useEffect } from "react"
import { sharingInformationService } from "../services/sharing-information.service"
import { useState } from "react";

const Component2 = () => {
    const [count, setCount] = useState(0)
    let subscription = sharingInformationService.getSubject();
    useEffect(() => {
        subscription.subscribe(data => {
            if (data) {
                setCount(count + 1)
            }
        })
    })
    return (
        <div>{count}</div>
    )
}

export default Component2