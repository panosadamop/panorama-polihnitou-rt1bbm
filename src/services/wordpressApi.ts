import axios from 'axios';

const api = axios.create({
    baseURL: 'https://panoramapolihnitou.gr/wp-json/wp/v2/', // Replace with your WordPress site URL
});

export const getPosts = (categoryId?: number) => {
    const endpoint = categoryId ? `posts?categories=${categoryId}?_embed` : 'posts?_embed';
    return api.get(endpoint);
};

export const getPostDetails = (postId: number) => {
    return api.get(`posts/${postId}`);
};

export const getCategories = () => {
    return api.get('categories?per_page=30');
};
