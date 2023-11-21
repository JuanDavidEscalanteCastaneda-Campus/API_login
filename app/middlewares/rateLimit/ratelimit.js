import rateLimit from 'express-rate-limit'

export const LimitPreview = () => {
    return rateLimit({
        windowMs: 3 * 1000,
        max: 5,
        standardHeaders: true,
        legacyHeaders: false,
        message: 'rebaso su totalidad de consultas estipuladas',
        statusCode: 429
    })
}