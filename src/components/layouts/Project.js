import React from "react";

import {
  FlexContainer,
  Heading,
  IconContainer,
  PaddingContainer,
  ParaText,
} from "../../styles/global.styled";

import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import {
  ProjectImageContainer,
  ProjectImg,
  TechStackCard,
} from "../../styles/myProjects.styled";

export const Project = ({ data }) => {
  return (
    <FlexContainer fullWidthChild>
      <div>
        <FlexContainer align="center" gap="1rem">
          <Heading as="h3" size="h3" bottom="1rem">
            {data.project_name}
          </Heading>
        </FlexContainer>

        <PaddingContainer top="1rem">
          <FlexContainer gap="1.5rem">
            {data.tech_stack.map((tech_stack) => (
              <TechStackCard>{tech_stack}</TechStackCard>
            ))}
          </FlexContainer>
        </PaddingContainer>

        <ParaText top="1.5rem" bottom="2rem">
          {data.project_description}
        </ParaText>
        <FlexContainer align="center" gap="5px">
          <IconContainer color="blue" size="2rem">
            <TbWorld />
          </IconContainer>
          <IconContainer color="blue" size="2rem">
            <FaGithub />
          </IconContainer>
        </FlexContainer>
      </div>

      <ProjectImageContainer justify="flex-end">
        <ProjectImg src={data.project_img} alt={data.project_name} />
      </ProjectImageContainer>
    </FlexContainer>
  );
};
