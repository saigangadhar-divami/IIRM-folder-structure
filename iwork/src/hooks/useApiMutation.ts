import { useMutation, UseMutationOptions, useQueryClient } from 'react-query';
import { poster, putter, deleter } from '../services/api';

export const useMutate = <TData = unknown, TError = unknown, TVariables = void>(
  url: string,
  method: 'post' | 'put' | 'delete',
  options?: UseMutationOptions<TData, TError, TVariables>
) => {
  const queryClient = useQueryClient();
  const mutationFn = method === 'post' ? poster : method === 'put' ? putter : deleter;

  return useMutation<TData, TError, TVariables>((variables) => mutationFn(url, variables), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: (error) => {
      console.error('Error mutating data:', error);
    },
  });
};