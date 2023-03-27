import type { NextPage } from "next";
import { AboutMe, Header, Resume } from "../components";
import { Meta } from "../modules/Home";
import { MainPage } from "../components/Style/StyledHomeContent";
import Timeline from "../components/Timeline/Timeline";

const Home: NextPage = () => {
  return (
    <>
      <Meta />

      <Header />
      <MainPage>
        <div className="container">
          <AboutMe />
          <Timeline/>
        </div>
        <Resume />
      </MainPage>
    </>
  );
};

export default Home;
