export const fetcher = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export const poster = async (url: string, data: any, options?: RequestInit) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      ...options,
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export const putter = async (url: string, data: any, options?: RequestInit) => {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      ...options,
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export const deleter = async (url: string, options?: RequestInit) => {
    const response = await fetch(url, {
      method: 'DELETE',
      ...options,
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };