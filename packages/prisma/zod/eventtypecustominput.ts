import * as z from "zod"
import * as imports from "../zod-utils"
import { EventTypeCustomInputType } from "@prisma/client"
import { CompleteEventType, EventTypeModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _EventTypeCustomInputModel = z.object({
  id: z.number().int(),
  eventTypeId: z.number().int(),
  label: z.string(),
  type: z.nativeEnum(EventTypeCustomInputType),
  options: imports.customInputOptionSchema,
  required: z.boolean(),
  placeholder: z.string(),
})

export interface CompleteEventTypeCustomInput extends z.infer<typeof _EventTypeCustomInputModel> {
  eventType: CompleteEventType
}

/**
 * EventTypeCustomInputModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const EventTypeCustomInputModel: z.ZodSchema<CompleteEventTypeCustomInput> = z.lazy(() => _EventTypeCustomInputModel.extend({
  eventType: EventTypeModel,
}))
