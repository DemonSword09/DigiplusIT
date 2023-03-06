import { Text, Grid, GridItem, Image, IconButton } from '@chakra-ui/react';
import {EditIcon,DeleteIcon} from "@chakra-ui/icons"
import React from 'react';

function User(props) {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={6}>
      <GridItem w="100%" h="10" bg="blue.500">
        <Image src={props.image} width={100} height={100} />
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500">
        <Text>{props.name}</Text>
        <Text>{props.designation}</Text>
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500">
        <Text>{props.time}</Text>
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500">
        <Text>{props.status}</Text>
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500">
        <Text>{props.email}</Text>
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500">
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Call Sage"
          fontSize="20px"
          icon={<EditIcon />}
        />
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<DeleteIcon />}
        />
      </GridItem>
    </Grid>
  );
}

export default User;
