import axios from 'axios';

const apiCall = async (method: string, url: string, data?: any) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default apiCall;