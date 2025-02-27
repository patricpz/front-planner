import { create } from 'zustand'

export type Data = {
    name: string,
    destination: string,
    departureDate: string,
    returnDate: string,
    numberOfTravelers: string,
    objective: string,
}

type DataState = {
    data: Data,
    setPageOne: (data: Omit<Data, "departureDate" | "returnDate" | "numberOfTravelers" | "objective" >) => void;
    setPageTwo: (data: Pick<Data, "departureDate" | "returnDate" | "numberOfTravelers" | "objective" >) => void
}

export const useData = create<DataState>((set) => ({
    data: {
        name: '',
        destination: '',
        departureDate: '',
        returnDate: '',
        numberOfTravelers: '',
        objective: '',
    },
    setPageOne: (data) => set((state) => ({ data: {...state.data, ...data} })),
    setPageTwo: (data) => set((state) => ({ data: {...state.data, ...data} })),
}))