import { API_CONFIG, FEATURE_FLAGS } from '../config/appConfig';

export const isOnPrem = FEATURE_FLAGS.IS_ON_PREM;
console.log(API_CONFIG.BASE_URL, API_CONFIG.ON_PREM_BASE_URL);

const onPremApiBaseUrl = API_CONFIG.ON_PREM_BASE_URL;

const cloudApiBaseUrl = API_CONFIG.BASE_URL;

export const apiBaseUrl = isOnPrem ? onPremApiBaseUrl : cloudApiBaseUrl;
export const apiSocketUrl = API_CONFIG.SOCKET_URL;
export const apiSocketPath = API_CONFIG.SOCKET_PATH;



export interface ApiResponse<T> {
    reason: string;
    message: string;
    data?: T;
    error?: any;
}

export interface QueryOptions {
    enabled?: boolean;
    staleTime?: number;
    cacheTime?: number;
    refetchInterval?: number | false;
    refetchIntervalInBackground?: boolean;
    refetchOnWindowFocus?: boolean;
    retry?: number | boolean | ((failureCount: number, error: any) => boolean);
    retryDelay?: number | ((attemptIndex: number) => number);
    onSuccess?: (data: any) => void;
    onError?: (error: any) => void;
    onSettled?: (data: any | undefined, error: any | null) => void;
    select?: (data: any) => any;
    initialData?: any | (() => any);
    initialDataUpdatedAt?: number | (() => number);
    keepPreviousData?: boolean;
    refetchOnMount?: boolean | 'always';
    refetchOnReconnect?: boolean | 'always';
    suspense?: boolean;
    useErrorBoundary?: boolean | ((error: any) => boolean);
}

