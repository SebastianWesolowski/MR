const API_KEY = "live_orJlw66El1bGsRoYkUsnVOP23zUsFpsjqpPYzITGgSCNtSjK3b0aDByj0hFtzyMJ";
const API_URL = `https://api.thecatapi.com/v1/`;

export const fetchApiData = ({ method, body, endpoint }: any) => {
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", API_KEY);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(body);

  const requestOptions: any = {
    method,
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch(API_URL + endpoint, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error("error", error));
};
