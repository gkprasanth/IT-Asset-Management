import vine from "@vinejs/vine";
import { CustomErrorReporter } from './CustomErrorReporter.js';



vine.errorReporter = new CustomErrorReporter();

export const allocateAssetSchema  = vine.object({
    service_tag:vine.string().maxLength(191),
    emp_id:vine.number()
})