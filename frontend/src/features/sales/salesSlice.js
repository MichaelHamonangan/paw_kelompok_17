import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import salesService from './salesService'

const initialState = {
    sales: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new sales
export const createSales = createAsyncThunk(
    'sales/create',
    async (salesData, thunkAPI) => {
        try {
        const token = thunkAPI.getState().auth.user.token
        return await salesService.createSales(salesData, token)
        } catch (error) {
        const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get user sales
export const getsales = createAsyncThunk(
    'sales/getAll',
    async (_, thunkAPI) => {
        try {
        const token = thunkAPI.getState().auth.user.token
        return await salesService.getsales(token)
        } catch (error) {
        const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

// Delete user sales
export const deleteSales = createAsyncThunk(
    'sales/delete',
    async (id, thunkAPI) => {
        try {
        const token = thunkAPI.getState().auth.user.token
        return await salesService.deleteSales(id, token)
        } catch (error) {
        const message =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

export const saleslice = createSlice({
    name: 'sales',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
        .addCase(createSales.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createSales.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.sales.push(action.payload)
        })
        .addCase(createSales.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getsales.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getsales.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.sales = action.payload
        })
        .addCase(getsales.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteSales.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteSales.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.sales = state.sales.filter(
            (sales) => sales._id !== action.payload.id
            )
        })
        .addCase(deleteSales.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    },
})

export const { reset } = saleslice.actions
export default saleslice.reducer