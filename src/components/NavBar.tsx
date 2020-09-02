import React from "react";
import { Box, Flex, Link } from "@chakra-ui/core";

interface Props {}
const NavBar: React.FC<Props> = () => {
  return (
    <Flex bg="tomato" p={4} ml="auto">
      <Box ml="auto">
        <Link color="white" mr={2}>
          登录
        </Link>
        <Link color="white">注册</Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
