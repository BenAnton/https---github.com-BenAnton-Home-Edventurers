/* eslint-disable react/prop-types */
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import Social from "../components/Social";
import Hero from "../components/Hero";

import Subject from "../components/Subject";

function Home({ openSignup }) {
  return (
    <MantineProvider>
      {
        <>
          <Hero openSignup={openSignup} />
          <Subject />
          <Social />
        </>
      }
    </MantineProvider>
  );
}

export default Home;
