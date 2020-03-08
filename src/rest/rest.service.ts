import axios, { AxiosRequestConfig } from 'axios';

export const get = (url: string, queryParams?: any, options?: AxiosRequestConfig) => {
    return axios.get(url, options);
}

export const post = (url: string, postBody: any) => {
    return axios.post(url, postBody);
}

export const urls = {
    productbase: (process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080') + '/product',
    product: {
        all: '',
        byId: '/',
        byType: '/type',
        add: '/add',
        update: '/update',
        delete: '/delete'
    }

}