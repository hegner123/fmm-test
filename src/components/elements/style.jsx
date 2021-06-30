import styled  from "styled-components";

export const RowElement = styled.div`
padding: ${props => props.padding || "0" };
margin: ${props => props.margin || "0" };
display: ${props => props.display || "block"};
min-height: ${props => props.minHeight || "1px"};
justify-content: ${props => props.justifyContent || "flex-start"};
align-items: ${props => props.alignItems || "flex-start"};
background-image: ${props => `url(${props.backgroundImage})` || 'unset'}
`