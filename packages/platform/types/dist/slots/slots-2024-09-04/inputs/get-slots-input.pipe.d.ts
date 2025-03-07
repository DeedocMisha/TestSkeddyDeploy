import type { PipeTransform } from "@nestjs/common";
import { ById_2024_09_04, BySlug_2024_09_04 } from "./get-slots.input";
import { ByUsernames_2024_09_04 } from "./get-slots.input";
export type GetSlotsInput_2024_09_04 = ById_2024_09_04 | BySlug_2024_09_04 | ByUsernames_2024_09_04;
export declare class GetSlotsInputPipe implements PipeTransform {
    constructor();
    transform(value: GetSlotsInput_2024_09_04): GetSlotsInput_2024_09_04;
    validateById(value: ById_2024_09_04): ById_2024_09_04;
    validateBySlug(value: BySlug_2024_09_04): BySlug_2024_09_04;
    validateByUsernames(value: ByUsernames_2024_09_04): ByUsernames_2024_09_04;
    private formatErrors;
    private isById;
    private isBySlug;
}
//# sourceMappingURL=get-slots-input.pipe.d.ts.map