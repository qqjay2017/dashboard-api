import { Response } from 'express'


export const errorRes = ({
    res,
    status = 500,
    error,
    message
}: { res: Response; status?: number; error?: any; message?: any }) => {
    return res.status(status).json({
        error: message || error?.message || 'Server error!'
    })
}
