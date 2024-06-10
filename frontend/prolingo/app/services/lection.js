import apiClient from "../utils/apiClient";

export const getLection = async (index, setSubLessons) => {
  const response = await apiClient.get(`/lections/${index}`);
  const data = response.data.sublections;
  setSubLessons(data);
};
