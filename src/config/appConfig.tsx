// API Configuration
export const API_CONFIG = {
    BASE_URL: 'https://api.kapidhwaj.ai/api-backend',
    ON_PREM_BASE_URL: 'http://34.134.189.134:10023',
    SOCKET_URL: 'ws://api.kapidhwaj.ai:8084',
    // SOCKET_URL: 'https://api.kapidhwaj.ai',
    SOCKET_PATH: '/api-backend/socket.io',
};

// reCAPTCHA Configuration
export const RECAPTCHA_CONFIG = {
    SITE_KEY: '6LcGUcsqAAAAANGMG0eGWLGwrTWBOR4t6nDocOxZ',
};

// GCP Configuration
export const GCP_CONFIG = {
    STORAGE_BUCKET_URL: 'https://storage.googleapis.com/kph-ml',
};

// Feature Flags
export const FEATURE_FLAGS = {
    IS_ON_PREM: false,
};
