import React ,{useEffect,useState, useRef}  from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Showeditpreview = (prop)=> {


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
    const statuss_ = useRef('')
    const assinto_ = useRef('')

    const [ssdp , setSDP ] = useState([])

    useEffect(()=>{
        const getSDP = async () =>{
            const {data: res }= await axios.get(`http://localhost:8070/CM/search/${prop.ID}`);

            if(res[0]==null){

            }else{
                setSDP(res[0]);
                console.log(res[0])
                
            }

        };
        getSDP();
    },[])



    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
      setOpen(true);
  
      console.log(e)
    };
    const handleClose = () => {
       setOpen(false);
   


    };
    const deleteD= ()=>{

      axios.delete(`http://localhost:8070/CM/${ssdp._id}`)
      .then(response => {
          console.log(response)
      })
      .catch(error => {
          console.log(error)
      })
      window.location.reload(true);
  







    }

    const UpdateData = ()=>{
   
    const updatedata_ =  {
      complainid:prop.ID,
      assinto:assinto_.current.value,
      status:statuss_.current.value

        }
       //console.log(updatedata_ )


        axios.put(`http://localhost:8070/CM/${ssdp._id}`,updatedata_)
          .then(response => {
           //   console.log(response)
          })
          .catch(error => {
              console.log(error)
          })
          window.location.reload(true);


    };

  return (
    <div>
    <Button variant="outline-primary" onClick={() =>handleOpen()}>Show & Edit Data</Button>{' '}
    

    <React.Fragment>
   
   <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="child-modal-title"
     aria-describedby="child-modal-description"
   >


     <Box sx={{ ...style, width: 350 }}>
     <form  >


     <FloatingLabel controlId="floatingTextarea2" label="Assin to">
        <Form.Control
            as="textarea"
            style={{ height: '50px' }}
             ref={assinto_}
             defaultValue={ssdp.assinto}
             
        />
    </FloatingLabel>
    <br></br>

    
    <FloatingLabel controlId="floatingTextarea2" label="Status">
        <Form.Control
            as="textarea"
            style={{ height: '50px' }}
             ref={statuss_}
             defaultValue={ssdp.status}
             
        />
    </FloatingLabel>


 
    <br></br>

           <div>

         <Button variant="warning" onClick={ ()=>UpdateData()} >Update Data</Button>{' '}   
         <Button onClick={()=>deleteD()}>Delete </Button>{' '}

         
      
         <Button onClick={()=>handleClose()}>Close </Button>

           </div>


       
     </form>



       
     </Box>
   </Modal>

</React.Fragment>



</div>
  )
}

export default Showeditpreview