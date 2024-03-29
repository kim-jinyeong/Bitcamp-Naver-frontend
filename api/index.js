import axios from "axios";  

const SERVER = `http://localhost:8080`
export const memberBmi = bmiRequest =>axios.post(`${SERVER}/member/bmi`,bmiRequest)
export const memberCalc = calcRequest =>axios.post(`${SERVER}/member/calc`,calcRequest)
export const memberGrade = gradeequest =>axios.post(`${SERVER}/member/grade`,gradeequest)
export const memberLogin =(loginRequest) =>axios.post(`${SERVER}/member/login`, loginRequest)
export const memberLotto = lottoRequest =>axios.post(`${SERVER}/member/lotto`,lottoRequest)