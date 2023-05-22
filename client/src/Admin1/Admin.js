

import {  useRoutes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import MGB from './Manage Garbage Bin/ManageGbin';
import CM from './Complain Manage/ComplainM';


const Admin1 =()=>{
    const routes = useRoutes([
        {
          path: '/Admin1',
          children:[
            {path:'MG' ,element:<MGB/>},
            {path:'CM' ,element:<CM/>},
    
          ]
        }
    
      ])  

      return(
        <div>
          <header style={{ textAlign: 'center',height:'100px' }}>
              <nav>
                <br></br>

                <a href="http://localhost:3000/Admin1" target="_blank" rel="noopener noreferrer">
       
                  <Button variant="outline-primary">HOME</Button>{' '}
                 </a>   
        
                <a href="http://localhost:3000/Admin1/MG" target="_blank" rel="noopener noreferrer">
       
                 <Button variant="outline-warning">Garbage Management</Button>{' '}
                </a>

                
                <a href="http://localhost:3000/Admin1/CM" target="_blank" rel="noopener noreferrer">
       
                <Button variant="outline-primary">Complain Management</Button>{' '}
                </a>                
            
              </nav>


          </header>


          <div className="App">
              {routes}

    
          </div>
          <footer style={{ textAlign: 'center'   }}>Zero Waste ©2023 Created </footer>
        </div>



      );
    
}
export default Admin1;