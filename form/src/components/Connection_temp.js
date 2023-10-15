import React from "react";

const Temp_connection = () =>{
    return(
        <div>
            <div class="d-flex">
                <div class="p-2 flex-fill">
                    <label for="validationName" class="form-label">From Date</label>
                    <input type="date" class="form-control" id="validationName" required/>
                </div>
                <div class="p-2 flex-fill">
                    <label for="validationName" class="form-label">To Date</label>
                    <input type="date" class="form-control" id="validationName" required/>
                </div>
            </div>
        </div>
    );
}

export default Temp_connection;