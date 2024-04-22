import { ReactNode } from "react";

export const CustomHeading = ({
  children,
}: {
  children: ReactNode;
}) => (
  <h1
    style={{
      fontSize: "34px",
      lineHeight: "1.5",
      color: "#B2F5EA",
    }}
  >
    {children}
  </h1>
);

export const CustomParagraph = ({
  children,
}: {
  children: ReactNode;
}) => (
  <p style={{ lineHeight: "1.3", fontSize: "17px" }}>
    {children}
  </p>
);
