import * as api from './api.js';
import * as request from './requester.js';

// title,
// imageUrl,
// info,
// description,
// ingredients,
// instructions

export function getAll() {
    return request.get(`${api.RECIPES}`);
}

export function getOne(id) {
    return request.get(`${api.RECIPES}/${id}`);
}

export function getMy(ownerId) {
    return request.get(`${api.RECIPES}?where=_ownerId%3D%22${ownerId}%22`);
}

export function create(carData) {
    return request.post(api.RECIPES, carData);
}

export function update(carData, id) {
    return request.put(`${api.RECIPES}/${id}`, carData);
}

export function del(id) {
    return request.del(`${api.RECIPES}/${id}`);
}