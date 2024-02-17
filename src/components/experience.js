import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { ExpirienceContainer } from "../styles/expirience.styled";
import {
  BlueText,
  FlexContainer,
  Heading,
  PaddingContainer,
} from "../styles/global.styled";

export const Expirience = () => {
  return (
    <PaddingContainer id="experience" top="5%" bottom="10%">
      <Heading as="h4" size="h4" align="center">
        EXPERIENCE
      </Heading>
      <Heading as="h2" size="h2" align="center" top="0.5rem">
        Where <BlueText> I have Learned</BlueText>
      </Heading>
      <PaddingContainer top="3rem">
        <ExpirienceContainer>
          <Heading as="h3" size="h3" align="center">
            Professional
          </Heading>
          <FlexContainer direction="space-btween" align="center">
            <div>
              <BlueText>Amep</BlueText>
              <p>2023 - Presente</p>
            </div>
            <FaGraduationCap size="35px" />
            <span />
            <div className="xpText">
              <BlueText>Desenvolvedor de softaware</BlueText>
              <div />
              <p>
                Desenvolvimento de sistemas de senhas de guichê e sistemas de
                controle financeiro interno. Desenvolvimento de estratégias
                tecnológicas em prol do aprimoramento da qualidade da Amep.
                Responsável por criar fluxogramas com a finalidade de otimizar
                os processos internos da empresa.
              </p>
            </div>
          </FlexContainer>
          <FlexContainer direction="space-btween" align="center">
            <div>
              <BlueText>Freelancer</BlueText>
              <p>2023 - Presente</p>
            </div>
            <FaBriefcase size="35px" />
            <span />
            <div className="xpText">
              <BlueText>Desenvolvedor Full Stack</BlueText>
              <div />
              <p>
                Desenvolvimento de aplicações e sistemas de acordo com a demanda
                do cliente. Dentre as principais criações estão: Crição de
                portfolios online, ecommerces, cardápios online e atumatização
                de tarefas com a criação de robos.
              </p>
            </div>
          </FlexContainer>
          <Heading as="h3" size="h3" align="center">
            Educacional
          </Heading>
          <FlexContainer direction="space-btween" align="center">
            <div>
              <BlueText>IBMR</BlueText>
              <p>2023 - Presente</p>
            </div>
            <FaGraduationCap size="35px" />
            <span />
            <div className="xpText">
              <span />
              <BlueText>Análise e Desenvolvimento de Sistemas</BlueText>
              <div />
              <p>
                Inicie minha graduaçao em julho de 2023. A grade curricular é
                composta por diversos fundamentos da área de desenvolvimento de
                software, como po exemplo: sistemas distribuídos e mobile,
                gestão e qualidade de software, modelagem de software, sistemas
                computacionais e segurança.
              </p>
            </div>
          </FlexContainer>
          <FlexContainer direction="space-btween" align="center">
            <div>
              <BlueText>Kenzie</BlueText>
              <p>2022 - 2023</p>
            </div>
            <FaGraduationCap size="35px" />
            <span />
            <div className="xpText">
              <span />
              <BlueText>Desenvolvimento Full Stack</BlueText>
              <div />
              <p>
                Simulando um ambiente de trabalho, trabalhei com Sprints e
                entregas semanais seguindo padrões de metodologia ágil. Durante
                o curso foram mais 40 projetos prático realizados, pude
                aprender muito sobre o universo do desenvolvimento e como lidar
                com as dificuldades e desafios do mundo profissional. Aprendi
                diversas habilidades tecnicas e comportamentais.
              </p>
            </div>
          </FlexContainer>
        </ExpirienceContainer>
      </PaddingContainer>
    </PaddingContainer>
  );
};
