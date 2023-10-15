import React from "react";

const Imp_doc = () =>{
    return(
        <div>
            <div class="d-flex p-2">
                <div className="container-sm">
                    <div class="d-flex p-2" id="head">IMPORTANT DOCUMENTS</div>     
                    <form>
                    <p id="state">
                        Identification Proof(Self Attested)
                    </p>
                    <div class="d-flex">
                        <div class="p-2 flex-fill">
                        <div class="col-md-12">
                            <label for="title" class="form-label">ID Proof type</label>
                            <select class="form-select" id="title" required>
                                <option selected disabled value="">Select...</option>
                                <option>Driving License</option>
                                <option>Electrol Identity Card</option>
                                <option>Adhaar Card</option>
                                <option>Photo Idenity Card Issued by Any Government</option>
                                <option>Passport</option>
                                <option>PAN Card</option>
                                <option>Ration Card having Photograph</option>
                            </select>
                        <div class="invalid-feedback">
                        Please select a valid Title.
                        </div>
                        </div>
                        </div>
                        <div class="p-2 flex-fill">
                                <label for="validationName" class="form-label">Id proof Doc No.</label>
                                <input type="text" class="form-control" id="validationName" required/>
                        </div>
                    </div>
                    <div class="d-flex">
                        <div class="p-2 flex-fill">
                        <div class="col-md-6">
                            <label for="title" class="form-label">Ownership Proof (Self Attested)</label>
                            <select class="form-select" id="title" required>
                                <option selected disabled value="">Select...</option>
                                <option>Sale Deed</option>
                                <option>Conveyance Deed</option>
                                <option>Allotment Letter</option>
                                <option>Valid Lease Appartment</option>
                                <option>Mutation certificate issued by gov</option>
                                <option>GPA(Last 5 years chain)</option>
                            </select>
                        <div class="invalid-feedback">
                        Please select a valid Title.
                        </div>
                        </div>
                        </div>
                    </div>

                    <div class="d-flex p-2" id="head">DOCUMENTS CHECKLIST</div> 
                    <div class="container text-center">
                        <div class="row">
                            <div class="col" id="statee">
                                <h7>Internal Wiring at the premises has been tested by a Licensed</h7>
                                <h7>Electrical Contractor/designated officer of the Government and the test</h7>
                                <h7>Certificate is available with the applicant.</h7>
                            </div>
                            <div class="col">
                                <div class="p-2">
                                    <div class="d-flex mb-3"id="statee">
                                <div class="p-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                                    <label class="form-check-label" for="flexRadioDisabled">
                                                                Yes
                                    </label>
                                </div>
                                </div>
                                <div class="p-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                                    <label class="form-check-label" for="flexRadioDisabled">
                                                                No
                                    </label>
                                </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id="statee">
                                <h7>Do you have lift installed?</h7>
                            </div>
                            <div class="col">
                                <div class="p-2">
                                    <div class="d-flex mb-3"id="statee">
                                <div class="p-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                                    <label class="form-check-label" for="flexRadioDisabled">
                                                                Yes
                                    </label>
                                </div>
                                </div>
                                <div class="p-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                                    <label class="form-check-label" for="flexRadioDisabled">
                                                                No
                                    </label>
                                </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col" id="statee">
                                <h7>Do you want to avail e-Bill Services(paperless) on email?</h7>
                                
                            </div>
                            <div class="col">
                                <div class="p-2">
                                    <div class="d-flex mb-3"id="statee">
                                <div class="p-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                                    <label class="form-check-label" for="flexRadioDisabled">
                                                                Yes
                                    </label>
                                </div>
                                </div>
                                <div class="p-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                                    <label class="form-check-label" for="flexRadioDisabled">
                                                                No
                                    </label>
                                </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        <div class="row">
                            <div class="col" id="statee">
                                <h7>Do you want to purchase your own CEA approved meter having additional features as approved by Commission</h7>
                            </div>
                            <div class="col">
                                <div class="p-2">
                                    <div class="d-flex mb-3"id="statee">
                                <div class="p-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                                    <label class="form-check-label" for="flexRadioDisabled">
                                                                Yes
                                    </label>
                                </div>
                                </div>
                                <div class="p-2">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioDisabled" />
                                    <label class="form-check-label" for="flexRadioDisabled">
                                                                No
                                    </label>
                                </div>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="d-flex">
                    <div class="p-5">
                                <label for="validationName" class="form-label">Enter you email</label>
                                <input type="email" class="form-control" id="validationName" required/>
                        </div>
                    </div>
                    </form>              
                </div>
                
            </div>
        </div>
    );
}

export default Imp_doc;