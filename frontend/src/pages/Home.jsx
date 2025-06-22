import React from 'react'
import { Box, Container, Tabs, Text } from '@chakra-ui/react'
import Login from '@/components/auth/Login';
import Signup from '@/components/auth/Signup';
const Home = () => {
  const [value, setValue] = React.useState('first');
  return (
    <Container maxW={'xl'} centerContent>
      <Box
        d={"flex"}
        justifyContent={"center"}
        p={3}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px "}
        textAlign={"center"}
      >

        <Text fontSize={"4xl"}>NetLynk</Text>

      </Box>


      <Box  w={"100%"} borderRadius={"lg"} borderWidth={"1px"}>
        <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}>
          <Tabs.List color={"#444"} fontSize={"2xl"} justifyContent={"space-around"}>
            <Tabs.Trigger value="first">Log In</Tabs.Trigger>
            <Tabs.Trigger  value="second">Sign Up</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content    value="first"><Login/></Tabs.Content>
          <Tabs.Content value="second"><Signup/></Tabs.Content>
        </Tabs.Root>
      </Box>
    </Container>
  )
}

export default Home