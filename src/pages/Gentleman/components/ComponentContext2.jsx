import { useGentlemanContext } from "../context/gentleman.context"

const ComponentContext2 = () => {
    const { gentlemanContextValue } = useGentlemanContext()
    return (
        <div>El value es: {gentlemanContextValue}</div>
    )
}

export default ComponentContext2