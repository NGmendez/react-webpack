import * as React from "react";
import Box from "@mui/material/Box";

import {TextField} from "@mui/material";
const Fetcher = (props) =>{
  const {error2,setBStreet,setBCity,setBState,setBcode,setBCountry,setSTreet,setSCity,setSState,setSCode,setSCountry} = props
  const{bStreet, bState,  bCountry, sTreet,  sState,  sCountry} =  props
  const{validBCity, validSCity, validBCode, validSCode} = props
 return (
    
        <Box className="box" >
        <TextField
          error={error2.missingBST?  true:false}
          label= "Billing Street"
          color={bStreet? "success" : null}
          id="BillingStreet"
          onChange={e=> setBStreet(e.target.value)}
        /> 
        <TextField
          error={error2.missingBState?  true:false}
          label="Billing State"
          color={bState? "success" : null}
          id="BillingState"
          onChange={e=> setBCity(e.target.value)}
        /> 
        <TextField
          error={error2.missingBCity?  true:false}
          label="Billing City"
          color={validBCity? "success" : null}
          id="BillingCity"
          onChange={e=> setBState(e.target.value)}
        /> 
        <TextField
          error={error2.missingBZipCode?  true:false}
          label= "Billing zip Code"
          color={validBCode? "success" : null}
          id="BillingZipCode"
          onChange={e=> setBcode(e.target.value)}
        /> 
        <TextField
          error={error2.missingBCountry?  true:false}
          label="Billing Country"
          color={bCountry? "success" : null}
          id="BillingCountry"
          onChange={e=> setBCountry(e.target.value)}
        /> 
        <TextField
          error={error2.missingSTreet?  true:false}
          label="Store Street"
          color={sTreet? "success" : null}
          id="StoreStreet"
          onChange={e=> setSTreet(e.target.value)}
        /> 
        <TextField
          error={error2.missingSCity?  true:false}
          label="Store City"
          color={validSCity? "success" : null}
          id="SotreCity"
          onChange={e=> setSCity(e.target.value)}
        /> 
        <TextField
          error={error2.missingSSTate?  true:false}
          label="Store State"
          color={sState? "success" : null}
          id="StoreState"
          onChange={e=> setSState(e.target.value)}
        /> 
        <TextField
          error={error2.missingSZipCode?  true:false}
          label="Store zip code"
          color={validSCode? "success" : null}
          id="StoreZipCode"
          onChange={e=> setSCode(e.target.value)}
        /> 
        <TextField
          error={error2.missingSCountry?  true:false}
          label="Store Country"
          color={sCountry? "success" : null}
          id="StateCountry"
          onChange={e=> setSCountry(e.target.value)}
        /> 
       
        </Box>
      );
    
    
    
    
    
    
    
    }


  export default Fetcher;


    