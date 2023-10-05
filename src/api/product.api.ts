import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/shared/constants/api.ts';
import { CreateCommentDto, CreateProductDto, IProduct, IProductWithDetails } from '@/models/IProduct.ts';

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getAllProducts: build.query<IProduct[], void>({
      query: () => ({
        url: 'products',
        method: 'GET',
      }),
    }),
    getProductById: build.query<IProductWithDetails, string>({
      query: (id: string) => ({
        url: `products/${id}`,
        method: 'GET',
      }),
    }),
    postProduct: build.mutation<void, CreateProductDto>({
      query: (createProductDto: CreateProductDto) => ({
        url: 'products',
        method: 'POST',
        body: createProductDto,
      }),
    }),
    postComment: build.mutation<void, CreateCommentDto>({
      query: (createCommentDto: CreateCommentDto) => ({
        url: `comments/${createCommentDto.productId}`,
        method: 'POST',
        body: { description: createCommentDto.description },
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  usePostProductMutation,
  useGetProductByIdQuery,
  usePostCommentMutation
} = productsAPI;