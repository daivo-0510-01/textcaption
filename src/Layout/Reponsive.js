import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return isDesktop ? children : null;
};
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  return isTablet ? children : null;
};
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  return isMobile ? children : null;
};
export const Minimum = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  return isMobile ? children : null;
};
// export const Default = ({ children }) => {
//   const isNotMobile = useMediaQuery({ maxWidth: 768 });
//   return isNotMobile ? children : null;
// };
