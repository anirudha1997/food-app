exports.handler = async function (event, context) {
  const response = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
  );

  if (!response.ok) {
    // Handle error response (non-JSON)
    console.error(`Error: ${response.statusText}`);
    return {
      statusCode: response.status,
      body: JSON.stringify({ error: response.statusText }),
    };
  }

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
