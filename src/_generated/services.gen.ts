// This file is auto-generated by @hey-api/openapi-ts

import { createClient, createConfig, type Options } from '@hey-api/client-axios';
import type { PostAccountsError, PostAccountsResponse, GetAccountsByAccountIdData, GetAccountsByAccountIdError, GetAccountsByAccountIdResponse, GetSalesError, GetSalesResponse, PostSalesError, PostSalesResponse, GetSalesBySaleIdData, GetSalesBySaleIdError, GetSalesBySaleIdResponse, PutSalesBySaleIdData, PutSalesBySaleIdError, PutSalesBySaleIdResponse } from './types.gen';

export const client = createClient(createConfig());

/**
 * Create account
 * Create account
 */
export const postAccounts = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).post<PostAccountsResponse, PostAccountsError, ThrowOnError>({
    ...options,
    url: '/accounts'
}); };

/**
 * Get account by id
 * Get account by id
 */
export const getAccountsByAccountId = <ThrowOnError extends boolean = false>(options: Options<GetAccountsByAccountIdData, ThrowOnError>) => { return (options?.client ?? client).get<GetAccountsByAccountIdResponse, GetAccountsByAccountIdError, ThrowOnError>({
    ...options,
    url: '/accounts/{accountId}'
}); };

/**
 * Get all sales
 * Get all sales
 */
export const getSales = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).get<GetSalesResponse, GetSalesError, ThrowOnError>({
    ...options,
    url: '/sales'
}); };

/**
 * Create sale
 * Create sale
 */
export const postSales = <ThrowOnError extends boolean = false>(options?: Options<unknown, ThrowOnError>) => { return (options?.client ?? client).post<PostSalesResponse, PostSalesError, ThrowOnError>({
    ...options,
    url: '/sales'
}); };

/**
 * Get sale
 * Get sale by ID
 */
export const getSalesBySaleId = <ThrowOnError extends boolean = false>(options: Options<GetSalesBySaleIdData, ThrowOnError>) => { return (options?.client ?? client).get<GetSalesBySaleIdResponse, GetSalesBySaleIdError, ThrowOnError>({
    ...options,
    url: '/sales/{saleId}'
}); };

/**
 * Update sale
 * Update sale
 */
export const putSalesBySaleId = <ThrowOnError extends boolean = false>(options: Options<PutSalesBySaleIdData, ThrowOnError>) => { return (options?.client ?? client).put<PutSalesBySaleIdResponse, PutSalesBySaleIdError, ThrowOnError>({
    ...options,
    url: '/sales/{saleId}'
}); };