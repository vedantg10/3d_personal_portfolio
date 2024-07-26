// import React from "react";
// import styled from "styled-components";
// import { skills } from "../../data/constants";
// import { Tilt } from "react-tilt";

// const Skills = () => {
//   return (
//     <Container id="Skills">
//       <Wrapper>
//         <Title>Skills</Title>
//         <Desc
//           style={{
//             marginBottom: "40px",
//           }}
//         >
//           Here are some of my skills on which I have been working on for the
//           past 3 years.
//         </Desc>

//         <SkillsContainer>
//           {skills.map((skill, index) => (
//             <Tilt>
//               <Skill key={`skill-${index}`}>
//                 <SkillTitle>{skill.title}</SkillTitle>
//                 <SkillList>
//                   {skill.skills.map((item, index_x) => (
//                     <SkillItem key={`skill-x-${index_x}`}>
//                       <SkillImage src={item.image} />
//                       {item.name}
//                     </SkillItem>
//                   ))}
//                 </SkillList>
//               </Skill>
//             </Tilt>
//           ))}
//         </SkillsContainer>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Skills;
