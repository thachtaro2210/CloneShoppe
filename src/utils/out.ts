export const saveAccessTokenToLS = (accessToken: string) => {
  if (!accessToken || typeof accessToken !== 'string') {
    throw new Error('Access token must be a non-empty string');
  }
  try {
    localStorage.setItem('access_token', accessToken);
  } catch (error) {
    console.error('Error saving access token to localStorage:', error);
    throw new Error('Failed to save access token');
  }
};

export const clearAccessTokenFromLS = () => {
  try {
    localStorage.removeItem('access_token');
  } catch (error) {
    console.error('Error clearing access token from localStorage:', error);
    throw new Error('Failed to clear access token');
  }
};

export const getAccessTokenFromLS = (): string => {
  try {
    const token = localStorage.getItem('access_token');
    return token || '';
  } catch (error) {
    console.error('Error getting access token from localStorage:', error);
    return '';
  }
};

// (Tùy chọn) Thêm hàm kiểm tra token
export const isAccessTokenValid = (): boolean => {
  const token = getAccessTokenFromLS();
  // Kiểm tra token (ví dụ: không rỗng và không hết hạn - cần giải mã JWT nếu có)
  return !!token; // Hoặc thêm logic kiểm tra JWT nếu cần
};