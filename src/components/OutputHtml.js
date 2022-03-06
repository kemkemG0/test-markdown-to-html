import styled from "styled-components";
const OutputHTML = ({html}) => {
    console.log(typeof(html))
    return(
        <Container>
            <span dangerouslySetInnerHTML={{ __html: html }}></span>
        </Container>
    )
}

export default OutputHTML;


const Container = styled.span`
    padding:50px;
    height: 80vh;
    width: 85%;
    border-radius: 5px;
    border: 1px solid purple;
    background-color:white;
    font-size:24px;
    overflow:scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;