import apiClient from "../utils/apiClient";

export const getAllLevels = async (setLevels) => {
  const response = await apiClient.get("/levels");
  const data = response.data;
  setLevels(data);
};

export const getLevel = async (index, setLevel) => {
  const response = await apiClient.get(`/levels/${index}`);
  const data = response.data;
  setLevel(data)
};
