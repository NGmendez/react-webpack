import * as React from "react";
import Box from "@mui/material/Box";
import { useState} from "react";
import {TextField,Button,Alert} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Fetcher from './Fetcher';

function Inputs() {
  let zID;
  let zModule;

  const [screen, setScreen] = useState(1)
  const [alert, setAlert] = useState(false)
  const [taxId, setTaxId] = useState("");
  const [resale, setResale] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [home, setHome] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [homeCode, setHomeCode] = useState("");
  const [country, setCountry] = useState("");

  const [bStreet, setBStreet] = useState("");
  const [bCity, setBCity] = useState("");
  const [bState, setBState] = useState("");
  const [bCode, setBcode] = useState("");
  const [bCountry, setBCountry] = useState("");

  const [sTreet, setSTreet] = useState("");
  const [sCity, setSCity] = useState("");
  const [sState, setSState] = useState("");
  const [sCode, setSCode] = useState("");
  const [sCountry, setSCountry] = useState("");

  



const regExTaxId = /^([07][1-7]|1[0-6]|2[0-7]|[35][0-9]|[468][0-8]|9[0-589])-?\d{7}$/
const regExCity  = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/
const regExZipC = /^\d{5}$|^\d{5}-\d{4}$/
const regExPhoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


let validTax= regExTaxId.test(taxId)
let validCity= regExCity.test(city)
let validHomeCode = regExZipC.test(homeCode)
let validPhoneNumber = regExPhoneNumber.test(phoneNumber)
let validEmail =regExEmail.test(email)
let validBCity= regExCity.test(bCity)
let validSCity= regExCity.test(sCity)
let validBCode = regExZipC.test(bCode)
let validSCode = regExZipC.test(sCode)

// Error 
const [error, setError] = useState({})
  error.missingTaxID = validTax? null:true
  error.missingResale = resale?  null:true
  error.missingFirstName = firstName? null:true
  error.missingLastName = lastName? null:true
  error.missingTitle = title? null:true
  error.missingEmail = validEmail? null:true
  error.missingPhoneNumber =validPhoneNumber? null:true
  error.missingHomeAddress = home? null:true
  error.missingCity = validCity? null:true
  error.missingState = state? null:true
  error.missingZipCode =validHomeCode? null:true
  error.missingCountry = country? null:true

// Error2 
const [error2, setError2] = useState({})
error2.missingBST = bStreet? null:true
error2.missingBCity = validBCity? null:true
error2.missingBState = bState? null:true
error2.missingBZipCode =validBCode? null:true
error2.missingBCountry = bCountry? null:true
error2.missingSTreet = sTreet? null:true
error2.missingSCity =validSCity? null:true
error2.missingSSTate = sState? null:true
error2.missingSZipCode = validSCode? null:true
error2.missingSCountry = sCountry? null:true;
 

const handleNext = ()=>{
       
        console.log(error)

 if( validTax&& resale && firstName&& lastName&& title&& validEmail&& validPhoneNumber&& home&& validCity&& state&& validHomeCode&& country)
 {       
          setScreen(false)
          console.log('Proceed')
          console.log(error)

        }else{

          setAlert(true)
          console.log('Missing fields')

        }
 

       
  }

  const handleSend = () =>{
    if(bStreet && validBCity && bState && validBCode && bCountry && sTreet && validSCity && sState && validSCode && sCountry){
   
      //ZOHO
  ZOHO.embeddedApp.on("PageLoad",function(data){
    console.log("Page Loaded with data");
    console.log(data);
     zID = data.Entity;
     zModule =  data.EntityId;
    var config = {
      Entity: zID ,
      RecordID: zModule ,
    };
    
  ZOHO.CRM.API.getRecord(config)
  .then(function(data){
 console.log(data)
 })
 
ZOHO.CRM.API.getBluePrint(config).then(function(data){
  console.log(data)
 })
 
 var config={
     
  Entity: zID,
  APIData:{
        "id": zModule,
        "Federal_Tax_ID":taxId,
        "Resale_Certificate":resale,
        "First_Name": firstName,
        "Last_Name": lastName,
        "Title_Owner": title,
        "Email": email,
        "Phone":phoneNumber,
        "Home_Address": home,
        "Home_City": city,
        "Home_Code":homeCode,
        "Home_Country":country,
        "Home_State":state,
        "Billing_Street":bStreet,
        "Billing_State":bState,
        "Billing_City": bCity,
        "Billing_Code": bCode,
        "Billing_Country": bCountry,
        "Store_Street": sTreet,
        "Store_City:":sCity,
        "Store_State": sState,
        "Store_Code": sCode,
        "Store_Country":sCountry
  },
  Trigger:["blueprint"]
}

 ZOHO.CRM.API.updateRecord(config)
.then(function(data){
    console.log(data)
})

ZOHO.CRM.BLUEPRINT.proceed(); 

ZOHO.CRM.UI.Popup.close()
.then(function(data){
    console.log(data)
})


 })

   ZOHO.embeddedApp.init()
 // ZOHO   
    
    }else{
      setAlert(true)
      console.log('Missing fields')
  
    }
  }

      const HandleClose = () =>{
         //ZOHO
  ZOHO.embeddedApp.on("PageLoad",function(data){
    console.log("Page Loaded with data");
    console.log(data);
     zID = data.Entity;
     zModule =  data.EntityId;
    var config = {
      Entity: zID ,
      RecordID: zModule ,
    };

    ZOHO.CRM.UI.Popup.close()
    .then(function(data){
        console.log(data)
    })
    console.log('pa')
  
 
 })

   ZOHO.embeddedApp.init()
 // ZOHO   
     
      
    }

   
 
  return (
    <div className="Container">
    {alert ?  <Alert severity="error">Sorry. Please validate that all information entered is correct and that there are no empty fields then, try again.</Alert>
    : <Alert severity="info">Please fill each field with a valid entry and then click on next</Alert> }
    {screen? <Box className="box" hide={true}>
      
       <TextField
             label="Federal Tax ID"
             error={error.missingTaxID?  true:false}
             type="text"
             color={validTax? "success" : null}
             onChange={e=> setTaxId(e.target.value)}
           /> 
         <TextField
             error={error.missingResale?  true:false}
             label="Resale Certificate"
             color={resale? "success" : null}
             id="Resale"
             onChange={e=> setResale(e.target.value)}
           /> 
           <TextField
             error={error.missingFirstName?  true:false}
             label="First Name"
             color={firstName? "success" : null}
             id="FirstName"
             onChange={e=> setFirstName(e.target.value)}
           /> 
            <TextField
             error={error.missingLastName?  true:false}
             label="Last Name"
             color={lastName? "success" : null}
             id="LastName"
             onChange={e=> setLastName(e.target.value)}
           /> 
           <TextField
             error={error.missingTitle?  true:false}
             label="Title"
             color={title? "success" : null}
             id="Title"
             onChange={e=> setTitle(e.target.value)}
           /> 
             <TextField
             error={error.missingEmail?  true:false}
             label="Email Address"
             color={validEmail? "success" : null}
             id="Email"
             onChange={e=> setEmail(e.target.value)}
           /> 
            <TextField
             error={error.missingPhoneNumber?  true:false}
             label="Phone Number"
             color={validPhoneNumber? "success" : null}
             id="PhoneNumber"
             onChange={e=> setPhoneNumber(e.target.value)}
           />
            <TextField
            error={error.missingHomeAddress?  true:false}
            label="Home Address"
            color={home? "success" : null}
            id="HomeAddress"
            onChange={e=> setHome(e.target.value)}
          /> 
          <TextField
            error={error.missingCity?  true:false}
            label="Home City"
            color={validCity? "success" : null}
            id="HomeCity"
            onChange={e=> setCity(e.target.value)}
          /> 
          <TextField
            error={error.missingState?  true:false}
            label="Home State"
            color={state? "success" : null}
            onChange={e=> setState(e.target.value)}
          /> 
          <TextField
            error={error.missingZipCode?  true:false}
            label="Home Zip Code"
            color={validHomeCode? "success" : null}
            id="HomeZCode"
            onChange={e=> setHomeCode(e.target.value)}
          /> 
            <TextField
            error={error.missingCountry?  true:false}
            label="Home Country"
            color={country? "success" : null}
            id="HomeCountry"
            onChange={e=> setCountry(e.target.value)}
          /> 
            </Box>:<Fetcher error2={error2}
            setBStreet={setBStreet}
            setBCity={setBCity}
            setBState={setBState}
            setBcode={setBcode}
            setBCountry={setBCountry}
            setSTreet={setSTreet}
            setSCity={setSCity}
            setSState={setSState}
            setSCode={setSCode}
            setSCountry={setSCountry}
            bStreet={bStreet}
            bCity={bCity}
            bState={bState}
            bCode={bCode}
            bCountry={bCountry}
            sTreet={sTreet}
            sCity={sCity}
            sState={sState}
            sCode={sCode}
            sCountry={sCountry}
            validBCity={validBCity}
            validSCity={validSCity}
            validBCode={validBCode}
            validSCode={validSCode}
            
            />}
      
          
          <div className="Buttons">
            {screen?<Button variant="contained" size="Medium" startIcon={<SendIcon  />}onClick={handleNext} id="btnSend" >
           Next
        </Button>:<Button variant="contained" size="Medium" startIcon={<SendIcon  />}onClick={handleSend} id="btnSend" >
           Send
        </Button> }
          
        <Button variant="outlined" color="error" size="Large" endIcon={<DeleteIcon />} onClick={HandleClose} id="btnCancel" >
          Cancel
        </Button>
        <Button variant="outlined" id="btnBack" onClick={()=> screen?   null:setScreen(true)}>Back</Button>
        </div>
    </div>
  );
}


export default Inputs;
