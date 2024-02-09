import React from "react";
import {
  BlueText,
  FlexContainer,
  Heading,
  IconContainer,
  PaddingContainer,
  ParaText,
} from "../styles/global.styled";
import { SkillCard, SkillCardContainer } from "../styles/mySkillsCard.styled";
import { skills } from "../utils/data";

export const MySkills = () => {
  return (
    <PaddingContainer
      id="skills"
      top="10%"
      bottom="10%"
      responsiveLeft="1rem"
      responsiveRight="1rem"
    >
      <FlexContainer
        responsiveFlex
        responsiveDirection="column-reverse"
        fullWidthChild
      >
        <SkillCardContainer>
          {skills.map((skill) => (
            <SkillCardContainer>
              <SkillCard>
                <IconContainer size="3.5rem" color="blue">
                  {skill.icon}
                </IconContainer>
                <Heading as="h5" size="h5">
                  {skill.tech}
                </Heading>
              </SkillCard>
            </SkillCardContainer>
          ))}
        </SkillCardContainer>
        <div>
          <Heading as="h4" size="h4">
            MY SKILLS
          </Heading>
          <Heading as="h2" size="h2" top="0rem">
            About <BlueText>Me</BlueText>
          </Heading>
          <ParaText top="2rem" bottom="1rem">
            I am a Full Stack developer. Currently, I work as an assistant in
            the IT Quality and Processes department at Grupo Amep.
          </ParaText>
          <ParaText bottom="1rem">
            I began my journey in the technology field in January 2022. I found
            myself lost and unsatisfied in the area I had chosen. Seeking to
            change this scenario, I decided to pursue a career where I would
            have the freedom and autonomy to create and develop solutions, solve
            problems, and seek innovations.
          </ParaText>
          <ParaText bottom="1rem">
            This transition taught me to be resilient, to seek alternatives in
            the face of obstacles, and to view challenges as opportunities for
            growth. I found myself in the technology field and I am extremely
            fulfilled with my choice. One of my biggest achievements was
            completing the intensive one-year course at Kenzie, focused on
            simulating the dynamism of the job market.
          </ParaText>
          <ParaText bottom="1rem">
            During my time at Kenzie, I was able to develop various
            applications, create group projects following agile methodologies,
            and also participate in programming competitions, in addition to
            developing fundamental social skills to become a qualified
            developer. Currently, I am studying Analysis and Systems
            Development, and I believe that my degree will be a differential in
            developing my knowledge of the technical foundations of the
            technology field.
          </ParaText>
          <ParaText bottom="1rem">
            I have solid experience with JavaScript (ES6), HTML, CSS, React.js,
            TypeScript, Node, and PostgreSQL. Additionally, I have created
            projects using Tailwind, Next, Nest, Jest, Python, Django, PHP,
            Docker, among others. I am constantly staying updated on new
            technologies in the market.
          </ParaText>
        </div>
      </FlexContainer>
    </PaddingContainer>
  );
};
