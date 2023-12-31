import httpService from "./httpService";

export function createProduct(product) {
    return httpService.post(`/products`, product);
}
export function updateProduct(id, product) {
    return httpService.put(`/products/${id}`, product);
}
export function deleteProduct(id) {
    return httpService.delete(`/products/${id}`);
}
export async function getAll() {
    return await httpService.get(`/products`);
}
export function likeProduct(id) {
    return httpService.patch(`/products/like/${id}`);
}
export function getProduct(id) {
    return httpService.get(`/products/${id}`);
}
const productsService = {
    createProduct, getAll, getProduct, deleteProduct, updateProduct, likeProduct
};
export default productsService;