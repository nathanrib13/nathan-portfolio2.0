import React from "react";

import { 
    PaddingContainer,
    FlexContainer,
    Heading,
    IconContainer, 
    ParaText,
    Button
} from "../../styles/global.styled"
import logo from '../../assets/logo2.png'

import { FaGithub } from "react-icons/fa";
import { ProjectImageContainer, TechStackCard, ProjectImg } from "../../styles/myProjects.styled";

export const Project = ({data}) => {
    return(
        <FlexContainer fullWidthChild>
            <div>
                <FlexContainer align="center" gap="1rem">
                    <Heading as="h3" size="h3" bottom="1rem">
                        {data.project_name}
                    </Heading>
                    <IconContainer color="blue" size="2rem">
                        <FaGithub/>
                    </IconContainer>
                </FlexContainer>

                <PaddingContainer top="1rem">
                    <FlexContainer gap="1.5rem">
                    {data.tech_stack.map((tech_stack)=> (
                        <TechStackCard>{tech_stack}</TechStackCard>
                    ))}
                    </FlexContainer>
                </PaddingContainer>

                <ParaText top="1.5rem" bottom="2rem">
                        {data.project_description} 
                </ParaText>
                <Button> Visit website</Button>
            </div>
            
          <ProjectImageContainer justify="flex-end">
            <ProjectImg src={logo} alt={data.project_name}/>
          </ProjectImageContainer>


        </FlexContainer>
    )
}