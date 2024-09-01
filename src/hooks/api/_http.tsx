const apiUrl = import.meta.env.VITE_GATEWAY_URL;

const defaultOptions: RequestInit = {
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
};

async function get(
  url: string = apiUrl,
  path?: string,
  options: RequestInit = {}
): Promise<any> {
  const newOptions = {
    ...defaultOptions,
    ...options,
    method: "GET",
  };

  const response = await fetch(url + path, newOptions);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

function put() {}

async function post(
  url: string = apiUrl,
  path?: string,
  options: RequestInit = {}
): Promise<any> {
  const newOptions = {
    ...defaultOptions,
    ...options,
    method: "POST",
  };

  const response = await fetch(url + path, newOptions);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export { get, put, post };
