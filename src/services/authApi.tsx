const env = import.meta.env;
const API_URL = `${env.VITE_API_END_ADDR}/login`;

interface FetchLoginDTO {
    email : string;
    password : string;
}

export const fetchLogin = async (fetchLoginDto : FetchLoginDTO) => {
  try{
    const response = await fetch(`${API_URL}`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(fetchLoginDto),
    });
    return response.json();
  }
  catch (err) {
    console.error(`Fetch Gagal : ${err}`);
    return {code : -1};
  }

};
