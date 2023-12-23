'use client';

import { scrapeAndStoreJobs } from '@/lib/actions';

export default function Home() {
  const handleSubmit = async () => {
    console.log('Scraping');
    const job = await scrapeAndStoreJobs(
      'https://www.glassdoor.co.uk/Job/software-engineer-jobs-SRCH_KO0,17.htm?jobTypeIndeed=CF3CP&seniorityType=entrylevel'
    );
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='text-5xl font-bold'>Barakah Board Landing Page</div>

      {/*<button onClick={handleSubmit} className='border-amber-900'>*/}
      {/*  Scrape Job*/}
      {/*</button>*/}
    </main>
  );
}
