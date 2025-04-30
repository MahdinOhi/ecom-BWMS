// src/components/Login/SocialButton.jsx
import React from "react";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    margin: "0 8px",
    boxShadow: theme.shadows[2],
    "&:hover": {
        backgroundColor: "#f0f0f0",
    },
}));

const SocialButton = ({ icon }) => (
    <StyledIconButton>
        {icon}
    </StyledIconButton>
);

export default SocialButton;
