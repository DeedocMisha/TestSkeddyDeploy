import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel, CompleteCredential, CredentialModel, CompleteDomainWideDelegation, DomainWideDelegationModel, CompleteEventType, EventTypeModel } from "./index"

export const _SelectedCalendarModel = z.object({
  id: z.string(),
  userId: z.number().int(),
  integration: z.string(),
  externalId: z.string(),
  credentialId: z.number().int().nullish(),
  googleChannelId: z.string().nullish(),
  googleChannelKind: z.string().nullish(),
  googleChannelResourceId: z.string().nullish(),
  googleChannelResourceUri: z.string().nullish(),
  googleChannelExpiration: z.string().nullish(),
  domainWideDelegationCredentialId: z.string().nullish(),
  error: z.string().nullish(),
  eventTypeId: z.number().int().nullish(),
})

export interface CompleteSelectedCalendar extends z.infer<typeof _SelectedCalendarModel> {
  user: CompleteUser
  credential?: CompleteCredential | null
  domainWideDelegationCredential?: CompleteDomainWideDelegation | null
  eventType?: CompleteEventType | null
}

/**
 * SelectedCalendarModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const SelectedCalendarModel: z.ZodSchema<CompleteSelectedCalendar> = z.lazy(() => _SelectedCalendarModel.extend({
  user: UserModel,
  credential: CredentialModel.nullish(),
  domainWideDelegationCredential: DomainWideDelegationModel.nullish(),
  eventType: EventTypeModel.nullish(),
}))
