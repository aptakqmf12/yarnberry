import { ChangeEvent } from "react";
import styled, { css } from "styled-components";

export interface InputProps {
  value: string;
  setValue: (v: string) => void;
  type?: "under-line" | "out-line" | "fill";
}

export default function CommonInput({
  value,
  setValue,
  type = "under-line",
}: InputProps) {
  return (
    <StyledInput
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
      type={type}
    />
  );
}

const StyledInput = styled.input<{ type: "under-line" | "out-line" | "fill" }>`
  ${({ type }) =>
    type === "under-line" &&
    css`
      border-bottom: 1px #eee solid;
    `}

  ${({ type }) =>
    type === "out-line" &&
    css`
      border: 1px #eee solid;
      border-radius: 4px;
    `}

    ${({ type }) =>
    type === "fill" &&
    css`
      background-color: #565656;
      color: #fff;
    `}
`;
