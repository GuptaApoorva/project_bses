import React from "react";

const Appoinrment = () =>{
    return(
        <div>
            <div class="d-flex p-2">
            <div className="container-sm">
                <div class="d-flex p-2" id="head" >APPOINTMENT SCHEDULE</div>
                <form>
                <div class="d-flex">
                    <div class="p-2 flex-fill">
                        <label for="validationName" class="form-label">Appointment Date</label>
                        <input type="date" class="form-control" id="validationName" required/>
                    </div>
                    <div class="p-2 flex-fill">
                    <label for="validationName" class="form-label">Appoinrment division</label>
                    <input type="text" class="form-control" id="validationName" required/>
                    </div>
                    <div class="p-2 flex-fill">
                        <label for="validationName" class="form-label">Appointment Time</label>
                        <input type="time" class="form-control" id="validationName" required/>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
    );
}

export default Appoinrment;