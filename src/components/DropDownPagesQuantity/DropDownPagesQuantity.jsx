import React from "react";
import classes from ".//DropDownPagesQuantity.module.scss";
import Dropdown from "react-dropdown";
import 'react-dropdown/style.css';



const DropDownPagesQuantity = ({setQuantityOnPage,  repoQuantityPerPage}) =>{

    const options = [
        '6', '9', '12'
    ]

   return(
       <div className={classes.dropdownwrapper}>
           <Dropdown options={options}
                     onChange={(options) => {
                         setQuantityOnPage(parseInt(options.value))
                     }}
                     placeholder={repoQuantityPerPage}/>
       </div>
   )
}

export default DropDownPagesQuantity;


