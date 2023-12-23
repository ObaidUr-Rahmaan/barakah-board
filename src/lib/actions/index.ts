'use server';

import { scrapeJob } from '@/lib/scraper';

export async function scrapeAndStoreJobs(jobUrl: string) {
  if (!jobUrl) {
    return;
  }

  try {
    const scrapedJob = await scrapeJob(jobUrl);
  } catch (error: any) {
    throw new Error(`Failed to scrape and store jobs: ${error.message}`);
  }
}
