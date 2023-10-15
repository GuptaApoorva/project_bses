import React from "react";


const Firm = () =>{
    return(
        <div>
            <form>
                <div class="d-flex">
                    <div class="p-2 flex-fill">
                    <div class="col-md-6">
                            <label for="validationDefault02" class="form-label">Firm/Trust/Company/Others Name Required</label>
                            <input type="text" class="form-control" id="validationDefault02" required/>
                    </div>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="p-2 flex-fill">
                        <label for="validationDefault02" class="form-label">Name of Authorized Signatory </label>
                        <input type="text" class="form-control" id="validationDefault02" required/>
                    </div>
                    <div class="p-2 flex-fill">
                        <label for="validationDefault02" class="form-label">Designation of Signatory </label>
                        <input type="text" class="form-control" id="validationDefault02" required/>
                    </div>
                    <div class="p-2 flex-fill">
                        <label for="validationDefault02" class="form-label">Type of Organization</label>
                        <input type="text" class="form-control" id="validationDefault02"/>
                    </div>
                </div>
                <div class="d-flex">
                    <div class="p-2 flex-fill">
                        <label for="validationDefault02" class="form-label">Date of Incorporation</label>
                        <input type="date" class="form-control" id="validationDefault02" required/>
                    </div>
                    <div class="p-2 flex-fill">
                        <label for="validationDefault02" class="form-label">GST No.</label>
                        <input type="text" class="form-control" id="validationDefault02" required/>
                    </div>
                    <div class="p-2 flex-fill">
                        <label for="validationDefault02" class="form-label">PAN No</label>
                        <input type="text" class="form-control" id="validationDefault02"/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Firm;