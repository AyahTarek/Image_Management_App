import { Header } from "@/components";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    margin-top: 0px;
    margin-bottom: 60px;
  }
`;

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Section>{children}</Section>
    </>
  );
};
