export const fetchService = async (url: string, reqMethod: string, body?: any) => {
  let init: RequestInit = {
    method: reqMethod.toUpperCase(),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const response = await fetch(url, init);
    return await response.json();
  } catch (error) {
    console.error('Ошибка:', error);
  }
};

