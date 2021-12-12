export const getProduct = (categoryId, limit = 10, cb = () => {}) => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&category_ids=${categoryId}`)
        .then((result) => result.json())
        .then((result) => {
                // Filter to Even albumId only
                cb({
                    result,
                    error: null
                })
            },
            (error) => {
                cb({
                    result: null,
                    error
                })
            }
        )
}