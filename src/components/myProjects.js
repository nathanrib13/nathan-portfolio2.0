import React, { useState } from "react";
import { 
    PaddingContainer,
    Heading,
    BlueText,
    Button, 
    FlexContainer

} from "../styles/global.styled"
import { mainProjectsDetails, moreProjectsDetails } from "../utils/data";
import { Project } from "./layouts/Project";

export const MyProjects = () => {

    const [moreProjects, setMoreProjects] = useState(false)

    return(
        <PaddingContainer
            id="projects"
            top="5%"
            bottom="5%"
            responsiveTop="20%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
        >
            <Heading as="h4" size="h4">
                MY PROJECTS
            </Heading>
            <Heading as="h2" size="h2">
                What <BlueText>I have build</BlueText>
            </Heading>

            {mainProjectsDetails.map((projects)=>(
                <PaddingContainer key={projects.id} top="5rem" bottom="5rem"> 
                     <Project data={projects}/> 
                </PaddingContainer>
            ))}
            {moreProjects && 
            moreProjectsDetails.map((projects)=>(
                <PaddingContainer key={projects.id} top="5rem" bottom="5rem"> 
                     <Project data={projects}/> 
                </PaddingContainer>
            ))
            }
             <FlexContainer justify="center" responsiveFlex>
                <Button onClick={()=>setMoreProjects(!moreProjects)}>
                    {moreProjects ? "Hidden" : "Show More"}
                </Button>
            </FlexContainer>

        </PaddingContainer>

    )
}

