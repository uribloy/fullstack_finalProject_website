import httpService from "./httpService";

export async function getCart() {
    return await httpService.get("/cart");
}
export function cart(item) {
    return httpService.patch("/cart", item);
}
const cartServices = {
    getCart,
    cart,
};
export default cartServices;