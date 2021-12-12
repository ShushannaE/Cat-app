export const getCategories = (cb = () => {}) => {
    fetch("https://api.thecatapi.com/v1/categories")
        .then(res => res.json())
        .then(
            (result) => {
                cb(result);
            }
        )
}