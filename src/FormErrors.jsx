// import React from "react";

// export const formErrors = ({formErrors})=>
// <div>
//     {Object.keys(formErrors).map((name,i)=>{
        
//         if(formErrors[name].length>0){
//             return(
//                 <p key ={i}>{name}{formErrors[name]}</p>
//             )
//         }else{
//             return ""
//         }
//     })}
// </div>



import './App.css';
// import React from 'react';

// export const FormErrors=({formErrors })=>
//   <div>
//         {Object.keys(formErrors).map((name,i)=>{
//           if(formErrors[name].length>0){
//                 return(
//                    <p key={i}>{name} {formErrors[name]}</p>
//                  )
//           }
//           else{
//                 return(""); 
//           }
//         })}
//   </div>



import React from 'react';

export const FormErrors=({formErrors })=>
  <div>
        {Object.keys(formErrors).map((name,i)=>{
          if(formErrors[name].length > 0){
                return(<p key={i}>{name} {formErrors[name]}</p>
                 )
          }
          else{
                return(""); 
          }
        })}
  </div>
