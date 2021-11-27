/**
 * Main Configs for get data
 * */

export const pageDetail = {
    limit: 10,
    id: 1
}

const Config = {
    PER_PAGE: 10,
    catWithCategories: `https://api.thecatapi.com/v1/images/search?limit=${pageDetail.limit}&page=1&category_ids=${pageDetail.id}`,
    categories: 'https://api.thecatapi.com/v1/categories ',
}

export default Config
