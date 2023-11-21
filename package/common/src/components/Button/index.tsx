import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  type?: "primary" | "line" | "gray";
  onClick?: () => void;
}

export default function CommonButton({
  children,
  type = "primary",
  onClick,
}: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ type: "primary" | "line" | "gray" }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ type }) =>
    type === "primary"
      ? "#00f"
      : type === "gray"
        ? "#eee"
        : type === "line"
          ? "#fff"
          : "#fff"};
`;
