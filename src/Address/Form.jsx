import "./Address.css";
import { useReducer } from "react";
import axios from "axios";

export default function Form({
  setPage,
  setAddress,
  editElement = {},
  formObject,
  setEdit,
  address,
  edit = false,
  btnText = "Add Address",
  editFormClass = ""
}) {

  const [state, dispatch] = useReducer(formReducer, {
    formData: formObject,
    errorData: {}
  });

  //reducer function for form
  function formReducer(state, action) {
    switch(action.type){
      case "handleChange": {
                                const { name } = action.event.target;
                                return {
                                  ...state,
                                  formData: { ...state.formData, [name]: action.event.target.value }
                                };

                            }
                            
      case "handleSubmit": {
                              action.event.preventDefault();
                              const validate = () => {
                                const err = {};
                                if (!state.formData.name) {
                                  err["name"] = "name is needed*";
                                }
                                if (!state.formData.mobile ||!Number(state.formData.mobile)) {
                                  err["mobile"] = "Enter valid mobile number*";
                                }
                                if (!state.formData.pincode || !Number(state.formData.pincode)) {
                                  err["pincode"] = "Enter valid pincode number*";
                                }
                                if (!state.formData.address) {
                                  err["address"] = "address is needed*";
                                }
                                if (!state.formData.locality) {
                                  err["locality"] = "locality is needed*";
                                }
                                if (!state.formData.district) {
                                  err["district"] = "district is needed*";
                                }
                                if (!state.formData.state) {
                                  err["state"] = "state is needed*";
                                }
                                return err;
                              };
                              state.errorData = validate();
                              if (Object.keys(state.errorData).length > 0) {
                                return { ...state, errorData: validate() };
                              }
                              else {
                                      if(edit){
                                                (async ()=>{
                                                  try {          
                                                        const addressUpdated = address.map((ele)=>
                                                        ele.id === editElement.id ? state.formData : ele)
                                                        const serverResponse = await axios.put(`https://6217d5f51a1ba20cba924689.mockapi.io/api/address/${editElement.id}`,{...state.formData})
                                                        if(serverResponse.status === 200){
                                                          setAddress(addressUpdated)
                                                          setEdit(false)
                                                        }
                                                        return { ...state, errorData: {} };
                                                  }
                                                  catch(e){
                                                          console.log("data update failed")
                                                          return { ...state, errorData: {} }
                                                  }
                                                })()
                                                return { ...state, errorData: {} }
                                         
                                        }
                                        else {
                                          (async ()=>{
                                            try {          
                                                  
                                                  const serverResponse = await axios.post("https://6217d5f51a1ba20cba924689.mockapi.io/api/address", {...state.formData})
                                                  if(serverResponse.status === 201){
                                                    setAddress((prev)=>[...prev, serverResponse.data]) 
                                                    setPage(false)
                                                  }
                                                  return { ...state, errorData: {} };
                                                }
                                            catch(e){
                                                    console.log("data uploading failed")
                                                    return { ...state, errorData: {} }
                                            }
                                          })()
                                          return { ...state, errorData: {} }
                                         
                                      }
                                    
                              }
                            
                            }
      default: {
        console.log("action failed")
      }
    }
  }
 const cancelForm = ()  => {
    edit ? setEdit(false) : setPage(false)
 }
  return (
    <form onSubmit={(e) => dispatch({ type: "handleSubmit", event: e })} className={`form-wrapper form-flex ${editFormClass}`}>
      <div className="form-flex">
          <strong>Contact Details</strong>
          <div className="form-input">
            <label htmlFor="name" className = "input-label">Name</label>
            <input
              className="i-text"
              type="text"
              id="name"
              name="name"
              defaultValue={editElement.name}
              onChange={(e) => dispatch({ type: "handleChange", event: e })}
            />
            {state.errorData.name && <p className="error-message">{state.errorData.name}</p>}
          </div>
          <div className="form-input">
            <label htmlFor="mobile" className = "input-label">Mobile Number</label>
            <input
            className="i-text"
              type="text"
              minLength = "10"
              maxLength="10" 
              id="mobile"
              name="mobile"
              defaultValue={editElement.mobile}
              onChange={(e) => dispatch({ type: "handleChange", event: e })}
            />
            {state.errorData.mobile && <p className="error-message">{state.errorData.mobile}</p>}
          </div>
      </div>
      <div className="form-flex">
          <strong>Address</strong>
          <div className="form-input">
            <label htmlFor="pincode" className = "input-label">Pin Code*</label>
            <input
              className="i-text"
              type="text"
              minLength="6"
              maxLength="6"
              id="pincode"
              name="pincode"
              defaultValue={editElement.pincode}
              onChange={(e) => dispatch({ type: "handleChange", event: e })}
            />
            <p className="error-message">{state.errorData.pincode}</p>
          </div>
          <div className="form-input">
            <label htmlFor="address" className = "input-label">Address(House No, Building, street, Area)*</label>
            <input
              className="i-text"
              type="text"
              id="address"
              name="address"
              defaultValue={editElement.address}
              onChange={(e) => dispatch({ type: "handleChange", event: e })}
            />
            <p className="error-message">{state.errorData.address}</p>
          </div>
          <div className="form-input">
            <label htmlFor="locality" className = "input-label">Locality/Town</label>
            <input
              className="i-text"
              type="text"
              id="locality"
              name="locality"
              defaultValue={editElement.locality}
              onChange={(e) => dispatch({ type: "handleChange", event: e })}
            />
            <p className="error-message">{state.errorData.locality}</p>
          </div>
          <div className="form-input">
            <label htmlFor="district" className = "input-label">City/District</label>
            <input
              className="i-text"
              type="text"
              id="district"
              name="district"
              defaultValue={editElement.district}
              onChange={(e) => dispatch({ type: "handleChange", event: e })}
            />
            <p className="error-message">{state.errorData.district}</p>
          </div>
          <div className="form-input">
            <label htmlFor="state" className = "input-label">State</label>
            <input
              className="i-text"
              type="text"
              id="state"
              name="state"
              defaultValue={editElement.state}
              onChange={(e) => dispatch({ type: "handleChange", event: e })}
            />
            <p className="error-message">{state.errorData.state}</p>
          </div>

      </div>
      <button type="submit" className="btn primary">{btnText}</button>
      <button className="cancel-btn" onClick={cancelForm}><i class="fas fa-times"></i></button>
    </form>
  );

}