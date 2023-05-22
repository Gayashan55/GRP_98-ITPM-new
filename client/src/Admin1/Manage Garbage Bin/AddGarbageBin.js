import React ,{useRef,useState}  from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";

const  AddGarbageBin =()=> {
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

const [binid , binID] = useState('');
const [areaa, areaA] = useState('');
const [landmarkk , landMarkk] = useState('');
const [loadtype , loadType] = useState('');
const [periodOfcycle , periodOfCycle] = useState('');
const [busrootaddress , busRootAddress] = useState('');
const [assindriver , assinDriver] = useState('');


    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        setOpen(true);
      
        console.log(e)
      };
    const handleClose = () => {
        setOpen(false);
       
  

    };

    const addData = ()=>{
       
        const garbageBinOb =  {
            BinID:binid,
            Area:areaa,
            LandMark:landmarkk,
            LoadType:loadtype,
            PeriodOfCycle:periodOfcycle,
            BusRootAddress:busrootaddress,
            AssinDriver:assindriver
            }
           // console.log(garbageBinOb)
        // console.log(binid)
        // console.log(areaa)
        // console.log(landmarkk)
        // console.log(loadtype)
        // console.log(periodOfcycle)
        // console.log(busrootaddress)
        // console.log(assindriver)

            axios.post('http://localhost:8070/BM',garbageBinOb)
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
            <Button variant="outline-primary" onClick={() =>handleOpen()}>Add Bin Data</Button>{' '}
            

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
          label="Bin ID"
          name='binid'
          value={binid}
          onChange={e => binID(e.target.value)}
        />

        
        <br></br>
        <br></br>
        
        <TextField
          required
          id="outlined-required"
          label="Area(Address)"
          name='areaa'
          value={areaa}
          onChange={e => areaA(e.target.value)}          
  
        />
                <br></br>
        <br></br>
        
        <TextField
          required
          id="outlined-required"
          label="Land Mark"
          name='landmarkk'
          value={landmarkk}
          onChange={e => landMarkk(e.target.value)}      
        />
                <br></br>
        <br></br>
        
        <TextField
          required
          id="outlined-required"
          label="Load Type"
          name='loadtype'
          value={loadtype}
          onChange={e => loadType(e.target.value)}
        />
                <br></br>
        <br></br>
        
        <TextField
          required
          id="outlined-required"
          label="Period Of Cycle"
          name='periodOfcycle'
          value={periodOfcycle}
          onChange={e => periodOfCycle(e.target.value)}
        />
                <br></br>
        <br></br>
        
        <TextField
          required
          id="outlined-required"
          label="Bus root Address"
          name='busrootaddress'
          value={busrootaddress}
          onChange={e => busRootAddress(e.target.value)}     
        />
                <br></br>
        <br></br>
        
        <TextField
          required
          id="outlined-required"
          label="Assin Driver"
          name='assindriver'
          value={assindriver}
          onChange={e => assinDriver(e.target.value)}    
        />
        <br></br>
        <br></br>

                   <div>

                 <Button variant="warning" onClick={ ()=>addData()} >Add Data</Button>{' '}   
                 {/* onClick={ ()=>addData()}                 */}
                 
              
                 <Button onClick={()=>handleClose()}>Close </Button>

                   </div>


               
             </form>



               
             </Box>
           </Modal>
        
        </React.Fragment>

        

    </div>
  )
}

export default AddGarbageBin