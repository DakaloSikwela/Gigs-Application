// lib/auth.js

export const googleOAuth = async (startOAuthFlow) => {
    try {
      // Start the OAuth flow using Clerk
      const result = await startOAuthFlow();
      return result;
    } catch (error) {
      return { success: false, message: error.message };
    }
  };
  