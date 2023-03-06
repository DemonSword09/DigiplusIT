import React, { useEffect, useState } from 'react';
import { ChakraProvider, Grid, GridItem, theme, Text } from '@chakra-ui/react';
import User from './components/user';
import time from './utils';
function App() {
  const [users, setUsers] = useState([
    {
      image: 'https://unsplash.com/photos/iEEBWgY_6lA',
      name: 'ABC',
      designation: 'admin',
      time: time(),
      status:"active",
      email:'abc@gotgel.org'
    },
  ]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setUsers(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);
  return (
    <ChakraProvider theme={theme}>
      <Grid templateRows="100px 1fr">
        <Grid templateColumns="2fr 1fr 1fr 1fr" gap={8}>
          <GridItem w="100%" h="10" bg="blue.500">
            <Text>Photo</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
            <Text>time</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
            <Text>Status</Text>
          </GridItem>
          <GridItem w="100%" h="10" bg="blue.500">
            <Text>Email</Text>
          </GridItem>
        </Grid>
        {users.map(data => {
          <User props={data} />;
        })}
      </Grid>
    </ChakraProvider>
  );
}

export default App;
