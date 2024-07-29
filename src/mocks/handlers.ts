import { faker } from '@faker-js/faker';
import { http, HttpResponse } from 'msw';

function generateDate() {
    const lastWeek = new Date(Date.now());
    lastWeek.setDate(lastWeek.getDate() - 7);
    return faker.date.between({
        from: lastWeek,
        to: Date.now(),
    });
}
const User = [
    { id: 'elonmusk', nickname: 'Elon Musk', image: '/yRsRRjGO.jpg' },
    { id: 'gayoung', nickname: '가영', image: '/glogo.png' },
    { id: 'nayoung', nickname: '나영', image: faker.image.avatar() },
]
const Posts = [];
const delay = (ms: number) => new Promise((res) => {
    setTimeout(res, ms);
})

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
        return new HttpResponse(null, {
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
    }),
    http.get('/api/postRecommends', async ({ request }) => {
        console.log('추천게시글');
        // await delay(3000);
        // console.log('딜레이 종료');
        // const url = new URL(request.url)
        // const cursor = parseInt(url.searchParams.get('cursor') as string) || 0
        const cursor = 0;
        return HttpResponse.json(
            [
                {
                    postId: cursor + 1,
                    User: User[0],
                    content: `${cursor + 1} G.com is so marvelous. I'm gonna buy that.`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 2,
                    User: User[0],
                    content: `${cursor + 2} G.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        { imageId: 1, link: faker.image.urlLoremFlickr() },
                        { imageId: 2, link: faker.image.urlLoremFlickr() },
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 3,
                    User: User[0],
                    content: `${cursor + 3} G.com is so marvelous. I'm gonna buy that.`,
                    Images: [],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 4,
                    User: User[0],
                    content: `${cursor + 4} G.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        { imageId: 1, link: faker.image.urlLoremFlickr() },
                        { imageId: 2, link: faker.image.urlLoremFlickr() },
                        { imageId: 3, link: faker.image.urlLoremFlickr() },
                        { imageId: 4, link: faker.image.urlLoremFlickr() },
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 5,
                    User: User[0],
                    content: `${cursor + 5} G.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        { imageId: 1, link: faker.image.urlLoremFlickr() },
                        { imageId: 2, link: faker.image.urlLoremFlickr() },
                        { imageId: 3, link: faker.image.urlLoremFlickr() },
                    ],
                    createdAt: generateDate(),
                },
            ]
        )
    }),
    http.get('/api/followingPosts', async ({ request }) => {
        console.log('추천게시글');
        // await delay(3000);
        // console.log('딜레이 종료');
        // const url = new URL(request.url)
        // const cursor = parseInt(url.searchParams.get('cursor') as string) || 0
        const cursor = 0;
        return HttpResponse.json(
            [
                {
                    postId: cursor + 1,
                    User: User[0],
                    content: `${cursor + 1} G.com is so marvelous. I'm gonna buy that.`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 2,
                    User: User[0],
                    content: `${cursor + 2} G.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        { imageId: 1, link: faker.image.urlLoremFlickr() },
                        { imageId: 2, link: faker.image.urlLoremFlickr() },
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 3,
                    User: User[0],
                    content: `${cursor + 3} G.com is so marvelous. I'm gonna buy that.`,
                    Images: [],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 4,
                    User: User[0],
                    content: `${cursor + 4} G.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        { imageId: 1, link: faker.image.urlLoremFlickr() },
                        { imageId: 2, link: faker.image.urlLoremFlickr() },
                        { imageId: 3, link: faker.image.urlLoremFlickr() },
                        { imageId: 4, link: faker.image.urlLoremFlickr() },
                    ],
                    createdAt: generateDate(),
                },
                {
                    postId: cursor + 5,
                    User: User[0],
                    content: `${cursor + 5} G.com is so marvelous. I'm gonna buy that.`,
                    Images: [
                        { imageId: 1, link: faker.image.urlLoremFlickr() },
                        { imageId: 2, link: faker.image.urlLoremFlickr() },
                        { imageId: 3, link: faker.image.urlLoremFlickr() },
                    ],
                    createdAt: generateDate(),
                },
            ]
        )
    }),
]