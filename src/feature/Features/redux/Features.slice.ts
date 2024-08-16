import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { type TStoreStatus } from "store"
import { type RootState } from "store/redux/store"
import { TFeature } from "../featuresTypes"
import { LS } from "common/LS"
import { featureList } from "../fixtures"

const storeName = "features"

export const featuresGetAll = createAsyncThunk(`${storeName}/featuresGetAll`, async () => {
  const list = featureList()
  return list
})

export const featuresEditItem = createAsyncThunk(`${storeName}/featuresEditItem`, async (item: TFeature) => {
  LS.set(item.title, item.value)
  return item
})

export const featuresRemoveItem = createAsyncThunk(`${storeName}/featuresRemoveItem`, async (item: TFeature) => {
  LS.remove(item.title)
  return item
})

export const featuresAdapter = createEntityAdapter<TFeature>()
const extraFields: {
  status: TStoreStatus
} = {
  status: "idle",
}
const initialState = featuresAdapter.getInitialState(extraFields)

export const FeaturesSlice = createSlice({
  name: storeName,
  initialState,
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(featuresGetAll.pending, state => {
        state.status = "pending"
      })
      .addCase(featuresGetAll.fulfilled, (state, action) => {
        featuresAdapter.setAll(state, action.payload)
        state.status = "succeeded"
      })
      .addCase(featuresEditItem.pending, state => {
        state.status = "pending"
      })
      .addCase(featuresEditItem.fulfilled, (state, action) => {
        featuresAdapter.setOne(state, action.payload)
        state.status = "succeeded"
      })
      .addCase(featuresRemoveItem.pending, state => {
        state.status = "pending"
      })
      .addCase(featuresRemoveItem.fulfilled, (state, action) => {
        featuresAdapter.setOne(state, action.payload)
        state.status = "succeeded"
      })
  },
})

export const FeaturesActions = FeaturesSlice.actions
export const FeaturesReducer = FeaturesSlice.reducer

export const {
  selectById: selectFeatureById,
  selectIds: selectFeatureIds,
  selectEntities: selectFeatureEntities,
  selectAll: selectAllFeatures,
  selectTotal: selectTotalFeatures,
} = featuresAdapter.getSelectors<RootState>(state => state.features)