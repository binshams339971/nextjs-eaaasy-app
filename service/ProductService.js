import productAPI from './api/ProductAPI';
import productMapper from '../mapper/ProductMapper';

const productService = {
    getProducts: async (query) => {
        const requestConfig = {
            params: query
        }
        try {
            return productAPI.getAll(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: productMapper.mapProducts(data)
                };

            }).catch((error) => {
                if (error?.data) {
                    throw { ...error.data, statusCode: error.status };
                } else {
                    throw {
                        status: 'failed',
                        errors: [error]
                    };
                }
            });
        } catch (error) {
            throw {
                status: 'failed',
                errors: [error]
            };
        }
    },
}

export default productService;