import { Post } from "@/model/Post";
import { QueryFunction } from "@tanstack/react-query";
import Comments from "../_component/Comments";

export const getComments: QueryFunction<Post[], [_1: string, _2: string, _3: string]>
    = async ({ queryKey }) => {
        const [_1, id, _3] = queryKey;
        const res = await fetch(`http://localhost:9090/api/posts/${id}/comments`, {
            next: {
                tags: ['posts', id, 'comments'],
            },
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        console.log('api/posts/id/comments')

        return res.json();
    }