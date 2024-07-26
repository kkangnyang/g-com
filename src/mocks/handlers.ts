import { http, HttpResponse } from 'msw';

export const handlers = [
    http.post('/api/login', () => {
        console.log('로그인');
        return HttpResponse.json({
            userId: 1,
            nickname: '가영',
            id: 'gayoung',
            image: '/glogo.png'
        }, {
            headers: {
                'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
            }
        })
    }),
    http.post('/api/logout', () => {
        return HttpResponse.json({}, {
            headers: {
                'Set-Cookie': 'connect.sid=;HttpOnly;Path=/'
            }
        })
    }),
    http.post('/api/users', async () => {
        console.log('회원가입');
        // return HttpResponse.text(JSON.stringify('user_exists'), {
        //     status: 403
        // })
        return HttpResponse.text(JSON.stringify('ok'), {
            headers: {
               'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/' 
            }
        })
    })
]