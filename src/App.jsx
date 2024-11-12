
import { Button } from './components/ui/button'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './store/counterSlice/counterSlice'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <div> {count}+</div>
      <Button variant='destructive' onClick={()=>dispatch(decrement())}>
        - decrement
       </Button>
      <Button variant='default' onClick={()=>dispatch(increment())}>
        + increment
       </Button>
       <Button variant='secondary' onClick={()=>dispatch(incrementByAmount(5))}>
        + increment by 5
       </Button>
       <Signup/>
       
    </>
  )
}

export default App
