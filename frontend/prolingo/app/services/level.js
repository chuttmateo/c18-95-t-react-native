import apiClient from "../utils/apiClient";

const getAllLevels = async (setLevels) => {
  const response = await apiClient.get("/levels");
  const data = response.data;
  setLevels(data);
};

export default getAllLevels;
