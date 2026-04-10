import { createAsyncThunk } from '@reduxjs/toolkit';
import logsService from './logsService';

export const fetchFailedFaceAttempts = createAsyncThunk(
  'logs/fetchFailedFaceAttempts',
  async (params, thunkAPI) => {
    try {
      return await logsService.getFailedFaceAttempts(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchLogsSummary = createAsyncThunk(
  'logs/fetchLogsSummary',
  async (_, thunkAPI) => {
    try {
      return await logsService.getLogsSummary();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchRecognitionAttempts = createAsyncThunk(
  'logs/fetchRecognitionAttempts',
  async (params, thunkAPI) => {
    try {
      return await logsService.getRecognitionAttempts(params);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const checkUnknownAttemptAlert = createAsyncThunk(
  'logs/checkUnknownAttemptAlert',
  async (_, thunkAPI) => {
    try {
      return await logsService.checkUnknownAttemptAlert();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchLiveMonitoring = createAsyncThunk(
  'logs/fetchLiveMonitoring',
  async (_, thunkAPI) => {
    try {
      return await logsService.getLiveMonitoring();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
