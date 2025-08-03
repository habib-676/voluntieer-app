import axios from "axios";

export const getApplicants = async () => {
  const { data } = await axios(`${import.meta.env.VITE_API_URL}/applications`);
  return data;
};
