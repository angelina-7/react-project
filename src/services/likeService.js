import * as request from './requester';
import * as api from './api';

export function like(userId, recipeId) {
    return request.post(`${api.LIKES}`, { userId, recipeId });
}

export function getRecipeLikes(recipeId) {
    const query = encodeURIComponent(`recipeId="${recipeId}"`);

    return request.get(`${api.LIKES}?where=${query}`);
};