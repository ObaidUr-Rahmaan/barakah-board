import axios from 'axios';

export async function scrapeJob(url: string) {
  if (!url) {
    return;
  }

  // BrightData proxy configuration
  const username = String(process.env.BRIGHTDATA_USERNAME);
  const password = String(process.env.BRIGHTDATA_PASSWORD);
  const port = 22225;
  const session_id = (Math.random() * 1000000) | 0;
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  };

  try {
    // Fetch the job
    const response = await axios.get(url, options);
    console.log(response.data);
  } catch (error: any) {
    throw new Error(`Failed to scrape job: ${error.message}`);
  }
}
