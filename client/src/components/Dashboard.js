import React from "react";

export default function dash(){
    return(

        

<div>
    <div>
    <br/><br/>
        <center> <h2> <b>Collector Dashboard</b> </h2></center>
        <br/>
        <center>
               
    <div style={{backgroundColor:"white"}}>
        <div id="band" className="container text-center" style={{backgroundColor:"white"}}>
        <br/>
        <div className="row">

        
&nbsp;
        <div className="col-sm-3" style={{border: '1px solid grey',borderRadius:'10px',marginLeft:'10%'}}>
            <p className="text-center"><strong><h3>Add New Bin</h3></strong></p>
            <a href="/addbin" ><br/>
                <img src="https://thumbs.dreamstime.com/b/illustration-woman-cleaning-garbage-holding-brush-to-garbage-bin-woman-cleaning-garbage-holding-brush-to-garbage-bin-151384546.jpg" className="img-circle person" alt="" width="150" height="150"/>
            </a>
        </div>
        &nbsp;
        
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <div className="col-sm-3" style={{border: '1px solid grey',borderRadius:'10px'}}>
            <p className="text-center"><strong><h3>View Collected Bins</h3></strong></p>
            <a href="/all" ><br/>
                <img src="https://static.vecteezy.com/system/resources/previews/021/872/845/non_2x/children-cleaning-the-environment-from-garbage-cartoon-vector.jpg" className="img-circle person" alt="" width="200" height="150" />
            </a>
        </div>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div className="col-sm-3" style={{border: '1px solid grey',borderRadius:'10px'}}>
            <p className="text-center"><strong><h3>Reports</h3></strong></p>
            <a href="" ><br/>
                <img src="https://media.istockphoto.com/id/1153672822/vector/contract-papers-document-folder-with-stamp-and-text-stack-of-agreements-document-with.jpg?s=612x612&w=0&k=20&c=kjNCXISJ69chBylPnz_pY_jDPlyus3qxB38soxW78J8=" className="img-circle person" alt="" width="150" height="150" />
            </a>
        </div>

        </div>
        </div>
    </div>  
    </center>

</div>
</div>
    )
}