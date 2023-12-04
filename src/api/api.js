// import * as axios from "axios";
// import {readFromStorage} from "./storage";
// // import ShowNotification from "../components/common/Notification/ShowNotification"
//
// const localToken=readFromStorage("accessToken");
// let  access_token=  localToken ? localToken :  null;
//
// export let fileUrl= ''
// let baseURL = ''
// if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
//     fileUrl= 'http://localhost:8100'
//     baseURL =fileUrl+ "/api/"
// }else {
//     fileUrl= 'https://api.medicschool.az/'
//     baseURL =fileUrl.slice(0, fileUrl.length - 1)  +":443/api/"
// }
// const instance = axios.create({
//         baseURL: baseURL,
//         // withCredentials:true,
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*',
//             // 'Access-Control-Allow-Credentials':true,
//             'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//             // 'Content-Security-Policy':
//             //     "script-src 'strict-dynamic' 'unsafe-inline' http: https:; object-src 'none'; base-uri 'none';"
//         }
//     }
// );
//
// export const TimeFormatChanger = (time)=>{
//     let changedTime= time.replace('T',' ').replaceAll('-','.').substring(0,19)
//     let date = changedTime.substring(0,10)
//     const [year,month,day] = date.split(".")
//     let newDate= day+"."+month+"."+year
//     let timem = changedTime.substring(10,19)
//     return newDate+timem
// }
//
// export const checkAppointmentStatus =(appoId) =>  {
//     return instance.get(`/qrchecker/${appoId}`,{
//     }).then(response => {
//         debugger
//         if (response.status === 200) return response.data
//     })
//         .catch(error => {
//             if (error.response.status === 401)
//                 ShowNotification("Credential Error", "Please check user data", "danger")
//             // alert("Please check user data")
//             else {
//                 ShowNotification("Credential Error", error.message, "danger")
//                 console.log("login.jpeg error network")
//                 // alert(error.message)
//             }
//         })
// }
//
// export const authAPI = {
//     login(email, password){
//         return instance.post(`/login`,{
//             email, password
//         } ).then(response =>  {
//             debugger
//             if(response.status === 200)
//                 return response.data
//         })
//             .catch(error => {
//                 if(error.response.status === 401)
//                     ShowNotification("Credential Error","Please check user data","danger")
//                 // alert("Please check user data")
//                 else{
//                     ShowNotification("Credential Error",error.message,"danger")
//                     console.log("login.jpeg error network")
//                     // alert(error.message)
//                 }
//             })
//     },
//     register(name, email, password){
//         return instance.post(`/register`,{
//             name, email, password
//         } ).then(response =>  {
//             if(response.status === 200) return response.data
//         })
//             .catch(error => {
//                 if(error.response.status === 401)
//                     ShowNotification("Credential Error","Please check user data","danger")
//                 // alert("Please check user data")
//                 else{
//                     ShowNotification("Credential Error",error.message,"danger")
//                     console.log("login.jpeg error network")
//                     // alert(error.message)
//                 }
//             })
//     },
//     logout() {
//         return instance.post(`/logout`).then(response => {
//             if (response.status === 200) return response.data
//         })
//             .catch(error => {
//                 if (error.response.status === 401)
//                     ShowNotification("Credential Error", "Please check user data", "danger")
//                 // alert("Please check user data")
//                 else {
//                     ShowNotification("Credential Error", error.message, "danger")
//                     console.log("login.jpeg error network")
//                     // alert(error.message)
//                 }
//             })
//     },
//     user() {
//         return instance.get(`/user`).then(response => {
//             if (response.status === 200) return response.data
//         })
//             .catch(error => {
//                 if (error.response.status === 401)
//                     ShowNotification("Credential Error", "Please check user data", "danger")
//                 // alert("Please check user data")
//                 else {
//                     ShowNotification("Credential Error", error.message, "danger")
//                     console.log("login.jpeg error network")
//                     // alert(error.message)
//                 }
//             })
//     }
// }
// export const productsAPI = {
//     getProducts(page=0,size=50){
//         return instance.get(`/products/page=${page}/size=${size}` ).then(response =>  {
//             if(response.status === 200) return response.data
//             debugger
//         })
//             .catch(error => {
//                 debugger
//                 if(error.response !==undefined)
//                     ShowNotification("Credential Error","Please check user data","danger")
//                 // alert("Please check user data")
//                 else{
//                     // ShowNotification("Server Response Error",error.message,"danger")
//                     // console.log("login.jpeg error network")
//                     // alert(error.message)
//                 }
//             })
//     },
//     // addProduct(title, content, youtubeLink,imgUrl,status, productType,price,startDate,endDate){
//     //     return instance.post(`/products`,{
//     //         title, content, youtubeLink,imgUrl,status, productType,price,startDate,endDate
//     //     } ).then(response =>  {
//     //         if(response.status === 200) return response.data
//     //     })
//     //         .catch(error => {
//     //             if(error.response.status === 401)
//     //                 ShowNotification("Credential Error","Please check user data","danger")
//     //             // alert("Please check user data")
//     //             else{
//     //                 ShowNotification("Credential Error",error.message,"danger")
//     //                 console.log("login.jpeg error network")
//     //                 // alert(error.message)
//     //             }
//     //         })
//     // },
//     // editProduct(id,title, content, youtubeLink,imgUrl,status, productType,price,startDate,endDate) {
//     //     return instance.put(`/products/${id}`,{
//     //         title, content, youtubeLink,imgUrl,status, productType,price,startDate,endDate
//     //     }).then(response => {
//     //         if (response.status === 200) return response.data
//     //     })
//     //         .catch(error => {
//     //             if (error.response.status === 401)
//     //                 ShowNotification("Credential Error", "Please check user data", "danger")
//     //             // alert("Please check user data")
//     //             else {
//     //                 ShowNotification("Credential Error", error.message, "danger")
//     //                 console.log("login.jpeg error network")
//     //                 // alert(error.message)
//     //             }
//     //         })
//     // },
//     // deleteProduct(id) {
//     //     return instance.delete(`/products/${id}`).then(response => {
//     //         if (response.status === 200) return response.data
//     //     })
//     //         .catch(error => {
//     //             if (error.response.status === 401)
//     //                 ShowNotification("Credential Error", "Please check user data", "danger")
//     //             // alert("Please check user data")
//     //             else {
//     //                 ShowNotification("Credential Error", error.message, "danger")
//     //                 console.log("login.jpeg error network")
//     //                 // alert(error.message)
//     //             }
//     //         })
//     // }
// }
// export const productTypesAPI = {
//     getProductTypes(){
//         return instance.get(`/productTypes` ).then(response =>  {
//             if(response.status === 200) return response.data
//         })
//             .catch(error => {
//                 if(error.response.status === 401)
//                     ShowNotification("Credential Error","Please check user data","danger")
//                 // alert("Please check user data")
//                 else{
//                     ShowNotification("Credential Error",error.message,"danger")
//                     console.log("login.jpeg error network")
//                     // alert(error.message)
//                 }
//             })
//     },
//     // addProductType(name,status=1){
//     //     return instance.post(`/productTypes`,{
//     //         name,status
//     //     } ).then(response =>  {
//     //         if(response.status === 200) return response.data
//     //     })
//     //         .catch(error => {
//     //             if(error.response.status === 401)
//     //                 ShowNotification("Credential Error","Please check user data","danger")
//     //             // alert("Please check user data")
//     //             else{
//     //                 ShowNotification("Credential Error",error.message,"danger")
//     //                 console.log("login.jpeg error network")
//     //                 // alert(error.message)
//     //             }
//     //         })
//     // },
//     // editProductType(id,name,status) {
//     //     return instance.put(`/productTypes/${id}`,{
//     //         name,status
//     //     }).then(response => {
//     //         if (response.status === 200) return response.data
//     //     })
//     //         .catch(error => {
//     //             if (error.response.status === 401)
//     //                 ShowNotification("Credential Error", "Please check user data", "danger")
//     //             // alert("Please check user data")
//     //             else {
//     //                 ShowNotification("Credential Error", error.message, "danger")
//     //                 console.log("login.jpeg error network")
//     //                 // alert(error.message)
//     //             }
//     //         })
//     // },
//     // deleteProductType(id) {
//     //     return instance.delete(`/productTypes/${id}`).then(response => {
//     //         if (response.status === 200) return response.data
//     //     })
//     //         .catch(error => {
//     //             if (error.response.status === 401)
//     //                 ShowNotification("Credential Error", "Please check user data", "danger")
//     //             // alert("Please check user data")
//     //             else {
//     //                 ShowNotification("Credential Error", error.message, "danger")
//     //                 console.log("login.jpeg error network")
//     //                 // alert(error.message)
//     //             }
//     //         })
//     // }
// }
// export const blogAPI = {
//     getBlogs(page,size){
//         return instance.get(`/blogs/page=${page}/size=${size}`  ).then(response =>  {
//             debugger
//             if(response.status === 200) return response
//         })
//             .catch(error => {
//                 debugger
//                 if(error.response!=undefined && error.response.status === 401)
//                     ShowNotification("Credential Error","Please check user data","danger")
//                 // alert("Please check user data")
//                 else{
//                     ShowNotification("Network Error",error.message,"danger")
//                     console.log("error network")
//                 }
//             })
//     },
//     getBlogById(id){
//         return instance.get(`/blog/${id}`)
//             .then(response=>{
//                 debugger
//                 if(response.status===200) return response
//             }).catch(error=>{
//                 if(error.response.status === 401)
//                     ShowNotification("Credential Error","Please check user data","danger")
//                 // alert("Please check user data")
//                 else{
//                     ShowNotification("Credential Error",error.message,"danger")
//                     console.log("login.jpeg error network")
//                 }
//             })
//     }
//     // addblog(title, content, youtubeLink,imgUrl,status=1){
//     //     return instance.post(`/blogs`,{
//     //         title, content, youtubeLink,imgUrl,status
//     //     } ).then(response =>  {
//     //         if(response.status === 200) return response.data
//     //     })
//     //         .catch(error => {
//     //             if(error.response.status === 401)
//     //                 ShowNotification("Credential Error","Please check user data","danger")
//     //             // alert("Please check user data")
//     //             else{
//     //                 ShowNotification("Credential Error",error.message,"danger")
//     //                 console.log("login.jpeg error network")
//     //                 // alert(error.message)
//     //             }
//     //         })
//     // },
//     // editblog(id,title, content, youtubeLink,imgUrl,status) {
//     //     return instance.put(`/blogs/${id}`,{
//     //         title, content, youtubeLink,imgUrl,status
//     //     }).then(response => {
//     //         if (response.status === 200) return response.data
//     //     })
//     //         .catch(error => {
//     //             if (error.response.status === 401)
//     //                 ShowNotification("Credential Error", "Please check user data", "danger")
//     //             // alert("Please check user data")
//     //             else {
//     //                 ShowNotification("Credential Error", error.message, "danger")
//     //                 console.log("login.jpeg error network")
//     //                 // alert(error.message)
//     //             }
//     //         })
//     // },
//     // deleteblog(id) {
//     //     return instance.delete(`/blogs/${id}`).then(response => {
//     //         if (response.status === 200) return response.data
//     //     })
//     //         .catch(error => {
//     //             if (error.response.status === 401)
//     //                 ShowNotification("Credential Error", "Please check user data", "danger")
//     //             // alert("Please check user data")
//     //             else {
//     //                 ShowNotification("Credential Error", error.message, "danger")
//     //                 console.log("login.jpeg error network")
//     //                 // alert(error.message)
//     //             }
//     //         })
//     // }
// }
// export const salesAPI = {
//     addSales(fullName, email, profession,jobName, mobile,serialNumber,paymentStatus,productType,productId,price,orderDate){
//         debugger
//         return instance.post(`/sales`,{
//             fullName, email, profession,jobName, mobile,serialNumber,paymentStatus,productType,productId,price,orderDate
//         } ).then(response =>  {
//             debugger
//             if(response.status === 201) return response.data
//         })
//             .catch(error => {
//                 debugger
//                 if(error.response.status === 401)
//                     ShowNotification("Credential Error","Please check user data","danger")
//                 // alert("Please check user data")
//                 else{
//                     ShowNotification("Credential Error",error.message,"danger")
//                     console.log("login.jpeg error network")
//                     // alert(error.message)
//                 }
//             })
//     },
//     // getSales(){
//     //     return instance.get(`/sales` ).then(response =>  {
//     //         if(response.status === 200) return response.data
//     //     })
//     //         .catch(error => {
//     //             if(error.response.status === 401)
//     //                 ShowNotification("Credential Error","Please check user data","danger")
//     //             // alert("Please check user data")
//     //             else{
//     //                 ShowNotification("Credential Error",error.message,"danger")
//     //                 console.log("login.jpeg error network")
//     //                 // alert(error.message)
//     //             }
//     //         })
//     // },
//     editSalesStatus(id,paymentStatus,a) {
//         return instance.put(`/updatesales/${id}`,{
//             paymentStatus,a
//         }).then(response => {
//             if (response.status === 200) return response.data
//         })
//             .catch(error => {
//                 if (error.response.status === 401)
//                     ShowNotification("Credential Error", "Please check user data", "danger")
//                 // alert("Please check user data")
//                 else {
//                     ShowNotification("Credential Error", error.message, "danger")
//                     console.log("login.jpeg error network")
//                     // alert(error.message)
//                 }
//             })
//     },
//     // deleteSales(id) {
//     //     return instance.delete(`/sales/${id}`).then(response => {
//     //         if (response.status === 200) return response.data
//     //     })
//     //         .catch(error => {
//     //             if (error.response.status === 401)
//     //                 ShowNotification("Credential Error", "Please check user data", "danger")
//     //             // alert("Please check user data")
//     //             else {
//     //                 ShowNotification("Credential Error", error.message, "danger")
//     //                 console.log("login.jpeg error network")
//     //                 // alert(error.message)
//     //             }
//     //         })
//     // }
// }
//
// const instance1 = axios.create({
//         // baseURL: 'http://127.0.0.1:8000/api/',
//         baseURL: 'https://api.medicschool.az:443/api/',
//         withCredentials:true,
//         headers: {
//             'Content-Type': 'text/xml',
//             'Access-Control-Allow-Origin': '*',
//             // 'Access-Control-Allow-Credentials':true,
//             // 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//             // 'Content-Security-Policy':
//             //     "script-src 'strict-dynamic' 'unsafe-inline' http: https:; object-src 'none'; base-uri 'none';"
//         }
//     }
// );
//
// export const kapitalAPI = {
//     addOrCheckPaymant(xml){
//         debugger
//         return instance1.post(`sale/order`,xml).then(response =>  {
//             debugger
//             if(response.status === 200) return response.data
//         })
//             .catch(error => {
//                 debugger
//                 if(error.response == undefined) {
//                     ShowNotification("XMl Error", "Please check data", "danger")
//                     return error
//                 }
//                 // alert("Please check user data")
//                 else{
//                     ShowNotification("Error",error.message,"danger")
//                     console.log("Error network")
//                 }
//             })
//     }
// }