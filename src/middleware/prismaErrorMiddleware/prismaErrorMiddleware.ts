import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from 'express';
import { prismaError } from "./prismaUtil";

export function prismaErrorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        // Prisma specific error
        const pe = new prismaError(err);
        res.status(pe.statusCode).json({
            message: pe.message,
            errData: pe.metaData,
        });
    }
    return next()


}