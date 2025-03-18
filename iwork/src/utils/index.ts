import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes
        refetchOnWindowFocus: false,
        retry: 2, // Retry failed requests twice
        onError: (error) => {
          console.error('Error fetching data:', error);
        },
        onSuccess: (data) => {
          console.log('Data fetched successfully:', data);
        },
      },
    },
  });