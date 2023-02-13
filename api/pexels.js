import axios from 'axios'

export const getImages = async (searchTerm = 'programming') => await axios.get(`https://api.pexels.com/v1/search?query=${searchTerm}`, {
    headers: {
        Authorization: '2ML2DfaJzNOO1V36sd8tL1D3SzTv1wSLWBAZeqLS7S9FXOYZHns4AXc3',
    }
})