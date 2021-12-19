import {Form} from './Form'
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from 'react-router-dom';
import {setUser} from '../store/slices/userSlice'
import { useAuth } from '../hooks/useAuth';
 
export const SignUp = () => {
   const dispatch = useDispatch()
   const {push} = useHistory()
   
   const handleRegister = (email, password) => {
      const auth = getAuth()

      createUserWithEmailAndPassword(auth, email, password)
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
         title="register"
         handleClick={handleRegister}
      />
   )
}
