import React, { useState } from "react";

const Redirect = (props) =>  {
  const [linker, setlinker] = useState ('');
    setlinker(props.loc)
    window.location = linker;
    return (<section>Redirecting...</section>); 
}

export default Redirect;