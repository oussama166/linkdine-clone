import { createSlice } from "@reduxjs/toolkit";

const intialSlice = {
  email: "",
  password: "",
  lastName: "",
  firstName: "",
  country: "",
  city: "",
  job: {
    title: "",
    company: "",
    startDate: "",
    employementType: "",
  },
  student: {
    school: "",
    startDate: "",
    endDate: "",
    degree: "",
    fieldOfStudy: "",
    over16: false,
  },
};

export const SignUpSlice = createSlice({
  name: "SignUp",
  initialState: intialSlice,
  reducers: {
    setInitialData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    setPersonalInfo: (state, action) => {
      state.lastName = action.payload.lastName;
      state.firstName = action.payload.firstName;
    },
    setLocationInfo: (state, action) => {
      state.country = action.payload.country;
      state.city = action.payload.city;
    },
    setJobInfo: (state, action) => {
      state.job.title = action.payload.title;
      state.job.company = action.payload.company;
      state.job.startDate = action.payload.startDate;
      state.job.employementType = action.payload.employementType;
    },
    setStudentInfo: (state, action) => {
      state.student.school = action.payload.school;
      state.student.startDate = action.payload.startDate;
      state.student.endDate = action.payload.endDate;
      state.student.degree = action.payload.degree;
      state.student.fieldOfStudy = action.payload.fieldOfStudy;
      state.student.over16 = action.payload.over16;
    },
  },
});

export const {
  setInitialData,
  setPersonalInfo,
  setLocationInfo,
  setJobInfo,
  setStudentInfo,
} = SignUpSlice.actions;
export default SignUpSlice.reducer;
