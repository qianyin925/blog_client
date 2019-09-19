const path = require('path');

/* 路径别名配置 */
module.exports.alias = {
  '@app': path.resolve(__dirname, '../src/app'),
  '@api': path.resolve(__dirname, '../src/api'),
  '@hook': path.resolve(__dirname, '../src/hook'),
  '@store': path.resolve(__dirname, '../src/store'),
  '@pages': path.resolve(__dirname, '../src/pages'),
  '@utils': path.resolve(__dirname, '../src/utils'),
  '@config': path.resolve(__dirname, '../src/config'),
  '@assets': path.resolve(__dirname, '../src/assets'),
  '@components': path.resolve(__dirname, '../src/components')
}

/* 全局变量 */
module.exports.globalConsts = {
  // 生产
  production: {
    _DEV_: false,
    PUBLICKEY: JSON.stringify(`-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA53tjLpmlsKyzFfM2p6c0
    p8I1xbab0wF1xnu/l0N+QwZCsZ4r7kC2k6M+ye94zZijPsaFsktWGFFeoUaAe452
    ByZ1c6XkSdF9rGbsv2lcHi4P3MBfpOC56c6P6bOcuHMupgPtopW6v9Knhvix4lkU
    xczGtw/ENkKtxYj8LQfHPdlRGaQyAx8HM+5NqPrtafrQC8WMbjfdeW7vmDymQc0m
    E9eyeRy3nM3yLj2bVkzKIgrL9o5UzNXt1jFB6UWGZ2EX7KW2nZM6HBccm8Nm6WP7
    36qKTjeivbsbuEE3lcDD19AoMV2aILrzhz/eUfyueIbzjFttO8BAzmcI1q11FYwu
    OQIDAQAB
    -----END PUBLIC KEY-----`),
    GLOBAL_SERVICE: {
      HOST: JSON.stringify('http://www.qianyin925.com:4000'),
      GRAPHQL_URL: JSON.stringify('/graphql'),
    },
  },

  // 开发
  development: {
    _DEV_: true,
    PUBLICKEY: JSON.stringify(`-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoWATfIA97hbj8rbtZBPo
    T+gR7iK5IV1weysfOSJcE1CoqJt9bePHkQeBLj1cWbM9m5wvkB2WQN3YCKDHzqVd
    9pQ6AHOkx7cCxMrjBm8QEV7ACU+NN/2MBRmOHiuRq+PdDfV+V6b/RYCn8hMmVkTU
    SGGyYkSou8bigBkCwv56x7I0AkdSkCQ1oYgWqfbW9Ms6QTIxmeCO2sI4mr/ABYDi
    oVHY0hIBM9nR8Dcb4u/faXRh2nwhBgpSm09CXaKzFv2WmYxWgul3i6zlzAhziO6s
    ogueSeM9qOIZhWn2uAd8pHsK3KHUA91EPphQvR+ReFJV6J1t5a7Cy5+I9sz62jIz
    JwIDAQAB
    -----END PUBLIC KEY-----`),
    GLOBAL_SERVICE: {
      HOST: JSON.stringify('http://localhost:4000'),
      GRAPHQL_URL: JSON.stringify('/graphql'),
    },
  },
}