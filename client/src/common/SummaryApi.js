export const baseURL = "http://localhost:8000"

const SummaryApi = {
    register : {
      url : '/api/user/register',
      method : 'post'
    },
    login : {
      url : '/api/user/login',
      method : 'post'
    },
    forgotPassword : {
      url : '/api/user/forgot-password',
      method : 'put'
    },
    forgotPasswordOtpVerfication : {
      url : '/api/user/verify-forgot-password-otp',
      method : 'put'

    },
    resetPassword : {
      url : '/api/user/reset-password',
      method : 'put'
    },
    refreshToken : {
      url : '/api/user/refresh-token',
      method : 'post'

    },
    userDetails : {
      url : '/api/user/user-details',
      method : 'get'
    },
    logout : {
      url : '/api/user/logout',
      method : 'get'
    }
}

export default SummaryApi