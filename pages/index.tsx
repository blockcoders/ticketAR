import { ConnectWallet } from "@thirdweb-dev/react";
import { NextPage } from "next";
import { Heading, Stack } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Stack p={10}>
      <Heading>Ticketar 🎟️</Heading>
      <ConnectWallet />
    </Stack>
  );
};

export default Home;
