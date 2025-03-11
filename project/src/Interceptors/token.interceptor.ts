// import { HttpInterceptorFn } from '@angular/common/http';

// export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
//   console.log("in interceptor");
//   const token = sessionStorage.getItem('token');
//     if (token) {
//       console.log("in interceptor success");
      
//       const clonedRequest = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       return next(clonedRequest);
//     }
//     console.log("in interceptor failed");
//     return next(req); 
// };
import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  console.log("in interceptor");
  
  const token = sessionStorage.getItem('token');
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next(clonedRequest);
    }

    return next(req); 
};
