import React from "react"
import { 
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer 
} from "../styles/global.styled"
import { SkillCard, SkillCardContainer } from "../styles/mySkillsCard.styled"
import { skills } from "../utils/data"




export const MySkills = () => {
    return(
        <PaddingContainer 
        id="skills"
        top="10%"
        bottom="10%"
        responsiveLeft="1rem"
        responsiveRight="1rem"
        >
            <FlexContainer 
            responsiveFlex  
            responsiveDirection='column-reverse'
            fullWidthChild 
            >
                <SkillCardContainer>
                    {skills.map((skill)=>(
                        <SkillCardContainer>
                            <SkillCard>
                                <IconContainer size="2.7rem" color="blue">
                                    {skill.icon }
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
                    <Heading as="h2" size="h2" top="0.5rem">
                        About <BlueText>Me</BlueText>
                    </Heading>  
                    <ParaText top="2rem" bottom="1.5rem">
                         lorem lorem lorem lorem lorem lore lorem lorem lorem lorem lorem loremm
                         lorem lorem lorem lorem lorem lorem
                         lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem
                         lorem lorem lorem lorem lorem lorem
                         lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem 
                    </ParaText>
                    <ParaText >
                         lorem lorem lorem lorem lorem lore lorem lorem lorem lorem lorem loremm
                         lorem lorem lorem lorem lorem lorem
                         lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem
                         lorem lorem lorem lorem lorem lorem
                         lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem 
                    </ParaText>
                </div>

            </FlexContainer>


        </PaddingContainer>
    )

}

