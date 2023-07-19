const API_URL = 'http://localhost:8080';

async function httpGetPlanets() {
  try {
    const response = await fetch(`${API_URL}/planets`, { mode: 'no-cors' });

    // Since the response is opaque in "no-cors" mode, you won't be able to access the response data.
    // If you need to perform any specific actions based on the response, you can check the response status.
    if (response.status === 200) {
      console.log('Planets data fetched successfully.');
    } else {
      console.log('Failed to fetch planets data.');
    }
  } catch (error) {
    console.error('Error occurred while fetching planets:', error);
  }
}


async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};