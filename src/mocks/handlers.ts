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
        console.log('팔로우글');
        return HttpResponse.json(
            [
                {
                    postId: 1,
                    User: User[0],
                    content: `${1} Stop following me. I'm too famous.`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 2,
                    User: User[0],
                    content: `${2} Stop following me. I'm too famous.`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 3,
                    User: User[0],
                    content: `${3} Stop following me. I'm too famous.`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 4,
                    User: User[0],
                    content: `${4} Stop following me. I'm too famous.`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 5,
                    User: User[0],
                    content: `${5} Stop following me. I'm too famous.`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
            ]
        )
    }),
    http.get('/api/search/:tag', ({ request, params }) => {
        const { tag } = params;
        return HttpResponse.json(
          [
            {
              postId: 1,
              User: User[0],
              content: `${1} 검색결과 ${tag}`,
              Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
              createdAt: generateDate(),
            },
            {
              postId: 2,
              User: User[0],
              content: `${2} 검색결과 ${tag}`,
              Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
              createdAt: generateDate(),
            },
            {
              postId: 3,
              User: User[0],
              content: `${3} 검색결과 ${tag}`,
              Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
              createdAt: generateDate(),
            },
            {
              postId: 4,
              User: User[0],
              content: `${4} 검색결과 ${tag}`,
              Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
              createdAt: generateDate(),
            },
            {
              postId: 5,
              User: User[0],
              content: `${5} 검색결과 ${tag}`,
              Images: [{imageId: 1, link: faker.image.urlLoremFlickr()}],
              createdAt: generateDate(),
            },
          ]
        )
      }),
    http.get('/api/users/:userId/posts', async ({ request, params }) => {
        console.log('검색');
        const { userId } = params;
        return HttpResponse.json(
            [
                {
                    postId: 1,
                    User: User[0],
                    content: `${1} ${userId}의 게시글`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 2,
                    User: User[0],
                    content: `${2} ${userId}의 게시글`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 3,
                    User: User[0],
                    content: `${3} ${userId}의 게시글`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 4,
                    User: User[0],
                    content: `${4} ${userId}의 게시글`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 5,
                    User: User[0],
                    content: `${5} ${userId}의 게시글`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
            ]
        )
    }),
    http.get('/api/users/:userId', ({ request, params }) => {
        const { userId } = params;
        const found = User.find((v) => v.id === userId )
        if (found) {
            return HttpResponse.json(
                found,
            )
        }
        return HttpResponse.json({ message: 'no_such_user' }, {
            status: 404,
        })
    }),
    http.get('/api/users/:userId/posts/:postId', ({ request, params }) => {
        const { userId, postId } = params;
        return HttpResponse.json({
            postId: 6,
            User: User[0],
            content: `${1} ${userId}의 게시글의 ${postId}의 내용`,
            Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
            createdAt: generateDate(),
        })
    }),
    http.get('/api/users/:userId/posts/:postId/comments', ({ request, params }) => {
        console.log('검색');
        const { userId, postId } = params;
        return HttpResponse.json(
            [
                {
                    postId: 1,
                    User: User[0],
                    content: `${1} ${userId}의 게시글의 ${postId}의 답글`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 2,
                    User: User[0],
                    content: `${2} ${userId}의 게시글의 ${postId}의 답글`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 3,
                    User: User[0],
                    content: `${3} ${userId}의 게시글의 ${postId}의 답글`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 4,
                    User: User[0],
                    content: `${4} ${userId}의 게시글의 ${postId}의 답글`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
                {
                    postId: 5,
                    User: User[0],
                    content: `${5} ${userId}의 게시글의 ${postId}의 답글`,
                    Images: [{ imageId: 1, link: faker.image.urlLoremFlickr() }],
                    createdAt: generateDate(),
                },
            ]
        )
    }),
    http.get('/api/followRecommends', (request) => {
        return HttpResponse.json(User);
    }),
    http.get('/api/trends', (request) => {
        return HttpResponse.json([
            { tagId: 1, title: '가영', count: 1333 },
            { tagId: 2, title: '나영', count: 1332 },
            { tagId: 3, title: '다영', count: 1333 },
            { tagId: 4, title: '라영', count: 1343 },
            { tagId: 5, title: '마영', count: 1323 },
            { tagId: 6, title: '바영', count: 1333 },
            { tagId: 7, title: '사영', count: 1433 },
            { tagId: 8, title: '아영', count: 1333 },
            { tagId: 9, title: '자영', count: 1333 },
            { tagId: 10, title: '차영', count: 1133 },
        ]);
    }),
]