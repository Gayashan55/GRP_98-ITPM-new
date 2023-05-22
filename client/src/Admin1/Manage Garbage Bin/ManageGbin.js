import Button from 'react-bootstrap/Button';
import React ,{useEffect, useRef, useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import AddGarbageBin from './AddGarbageBin';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

  

  
const MGB = () => {
    const [open, setOpen] = React.useState(false);



         const binid = useRef('')
         const areaa = useRef('')
         const landmark = useRef('')
         const loadtype = useRef('')
         const periodOfcycle = useRef('')
         const busrootaddress = useRef('')
         const assindriver = useRef('')

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

    const [ID ,passId]= useState({})


    const UpdateForm=(e)=>{

      const garbageBinOb =  {
        BinID:binid.current.value,
        Area:areaa.current.value,
        LandMark:landmark.current.value,
        LoadType:loadtype.current.value,
        PeriodOfCycle:periodOfcycle.current.value,
        BusRootAddress:busrootaddress.current.value,
        AssinDriver:assindriver.current.value
        }
        axios.put(`http://localhost:8070/BM/${e._id}`,garbageBinOb)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
          })
        window.location.reload(true);

    }

    const DeleteForm=(e)=>{
      axios.delete(`http://localhost:8070/BM/${e._id}`)
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        console.log(error)
    })
    window.location.reload(true);


    }



    const handleOpen = (e) => {
        setOpen(true);
        passId(e);
      
   
      };
      const handleClose = () => {
        setOpen(false);
  

    };


    const [bmd , setBmd ] = useState([])
    useEffect(()=>{
        const getBmd = async () =>{
            const {data: res }= await axios.get('http://localhost:8070/BM');
            setBmd(res);
        };
        getBmd();
    },[])
    








        return(
            <div>
                <AddGarbageBin></AddGarbageBin>
                
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Area(Address)</TableCell>
            <TableCell align="right">Bin ID</TableCell>
            <TableCell align="right">Land Mark</TableCell>
            <TableCell align="right">Load Type</TableCell>
            <TableCell align="right">Period Of Cycle</TableCell>
            <TableCell align="right">Bus Root Address</TableCell>
            <TableCell align="right">Assin Driver</TableCell>
            <TableCell align="right">Assin Date</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>


        <React.Fragment>
           
           <Modal
             open={open}
             onClose={handleClose}
             aria-labelledby="child-modal-title"
             aria-describedby="child-modal-description"
           >

    
             <Box sx={{ ...style, width: 350 }}>
             <form>

             <FloatingLabel controlId="floatingTextarea2" label="Bin ID">
              <Form.Control
                as="textarea"
           
                style={{ height: '50px' }}
                ref={binid}
                defaultValue={ID.BinID}
             
              />
            </FloatingLabel>
            <br></br>
            <FloatingLabel controlId="floatingTextarea2" label="Area(Address)">
              <Form.Control
                as="textarea"
   
                style={{ height: '50px' }}
                ref={areaa}
                defaultValue={ID.Area}         
              />
            </FloatingLabel>
            <br></br>
            <FloatingLabel controlId="floatingTextarea2" label="Land Mark">
              <Form.Control
                as="textarea"
                style={{ height: '50px' }}
                ref={landmark}
                defaultValue={ID.LandMark}        
              />
            </FloatingLabel>
            <br></br>
            <FloatingLabel controlId="floatingTextarea2" label="Load Type">
              <Form.Control
                as="textarea"
              
                style={{ height: '50px' }}
                ref={loadtype}
                defaultValue={ID.LoadType}    
              />
            </FloatingLabel>
            <br></br>
            <FloatingLabel controlId="floatingTextarea2" label="Period Of Cycle">
              <Form.Control
                as="textarea"

                style={{ height: '50px' }}
                ref={periodOfcycle}
                defaultValue={ID.PeriodOfCycle}       
              />
            </FloatingLabel>
            <br></br>
            <FloatingLabel controlId="floatingTextarea2" label="Bus root Address">
              <Form.Control
                as="textarea"
                style={{ height: '50px' }}
                ref={busrootaddress}
                defaultValue={ID.BusRootAddress}        
              />
            </FloatingLabel>             
            <br></br>
            <FloatingLabel controlId="floatingTextarea2" label="Assin Driver">
              <Form.Control
                as="textarea"
                style={{ height: '50px' }}
                ref={assindriver}
                defaultValue={ID.AssinDriver}  
              />
            </FloatingLabel>              
              


        <br></br>

                   <div>

                 <Button variant="warning" onClick={() =>UpdateForm(ID)}>Update</Button>{' '}   
                 {/* onClick={() =>UpdateForm(ID)               */}
                 
                 <Button  variant="danger" onClick={()=>DeleteForm(ID)} >Delete</Button> {' '}
                 <Button onClick={handleClose}>Close </Button>

                   </div>


               
             </form>



               
             </Box>
           </Modal>
        
        </React.Fragment>

       
          {bmd.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Area}
              </TableCell>
              <TableCell align="right">{row.BinID}</TableCell>
              <TableCell align="right">{row.LandMark}</TableCell>
              <TableCell align="right">{row.LoadType}</TableCell>
              <TableCell align="right">{row.PeriodOfCycle}</TableCell>
              <TableCell align="right">{row.BusRootAddress}</TableCell>
              <TableCell align="right">{row.AssinDriver}</TableCell>
              <TableCell align="right">{row.updatedAt.slice(0,10)}</TableCell>
              <TableCell align="right"><Button variant="danger" onClick={() =>handleOpen(row)}>Edit</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        )
    
}
export default MGB