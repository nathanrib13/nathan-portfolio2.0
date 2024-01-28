import React from "react";
import { 
    PaddingContainer,
    Heading,
    BlueText,

} from "../styles/global.styled"
import { projectsDetails } from "../utils/data";
import { Project } from "./layouts/Project";

export const MyProjects = () => {
    return(
        <PaddingContainer
            id="projects"
            top="5%"
            bottom="5%"
        >
            <Heading as="h4" size="h4">
                MY PROJECTS
            </Heading>
            <Heading as="h2" size="h2">
                What <BlueText>I have build</BlueText>
            </Heading>

            {projectsDetails.map((projects)=>(
                <PaddingContainer key={projects.id} top="5rem" bottom="5rem"> 
                     <Project data={projects}/> 
                </PaddingContainer>
            ))}

        </PaddingContainer>

    )
}

