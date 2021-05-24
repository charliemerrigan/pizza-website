import pizzaPhoto from "../HarrysLogo.jpeg";
import { Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import bwPhoto from "../pizzadoughB&W.jpeg";
import Footer from "./Footer";

const Homepage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });

  const isTablet = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 414px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const isMobileDevice = useMediaQuery({ query: "(max-device-width: 500px" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

  const wrapperStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  };

  const mobileStyleDiv = {
    flex: "1",
    backgroundColor: "grey",
    // height: "100vh",
    width: "100%",
  };

  const desktopStyleDiv = {
    flex: "1",
    backgroundImage: `url(${bwPhoto})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "5vh",
    backgroundSize: "cover",
    backgroundColor: "#282c34",
    // height: "100vh",
    width: "100%",
  };

  const mobileStyleTitle = {
    minWidth: "200px",
    margin: "15vh auto auto auto",
    fontSize: "150%",
    backgroundColor: "white",
    border: "5px solid black",
    width: "50%",
    fontFamily: "cursive",
    padding: "25px",
  };

  const desktopStyleTitle = {
    margin: "23vh auto auto auto",
    color: "black",
    backgroundColor: "white",
    border: "5px solid black",
    width: "50%",
    fontFamily: "cursive",
    padding: "25px",
  };

  const styleTypeDiv =
    window.innerWidth >= 650 ? desktopStyleDiv : mobileStyleDiv;
  const styleTypeTitle =
    window.innerWidth >= 650 ? desktopStyleTitle : mobileStyleTitle;

  return (
    <div className="wrapper" style={wrapperStyle}>
      <div className="home" style={styleTypeDiv}>
        <h1 className="mainTitle" style={styleTypeTitle}>
          Harry's Pizza and Subs
        </h1>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Homepage;
