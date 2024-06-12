import { ValidationStatusEnum } from 'src/enums/ValidationStatus.enum';

export interface ValidationModel {
  status: ValidationStatusEnum | '';
  message: string;
  proceed: boolean | null;
}
