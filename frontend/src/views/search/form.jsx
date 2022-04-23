import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input, Button } from "semantic-ui-react";
import { updateInput, search } from "../../store/features/mainSlice";

const Form = ({}) => {
  const { address, city, province, country, postalCode } = useSelector(state => state.main);
  const dispatch = useDispatch();

  const checkDisabled = () =>{
    return !(city !=='' || country !==''); 
  };

  return (
     <>
       <Input 
         className="address" 
         placeholder="Street address"
         value={ address} 
         maxLength={100}
         onChange={(e) =>
            dispatch(updateInput({ type: "address", value: e.target.value }))
          }
         />
        }
       <br/>
       <div>
         <Input 
           className="city" 
           placeholder="City"
           value= { city }
           maxLength={100}
           onChange={(e) =>
            dispatch(updateInput({ type: "city", value: e.target.value }))
          }
         />
         <Input 
           className="province" 
           placeholder="Province"
           value={ province }
           maxLength={100}
           onChange={(e) =>
            dispatch(updateInput({ type: "province", value: e.target.value }))
          }
          />
       </div>   
       <div>
         <Input 
           className="country" 
           placeholder="Country"
           value= { country }
           maxLength={100}
           onChange={(e) =>
            dispatch(updateInput({ type: "country", value: e.target.value }))
          }
           />
         <Input 
           className="postalcode" 
           placeholder="Postal Code"
           value={ postalCode }
           maxLength={100}
           onChange={(e) =>
            dispatch(updateInput({ type: "postalCode", value: e.target.value }))
          }
          />
       </div>
       <Button className="submitBtn" disabled={checkDisabled()} onClick={() => dispatch(search())}>Submit</Button>
     </>
  );
};

export default Form;