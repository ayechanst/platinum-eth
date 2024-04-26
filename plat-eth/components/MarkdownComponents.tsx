import { ReactNode } from "react";

const CustomHeading1 = ({
  children,
}: {
  children: ReactNode;
}) => (
  <h1
    style={{
      fontSize: "34px",
      lineHeight: "1.5",
      color: "#B2F5EA",
      margin: "0 0 5px 0",
    }}
  >
    {children}
  </h1>
);

const CustomHeading2 = ({
  children,
}: {
  children: ReactNode;
}) => (
  <h2
    style={{
      fontSize: "28px",
      lineHeight: "1.5",
      color: "#B2F5EA",
      margin: "0 0 5px 0",
    }}
  >
    {children}
  </h2>
);

const CustomHeading3 = ({
  children,
}: {
  children: ReactNode;
}) => (
  <h3
    style={{
      fontSize: "24px",
      lineHeight: "1.5",
      color: "#B2F5EA",
      margin: "0 0 5px 0",
    }}
  >
    {children}
  </h3>
);

const CustomParagraph = ({
  children,
}: {
  children: ReactNode;
}) => (
  <p style={{ lineHeight: "1.3", fontSize: "17px" }}>
    {children}
  </p>
);

const CustomList = ({
  children,
}: {
  children: ReactNode;
}) => <ul style={{ fontSize: "17px" }}>{children}</ul>;

// Custom image component with adjustable spacing
const CustomImage = ({ src }: { src: string }) => (
  <img
    src={src}
    style={{
      display: "inline-block",
      margin: "5px 5px 5px 5px",
    }}
  />
);

const CustomBold = ({
  children,
}: {
  children: ReactNode;
}) => (
  <b
    style={{
      fontSize: "19px",
      color: "#B2F5EA",
    }}
  >
    {children}
  </b>
);

export const options = {
  overrides: {
    h1: {
      component: CustomHeading1,
    },
    h2: {
      component: CustomHeading2,
    },
    h3: {
      component: CustomHeading3,
    },
    p: {
      component: CustomParagraph,
    },
    b: {
      component: CustomBold,
    },
    ul: {
      component: CustomList,
    },
    img: {
      component: CustomImage,
    },
  },
};
