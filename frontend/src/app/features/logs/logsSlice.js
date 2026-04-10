import { createSlice } from '@reduxjs/toolkit';
import { 
  fetchFailedFaceAttempts, 
  fetchLogsSummary, 
  fetchRecognitionAttempts, 
  checkUnknownAttemptAlert, 
  fetchLiveMonitoring 
} from './logsThunks';

const initialState = {
  attempts: [],
  total: 0,
  recognitionAttempts: [],
  recognitionTotal: 0,
  summary: {},
  liveMonitoring: null,
  unknownAlert: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};

const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    clearLogsData: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    const beginRequest = (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    };

    const completeRequest = (state) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.message = '';
    };

    const failRequest = (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload || 'Something went wrong';
    };

    builder
      // fetchFailedFaceAttempts
      .addCase(fetchFailedFaceAttempts.pending, beginRequest)
      .addCase(fetchFailedFaceAttempts.fulfilled, (state, action) => {
        completeRequest(state);
        state.attempts = action.payload.data || [];
        state.total = action.payload.total || (action.payload.data?.length || 0);
      })
      .addCase(fetchFailedFaceAttempts.rejected, failRequest)
      
      // fetchLogsSummary
      .addCase(fetchLogsSummary.pending, beginRequest)
      .addCase(fetchLogsSummary.fulfilled, (state, action) => {
        completeRequest(state);
        state.summary = action.payload.data || {};
      })
      .addCase(fetchLogsSummary.rejected, failRequest)

      // fetchRecognitionAttempts
      .addCase(fetchRecognitionAttempts.pending, beginRequest)
      .addCase(fetchRecognitionAttempts.fulfilled, (state, action) => {
        completeRequest(state);
        state.recognitionAttempts = action.payload.data || [];
        state.recognitionTotal = action.payload.total || (action.payload.data?.length || 0);
      })
      .addCase(fetchRecognitionAttempts.rejected, failRequest)
      
      // checkUnknownAttemptAlert
      .addCase(checkUnknownAttemptAlert.pending, beginRequest)
      .addCase(checkUnknownAttemptAlert.fulfilled, (state, action) => {
        completeRequest(state);
        state.unknownAlert = action.payload.data;
      })
      .addCase(checkUnknownAttemptAlert.rejected, failRequest)
      
      // fetchLiveMonitoring
      .addCase(fetchLiveMonitoring.pending, beginRequest)
      .addCase(fetchLiveMonitoring.fulfilled, (state, action) => {
        completeRequest(state);
        state.liveMonitoring = action.payload.data;
      })
      .addCase(fetchLiveMonitoring.rejected, failRequest);
  },
});

export const { reset, clearLogsData } = logsSlice.actions;
export default logsSlice.reducer;
