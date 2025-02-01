const API_URL = "http://localhost:5000/login";

interface FetchLoginDTO {
    email : string;
    password : string;
}

export const fetchLogin = async (fetchLoginDto : FetchLoginDTO) => {
  const response = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(fetchLoginDto),
  });
  return response.json();
};
