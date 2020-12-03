if (process.env.NODE_ENV === 'production') {
  // 为生产环境修改配置...

} else if (process.env.NODE_ENV === 'development') {
  // 为开发环境修改配置...

} else if (process.env.NODE_ENV === 'testing') {
  // 为测试环境修改配置...

}

// 示例
// import { login } from '@/axios/api/user'
//
// return new Promise((resolve, reject) => {
//   login(data)
//     .then(res => {
//       if (res.code === 200) {
//
//       }
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err)
//     })
// })
