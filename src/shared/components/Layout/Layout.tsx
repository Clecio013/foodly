import { Box } from "@chakra-ui/react"
import Navbar from "../Navbar"
import React, { ReactChildren, ReactChild, ReactNode, ReactFragment } from 'react';

type Props = {
  children:  ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <Box paddingTop={4}>
        <>
          {children}
        </>
      </Box>
    </>
  )
}

export default Layout
