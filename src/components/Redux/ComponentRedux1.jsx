import { useDispatch} from 'react-redux';
import { createUser } from '../../redux/states/user';

const ComponentRedux1 = () => {
    const dispatcher = useDispatch();
    const handleClick = () => {
        dispatcher(createUser({name: 'Luis', email: 'luis@gmail.com'}))
    }
  return (
    <button onClick={handleClick}>Enviar infor redux</button>
  )
}

export default ComponentRedux1