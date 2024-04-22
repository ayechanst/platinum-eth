import { ReactNode } from "react";

export const CustomHeading1 = ({
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

export const CustomHeading2 = ({
  children,
}: {
  children: ReactNode;
}) => (
  <h2
    style={{
      fontSize: "28px",
      lineHeight: "1.5",
      color: "#B2F5EA",
    }}
  >
    {children}
  </h2>
);

export const CustomHeading3 = ({
  children,
}: {
  children: ReactNode;
}) => (
  <h3
    style={{
      fontSize: "24px",
      lineHeight: "1.5",
      color: "#B2F5EA",
    }}
  >
    {children}
  </h3>
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
