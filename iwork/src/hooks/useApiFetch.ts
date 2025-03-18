import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from '../services/api';

export const useFetch = <TData = unknown, TError = unknown>(
  key: string,
  url: string,
  options?: UseQueryOptions<TData, TError>
) => {
  return useQuery<TData, TError>(key, () => fetcher(url), {
    ...options,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
    retry: 2, // Retry failed requests twice
  });
};