import {useEffect,useState} from 'react';
import {Box,Grid, TextField, Button, ButtonBase} from '@mui/material';
import {useForm} from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Message= ()=> {
  const navigate = useNavigate();
  const userData = useSelector(state=>state.userReducer.users)
  const [messages,setMessages]=useState('')
 
  useEffect(() => {
    let chats = JSON.parse(localStorage.getItem('chats'))
    console.log('dasdas', chats)

  }, [])

    const {register, handleSubmit} = useForm()
   
    const onSubmit= ({message})=> {
      let chats = JSON.parse(localStorage.getItem('chats'))
      if(chats){
        let newChat = {message, username:userData[0].email}
        chats.push(newChat)
        localStorage.setItem('chats',JSON.stringify(chats)) 
      }else{
        let newChat = {message, username:userData[0].email}
        localStorage.setItem('chats',JSON.stringify([newChat])) 
      }
      setMessages(chats)
    }
    const logout= (data)=> {
      // userData && userData.map(item=>  )
      localStorage.clear()
      navigate("/signin");
    }

  return (
    <Box>

    <h1>messsge</h1>
    {
      userData.length > 0 ? <h1>{userData[0].email}</h1> : null
    }
    {
      messages && messages.map(item=><h1>{item.message}</h1>)
      // chats.length > 0 ?  chats.map(item=><h1>{item.message}</h1>) : null
    }
    <form onSubmit={handleSubmit(onSubmit)}>
    <TextField
                label="message"
                {...register("message")}
                placeholder="Enter your message"
                fullWidth
              />
    <Button variant="contained" type='submit' color="primary" >
                send
              </Button>
    </form>
    <Button  variant='contained' onClick={logout} >logout</Button>

    
    </Box>

  )
}

export default Message;
