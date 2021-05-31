import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {RootState} from './rootReducer';

export const fetchData = createAsyncThunk('data/getData', async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian',
  );
  return await response.json();
});

type DataState = {
  data: Array<{[key: string]: any}>;
  isLoading?: boolean;
};

export const initialState: DataState = {
  isLoading: false,
  data: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, {payload}) => {
      state.data = payload.meals;
    });
  },
});
export const {reducer} = dataSlice;
export const useData = () => useSelector((state: RootState) => state.data);
