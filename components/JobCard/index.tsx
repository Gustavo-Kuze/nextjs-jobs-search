import { Job } from '../../types';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react';

interface Props {
  job: Job;
  onClick?: () => void;
}

const JobCard: React.FC<Props> = ({
  job,
  onClick = () => { },
}) => {
  return (
    <Center w={'full'} border="1px solid #eaeaea" borderRadius={'lg'}>
      <Box
        role={'group'}
        p={6}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        transition='all .3s ease'
        _hover={{
          boxShadow: 'lg'
        }}
        onClick={onClick}
      >
        <Stack pt={10} align={'center'} spacing="4">
          <Heading fontSize={'xl'} fontFamily={'body'} fontWeight={'bold'}>
            {job.jobTitle}
          </Heading>
          <Stack direction={'row'} align={'center'} p="10">
            {
              job.jobDescription && (
                <div dangerouslySetInnerHTML={{
                  __html: job.jobDescription.slice(0, 200) + '...'
                }}>
                </div>
              )
            }

          </Stack>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={500} fontSize={'md'}>
              {job.companyName}
            </Text>
          </Stack>
        </Stack>

        <Button
          mt="4"
          shadow={'lg'}
          bg="blue.500"
          size="lg"
          _hover={{
            bg: 'blue.400',
            shadow: 'md',
          }}
          _active={{
            bg: 'blue.600',
            shadow: 'md',
          }}
        >
          <Text fontSize={'sm'} color="white" >Apply</Text>
        </Button>
      </Box>
    </Center>
  );
};

export default JobCard;