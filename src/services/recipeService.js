import * as api from './api.js';
import * as request from './requester.js';

// title,
// imageUrl,
// info,
// description,
// ingredients,
// instructions

export function getAll() {
    return request.get(`${api.RECIPES}?sortBy=_createdOn%20desc`);
}

export function getOne(id) {
    return request.get(`${api.RECIPES}/${id}`);
}

export function getMy(ownerId) {
    return request.get(`${api.RECIPES}?where=_ownerId%3D%22${ownerId}%22&sortBy=_createdOn%20desc`);
}

export function create(recipeData) {
    return request.post(api.RECIPES, recipeData);
}

export function update(recipeData, id) {
    return request.put(`${api.RECIPES}/${id}`, recipeData);
}

export function del(id) {
    return request.del(`${api.RECIPES}/${id}`);
}