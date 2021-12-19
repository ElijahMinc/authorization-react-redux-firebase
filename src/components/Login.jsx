import {Form} from './Form'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setUser} from '../store/slices/userSlice'
 
export const Login = () => {
   const dispatch = useDispatch()
   const {push} = useHistory()
   const handleLogin = (email, password) => {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, email, password)
         .then(({user}) => {
            dispatch(setUser({
               email: user.email,
               token: user.accessToken,
               id: user.uid
            }))
            push('/')
         })
         .catch(console.error)
   }

   return (
      <Form
         title="sign in"
         handleClick={handleLogin}
      />
   )
}
