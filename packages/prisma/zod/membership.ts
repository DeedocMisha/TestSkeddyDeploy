import * as z from "zod"
import * as imports from "../zod-utils"
import { MembershipRole } from "@prisma/client"
import { CompleteTeam, TeamModel, CompleteUser, UserModel, CompleteAttributeToUser, AttributeToUserModel } from "./index"

export const _MembershipModel = z.object({
  id: z.number().int(),
  teamId: z.number().int(),
  userId: z.number().int(),
  accepted: z.boolean(),
  role: z.nativeEnum(MembershipRole),
  disableImpersonation: z.boolean(),
})

export interface CompleteMembership extends z.infer<typeof _MembershipModel> {
  team: CompleteTeam
  user: CompleteUser
  AttributeToUser: CompleteAttributeToUser[]
}

/**
 * MembershipModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const MembershipModel: z.ZodSchema<CompleteMembership> = z.lazy(() => _MembershipModel.extend({
  team: TeamModel,
  user: UserModel,
  AttributeToUser: AttributeToUserModel.array(),
}))
