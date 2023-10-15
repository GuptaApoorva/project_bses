import React from "react";

const Indi = () =>{
    return(
        <div>
            <form>
            <div class="p-2">
                <div class="col-md-3">
                    <label for="title" class="form-label">Title</label>
                    <select class="form-select" id="title" required>
                        <option selected disabled value="">Select...</option>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>other</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid Title.
                    </div>                    
                </div>
            </div>
            <div class="p-2">
                <div class="d-flex mb-3">
                    <div class="p-2">
                    <div class="col-md-12">
                            <label for="validationName" class="form-label">First name</label>
                            <input type="text" class="form-control" id="validationName" required/>
                            <div class="invalid-feedback">
                                Please enter a First name.
                            </div>
                    </div>
                    </div>
                    <div class="p-2">
                        <div class="col-md-12">
                            <label for="validationDefault02" class="form-label">Middle name</label>
                            <input type="text" class="form-control" id="validationDefault02" />
                        </div>
                    </div>
                    <div class="p-2">
                        <div class="col-md-12">
                            <label for="validationDefault02" class="form-label">Last name</label>
                            <input type="text" class="form-control" id="validationDefault02" />
                        </div>
                    </div>
                </div>
            </div>
                <div class="d-flex mb-3">
                    <div class="p-2">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                        <label class="form-check-label" for="flexRadioDisabled">
                                                    Son of
                        </label>
                    </div>
                    </div>
                    <div class="p-2">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                        <label class="form-check-label" for="flexRadioDisabled">
                                                    Daughter of
                        </label>
                    </div>
                    </div>
                    <div class="p-2">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                        <label class="form-check-label" for="flexRadioDisabled">
                                                    Wife of
                        </label>
                    </div>
                    </div>
                </div>
                    <div class="p-2">
                        <div class="col-md-5">
                            <label for="validationDefault02" class="form-label">Father/Husband's Name </label>
                            <input type="text" class="form-control" id="validationDefault02" required/>
                        </div>
                    </div>
            </form>
        </div>
    );
}

export default Indi;