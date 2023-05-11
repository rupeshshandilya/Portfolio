import { Box, Heading, Text, Button, ButtonProps, Container } from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export default function Error(props: ButtonProps) {
  return (
    <Container maxW={'5xl'}>
    <Box textAlign="center" py={10} px={6}>
      <WarningTwoIcon boxSize={'50px'} color={'orange.300'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Error 404
      </Heading>
      <Text color={'gray.500'} maxW={'5xl'} mt={3} mb={2}>
      The page you're looking for does not seem to exist
      </Text>
      <NextLink href='/' passHref>
      <Button
       {...props}
       px={4}
       fontSize={'sm'}
       rounded={'full'}
       bg={'blue.400'}
       color={'white'}
    //    boxShadow={
    //      '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
    //    }
       _hover={{
         bg: 'blue.500',
       }}
       _focus={{
         bg: 'blue.500',
       }}>
        Go to Home
      </Button>
      </NextLink>
    </Box>
    </Container>
  );
}