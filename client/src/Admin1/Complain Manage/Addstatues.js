import React ,{useRef,useState}  from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";

const Addstatues =(prop)=> {
    const style = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 4000,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 1,
        pb:3,
};


const [statuss, statuSS] = useState('');
const [assinto ,assinTo] = useState('');




    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        setOpen(true);
      
        console.log(e)
      };
    const handleClose = () => {
        setOpen(false);
       
  

    };

    const addData = ()=>{
   // console.log(assinto)
        const garbageBinOb =  {
          complainid:prop.ID,
          assinto:assinto,
          status:statuss

            }
      


            axios.post('http://localhost:8070/CM',garbageBinOb)
              .then(response => {
               //   console.log(response)
              })
              .catch(error => {
                 // console.log(error)
              })
              window.location.reload(true);
           


    };



  return (
    <div>
            <Button variant="outline-primary" onClick={() =>handleOpen()}> Assign Data</Button>{' '}
            

        <React.Fragment>
           
           <Modal
             open={open}
             onClose={handleClose}
             aria-labelledby="child-modal-title"
             aria-describedby="child-modal-description"
           >

    
             <Box sx={{ ...style, width: 350 }}>
             <form  >

  
        
        <TextField
          required
          id="outlined-required"
          label="Assin To"
          name='assinto'
          value={assinto}
          onChange={e => assinTo(e.target.value)}     
        />
                <br></br>
        <br></br>
        
        <TextField
          required
          id="outlined-required"
          label="Status"
          name='statuss'
          value={statuss}
          onChange={e => statuSS(e.target.value)}    
        />
        <br></br>
        <br></br>

                   <div>

                 <Button variant="warning" onClick={ ()=>addData()} >Add Data</Button>{' '}   

                 
              
                 <Button onClick={()=>handleClose()}>Close </Button>

                   </div>


               
             </form>



               
             </Box>
           </Modal>
        
        </React.Fragment>

        

    </div>
  )
}

export default Addstatues