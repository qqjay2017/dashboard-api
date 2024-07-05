import { z } from "zod";

export const apiManageSchema = z.object({

    id: z.string().optional(),
    name: z.string().optional(),
    description: z.string().optional(),
    url: z.string().optional(),
    method: z.string().optional(),
    groupId: z.string().optional().nullable(),
    baseNameId: z.string().optional().nullable(),
    originId: z.string().optional().nullable(),
    headers: z.string().optional().nullable(),
    isMock: z.boolean().optional(),
    mockJson: z.string().optional(),
});

export type ApiManageSchemaType = z.infer<typeof apiManageSchema>;
