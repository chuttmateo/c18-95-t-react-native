import apiClient from "../utils/apiClient";

<<<<<<< HEAD
export const getAllLevels = async (setLevels) => {
=======
const getAllLevels = async (setLevels) => {
>>>>>>> 83dd1cce8cdbde924cb3f7d353b8db21a41598cc
  const response = await apiClient.get("/levels");
  const data = response.data;
  setLevels(data);
};

<<<<<<< HEAD
export const getLevel = async (index, setLevel) => {
  const response = await apiClient.get(`/levels/${index}`);
  const data = response.data;
  setLevel(data)
};
=======
export default getAllLevels;
>>>>>>> 83dd1cce8cdbde924cb3f7d353b8db21a41598cc
