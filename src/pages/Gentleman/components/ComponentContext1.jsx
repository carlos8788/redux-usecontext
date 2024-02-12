import { useGentlemanContext } from "../context/gentleman.context"

const ComponentContext1 = () => {
    const { setGentlemanContextValue } = useGentlemanContext()

    const handleClick = () => {
        setGentlemanContextValue('Hola Context')
    }
    return (
        <button onClick={handleClick}>Enviar info por context</button>
    )
}

export default ComponentContext1