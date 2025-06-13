import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styled from "@emotion/styled";
import Navbar from "../components/navbar";
import { ArrowBack } from "@mui/icons-material";

const PageContainer = styled.div`
  padding: 32px 16px 80px 16px;
  min-height: 100vh;
  background: #fafbfc;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: #222;
  width: 90px;
  font-size: 1rem;
  cursor: pointer;
  padding: 4px 8px 4px 0;
  transition: color 0.2s;
  &:hover {
    color: #e53935;
  }
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  color: #222;
  flex: 1;
  text-align: left;
`;

export default function GamizoCoins() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <PageContainer>
        <HeaderRow>
          <BackButton onClick={() => navigate(-1)} aria-label="Back">
            <ArrowBack />
            Back
          </BackButton>
          <Title>GamizoCoins</Title>
        </HeaderRow>
        <p>This is the GamizoCoins page. Coming soon!</p>
      </PageContainer>
    </>
  );
}