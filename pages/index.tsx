/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import { useUser } from '@auth0/nextjs-auth0';
import { Container, Heading, Text, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';
import JobCard from '../components/JobCard';
import PageLoader from '../components/PageLoader';
import { Job } from '../types';
import SearchInput from '../components/SearchInput';
import { findJobs } from '../services/jobs';
import ButtonGroup from '../components/ButtonGroup';

// @ts-ignore
export async function getServerSideProps({ res }) {
  const jobs = await findJobs('Developer', 20, 'desc', '1d');

  return {
    props: {
      // @ts-ignore
      jobs: jobs && jobs.jobs && jobs.jobs.length > 0 ? jobs.jobs : [],
    },
  };
}

interface Props {
  jobs: Job[];
}

const Home: NextPage<Props> = (props) => {
  const { error, isLoading: isLoadingUser } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [postedDate, setPostedDate] = useState<'1d' | '3d' | '7d' | '30d'>('30d');
  const [search, setSearch] = useState('Developer');
  const [jobs, setJobs] = useState(props.jobs);

  if (isLoadingUser) return <PageLoader />;

  if (error) return <div>{error.message}</div>;

  const searchForJobs = async (searchTerm: string, interval = '30d') => {
    setSearch(searchTerm);
    setIsLoading(true);

    // @ts-ignore
    const newJobs = await findJobs(searchTerm, 20, 'desc', interval);
    setJobs(newJobs.jobs);

    setIsLoading(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <Container
          flex={'1'}
          px={0}
          pb={32}
          maxW={{
            base: "100%",
            sm: "35rem",
            md: "43.75rem",
            lg: "57.5rem",
            xl: "75rem",
          }}
        >
          <Heading
            as="h1"
            mt={{ base: '8', md: '4' }}
            mb={{ base: '4', lg: '8' }}
            textAlign="center"
            lineHeight={2}
            bgGradient="linear(to-r, blue.400, blue.600)"
            backgroundClip="text"
            fontSize={{ base: 'xl', md: '4xl' }}
          >
            GET THE JOB YOU REALLY WANT
          </Heading>

          <SearchInput
            onSearch={(s) => {
              searchForJobs(s, postedDate);
            }}
          />

          <Text fontWeight={500} fontSize={'md'} mt="12" mb="4">
            Posted Date
          </Text>

          <ButtonGroup
            options={['1d', '3d', '7d', '30d']}
            onChange={(interval) => {
              setPostedDate(interval);
              searchForJobs(search, interval);
            }}
          />

          {
            isLoading ? (
              <PageLoader text="Searching..." />
            ) : (
              <>
                <Heading id="promos" mb="8" mt="12" ml="12" as="h3" fontSize="22" textAlign={'left'}>
                  {search} jobs
                </Heading>

                <VStack spacing="12">
                  {jobs && jobs.length > 0 && jobs.map((job, index) => (
                    <JobCard
                      key={job.jobId}
                      job={job}
                    />
                  ))}
                </VStack>
              </>
            )
          }

        </Container>

      </main>
    </div>
  );
};

export default Home;
