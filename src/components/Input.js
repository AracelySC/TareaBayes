import React from "react";

 const CustomInput = ({ register, errors, errorMsg, name, ...rest }) => {
  return (
    <>
      <input {...register(name, { required: errors ? true : false })} {...rest} />
      {
        errors ?
          errors[name] && <p className="text-danger">{errorMsg}</p>
          :
          <></>}
    </>
  );
}


export default CustomInput;