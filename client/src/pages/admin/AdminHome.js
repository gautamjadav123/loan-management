import React from "react";
import { Button, WrapItem } from "@chakra-ui/react";
export default function AdminHome() {
  return (
    <>
      <WrapItem display={"flex"} alignItems={"center"} justifyContent={"right"}>
        <Button colorScheme="telegram">Add New Loans</Button>
      </WrapItem>
    </>
  );
}
