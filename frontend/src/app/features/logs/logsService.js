import axiosInstance from "../../../utils/axiosInstance";

const API_URL = import.meta.env.VITE_API_URL + '/logs';

const handleApiError = (error) => {
  const message = 
    error.response?.data?.message ||
    error.message ||
    'Something went wrong';
  
  return Promise.reject(message);
};

const logsService = {
  getFailedFaceAttempts: async (params) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/failed-face`, { params });
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  getLogsSummary: async () => {
    try {
      const response = await axiosInstance.get(`${API_URL}/summary`);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  getRecognitionAttempts: async (params) => {
    try {
      const response = await axiosInstance.get(`${API_URL}/recognition-attempts`, { params });
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  checkUnknownAttemptAlert: async () => {
    try {
      const response = await axiosInstance.get(`${API_URL}/alerts/check`);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  },

  getLiveMonitoring: async () => {
    try {
      const response = await axiosInstance.get(`${API_URL}/live`);
      return response.data;
    } catch (error) {
      return handleApiError(error);
    }
  }
};

export default logsService;
