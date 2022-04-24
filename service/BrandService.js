import brandAPI from './api/BrandAPI';
import brandMapper from '../mapper/BrandMapper';

const brandService = {
    getBrands: async (query) => {
        const requestConfig = {
            params: query
        }
        try {
            return brandAPI.getAll(requestConfig).then((data) => {
                return {
                    status: 'success',
                    data: brandMapper.mapBrands(data)
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

export default brandService;