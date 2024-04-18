let BASE_URL = ''
const TIME_OUT = 1000

if (process.env.NODE_ENV === 'production') {
    BASE_URL = 'http://localhost:8080/'
} else if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://xxx.com/org'
} else {
    BASE_URL = 'http://xxx.com/org/env'
}

export { BASE_URL, TIME_OUT }
