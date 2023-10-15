import React from "react";
import  {useState, useEffect} from 'react';

const Address = () =>{

    // const [inputContent, setInputContent] = useState('');
    // const [copyContent, setCopyContent] = useState('');
    // const [isChecked, setIsChecked] = useState(false);

    // const handleCheckboxChange = () => {
    //     if (isChecked) {
    //       setCopyContent(inputContent);
    //     } else {
    //       setCopyContent('');
    //     }
    //   };
    
    // useEffect(() => {
    //     if (isChecked) {
    //       setCopyContent(inputContent);
    //     }
    // }, [inputContent, isChecked]);

    return(
        <div>
            <div class="d-flex p-2">
                    <div className="container-sm">
                        <div class="d-flex p-2" id="head" >ADDRESS</div>
                        <div class="d-flex p-2" id="head" >FOR COMMUNICATION</div>
                        <form>
                        <div class="d-flex">
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">House No./Property No</label>
                                        <input type="text" class="form-control" id="validationDefault02" required/>
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                    <label for="title" class="form-label">Floor</label>
                                        <select class="form-select" id="title">
                                        <option selected disabled value="">Select...</option>
                                        <option>Floor 1</option>
                                        <option>Floor 2</option>
                                        <option>Floor 3</option>
                                        </select>
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">Building Name</label>
                                        <input type="text" class="form-control" id="validationDefault02" />
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">Street</label>
                                        <input type="text" class="form-control" id="validationDefault02" required/>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">Colony/Area</label>
                                        <input type="text" class="form-control" id="validationDefault02" required/>
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                    <label for="title" class="form-label">Landmark</label>
                                        <select class="form-select" id="title">
                                        <option selected disabled value="">Select...</option>
                                        <option>Above</option>
                                        <option>Behind</option>
                                        <option>Below</option>
                                        <option>Near</option>
                                        <option>Opposite</option>
                                        </select>
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">Landmark Details</label>
                                        <input type="text" class="form-control" id="validationDefault02" />
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">City Postal code</label>
                                        <input type="text" class="form-control" id="validationDefault02" required/>
                                </div>
                            </div>
                        </div>
                        </form>
                        <form>
                        <div class="d-flex p-2" id="head" >WHERE SUPPLY IS REQUIRED</div>
                        <div class="d-flex">
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">Nearby Location</label>
                                        <input type="text" class="form-control" id="validationDefault02" required/>
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">Division</label>
                                        <input type="text" class="form-control" id="validationDefault02" />
                                </div>
                            </div>
                        </div>
                        </form>
                        <form>
                        <div class="d-flex p-2" id="head">
                            <input type="checkbox" id="vehicle1" name="vehicle1" value=""/>
                            <label for="vehicle1"> Is supply address same as communication address?</label><b/>
                        </div>
                        <div class="d-flex">
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">House No./Property No</label>
                                        <input type="text" class="form-control" id="validationDefault02" required/>
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                    <label for="title" class="form-label">Floor</label>
                                        <select class="form-select" id="title">
                                        <option selected disabled value="">Select...</option>
                                        <option>Floor 1</option>
                                        <option>Floor 2</option>
                                        <option>Floor 3</option>
                                        </select>
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">Building Name</label>
                                        <input type="text" class="form-control" id="validationDefault02" />
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">Street</label>
                                        <input type="text" class="form-control" id="validationDefault02" required/>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex">
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">Colony/Area</label>
                                        <input type="text" class="form-control" id="validationDefault02" required/>
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                    <label for="title" class="form-label">Landmark</label>
                                        <select class="form-select" id="title">
                                        <option selected disabled value="">Select...</option>
                                        <option>Above</option>
                                        <option>Behind</option>
                                        <option>Below</option>
                                        <option>Near</option>
                                        <option>Opposite</option>
                                        </select>
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">Landmark Details</label>
                                        <input type="text" class="form-control" id="validationDefault02" />
                                </div>
                            </div>
                            <div class="p-2 flex-fill">
                                <div class="col-md-12">
                                        <label for="validationDefault02" class="form-label">City Postal code</label>
                                        <input type="text" class="form-control" id="validationDefault02" required/>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex p-2" id="head" >INDICATE LANDMARKS</div>
                        <div class="d-flex">
                            <div class="p-2 flex-fill">
                                <div class="col-md-6">
                                        <label for="validationDefault02" class="form-label">Pole No./Feeder Pillar No./Nearest House No.</label>
                                        <input type="text" class="form-control" id="validationDefault02" required/>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Address;