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

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Addstatues from './Addstatues';
import Showeditpreview from './showeditpreview';



const CM = () => {
    const [open, setOpen] = React.useState(false);



         const complainid = useRef('')
         const province = useRef('')
         const city = useRef('')
         const area = useRef('')
         const location = useRef('')
         const note = useRef('')
         const assinto = useRef('')
         const assindate = useRef('')

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
    const [_bmd , _setCMGD ] = useState([])
    


    







    const [bmd , setCMGD ] = useState([])
    useEffect(()=>{
        const getCMGD = async () =>{
            const {data: res }= await axios.get('http://localhost:8070/CMGD');
            setCMGD(res);
        };
        getCMGD();
    },[])
    
        return(
            <div>
   
                
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1050 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >Complan ID</TableCell>
            <TableCell align="right">province</TableCell>
            <TableCell align="right">city</TableCell>
            <TableCell align="right">area</TableCell>
            <TableCell align="right">location</TableCell>
            <TableCell align="right">note</TableCell>
            <TableCell align="right">Assign to</TableCell>
       
        
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>




       
          {bmd.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }} 
            >
              <TableCell component="th" scope="row"> {row._id.slice(3,9)} </TableCell>
              <TableCell align="right">{row.province}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.area}</TableCell>
              <TableCell align="right">
              <Form.Control
                as="textarea"
                style={{ height: '50px' }}
     
                defaultValue={row.location} readOnly
              />
              
              </TableCell>




              
              <TableCell align="right">
              
              <Form.Control
                as="textarea"
                style={{ height: '50px' }}
     
                defaultValue={row.note} readOnly
              />              
              
              
              </TableCell>
              <TableCell align="right"><Addstatues ID = {row._id} ></Addstatues></TableCell>

              {/* <TableCell align="right">{row.updatedAt.slice(0,10)}</TableCell> */}
              <TableCell align="right"><Showeditpreview ID = {row._id}></Showeditpreview></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
            </div>
        )
    
}
export default CM


// {row.location}