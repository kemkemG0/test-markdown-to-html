import { useState } from "react";
import styled from "styled-components";

const InputMarkdown = ({setMarkdown}) => {
    const [val, setVal] = useState("");
    const handleChange = (event) =>{
        const text =event.target.value; 
        console.log(text);
        setVal(text);
        setMarkdown(text);
    }
    return(
        <InputField value={val} onChange = {handleChange}/>
    )
}


export default InputMarkdown;


const InputField = styled.textarea`
    padding:50px;
    height: 80vh;
    width: 85%;
    border-radius: 5px;
    border: 1px solid whitesmoke;
    font-size:24px;
    overflow:scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;