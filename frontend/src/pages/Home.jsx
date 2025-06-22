import React from 'react'
import { Box, Container, Tabs, Text } from '@chakra-ui/react'
const Home = () => {
  const [value, setValue] = React.useState('first');
  return (
    <Container maxW={'xl'} centerContent>
      <Box
        d={"flex"}
        justifyContent={"center"}
        p={3}
        bg={"white"}
        w={"100%"}
        m={"40px 0 15px 0"}
        borderRadius={"lg"}
        borderWidth={"1px "}
        color={"#444"}
        textAlign={"center"}
      >

        <Text fontSize={"4xl"}>Make A Lynk</Text>

      </Box>


      <Box  w={"100%"} borderRadius={"lg"} borderWidth={"1px"}>
        <Tabs.Root value={value} onValueChange={(e) => setValue(e.value)}>
          <Tabs.List color={"#444"} fontSize={"2xl"} justifyContent={"space-around"}>
            <Tabs.Trigger value="first">First tab</Tabs.Trigger>
            <Tabs.Trigger  value="second">Second tab</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content    value="first">First panel</Tabs.Content>
          <Tabs.Content value="second">Second panel</Tabs.Content>
        </Tabs.Root>
      </Box>
    </Container>
  )
}

export default Home