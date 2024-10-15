export const useBaseService = () => {
  const getRequest = async (url) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      return response.json();
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
  };

  const postRequest = async (url, payload) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      return response.json();
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
  };

  const putRequest = async (url, payload) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      return response.json();
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
  };

  const deleteRequest = async (url) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      return response.json();
    } catch (error) {
      console.error(`Error fetching ${url}:`, error);
    }
  };

  return { getRequest, postRequest, putRequest, deleteRequest };
};
