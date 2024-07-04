export async function fetchWeatherData() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=e8380e9f23134e7aa2470254242206&q=london');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data; // Return the data for further use

  } catch (error) {
    // Error handling
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to propagate it
  }
}

