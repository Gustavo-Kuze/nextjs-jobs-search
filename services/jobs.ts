import axios from 'axios';

const findJobs = async (searchTerm = 'Developer', resultsPerPage = 10, sortBy = 'asc', postingDateRange: '1d' | '3d' | '7d' | '30d' = "30d") => {
  const { data } = await axios.post(`https://www.zippia.com/api/jobs`, {
    "companySkills": true,
    "dismissedListingHashes": [],
    "fetchJobDesc": sortBy === 'desc',
    "jobTitle": searchTerm,
    "locations": [],
    "numJobs": resultsPerPage,
    postingDateRange,
    "previousListingHashes": []
  });

  return data;
};

export {
  findJobs,
};
