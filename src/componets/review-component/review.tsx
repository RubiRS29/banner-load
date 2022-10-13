import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';

  import { ReactElement } from 'react';
import { FiAlignCenter, FiCalendar, FiGrid, FiNavigation, FiTag } from 'react-icons/fi';
  
  interface FeatureProps {
    field: string;
    iconBg: string;
    icon?: ReactElement;
    text: string;
  }
  
  const Feature = ({ field, icon, iconBg, text }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={700}>{field} </Text>
        <Text as='samp'> {text} </Text> 
      </Stack>
    );
  };
  
  export default function Review() {
    return (
      <Container maxW={'5xl'} py={12} m={0}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Review
            </Text>
            <Heading>Review Phase</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
              Make sure that every field are right
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={FiGrid} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Position'}
                field={'Position'}
              />
              <Feature
                icon={<Icon as={FiTag} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                field={'Mode'}
                text={'Mode'}
              />
              <Feature
                icon={
                  <Icon as={FiAlignCenter} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Languaje'} 
                field={'Languaje'}
                

              />
              <Feature
                icon={
                  <Icon as={FiCalendar} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                field={'Relase Date'}
                text={'Relase Date'}
              />
            </Stack>
          </Stack>
          <Flex>

            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'public/static/es-mx-banner.jpg'
              }
              objectFit={'cover'}
            />

          </Flex>
        </SimpleGrid>
      </Container>
    );
  }