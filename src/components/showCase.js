import React from "react"
import { 
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer 
} from "../styles/global.styled"

const ShowCase = () => {
    return (
        <PaddingContainer 
            id="home"
            left="3%"
            top="15%"
            rigth="10%"
            bottom="10%"
        >
        <FlexContainer align="center" fullWidthCenter>
            <div>
            <Heading as="h2" size="h2">HELLO</Heading>
            <Heading as="h1" size="h1" top="3.5rem">I'm Nathan </Heading>
            </div>
        </FlexContainer>
        </PaddingContainer>
    )
}

    export default ShowCase