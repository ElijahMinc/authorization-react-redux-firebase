import {useState} from 'react'

export const Form = ({title, handleClick}) => {
   const [email, setEmail]= useState('')
   const [pass, setPass] = useState('')

   const handleChange = (callback) => (event) => callback(event.target.value)

   return (
      <div>
         <input type="email" value={email} placeholder='Email' onChange={handleChange(setEmail)} />
         <input type="password" value={pass} placeholder='Password' onChange={handleChange(setPass)}/>
         <button onClick={() => handleClick(email, pass)}>{title}</button>
      </div>
   )
}


