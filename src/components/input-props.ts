import { ReactElement } from "react";
import {
  Control,
  DeepMap,
  FieldError,
  FieldValues,
} from "react-hook-form/dist/types";

export default interface InputProps<
  TFieldValues extends FieldValues = FieldValues
> {
  name: string;
  errors?: DeepMap<TFieldValues, FieldError>;
  inputLabel?: string;
  inputMode?:
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
  type?:
    | "number"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "search"
    | "time"
    | "date"
    | "password"
    | "week"
    | "month"
    | "datetime-local";
  control?: Control;
  component?: ReactElement<
    | HTMLIonInputElement
    | HTMLIonTextareaElement
    | HTMLIonSelectElement
    | HTMLIonRadioGroupElement
    | HTMLIonToggleElement
    | HTMLIonDatetimeElement
  >;
  defaultValue?: any;
  placeholder?: string;
}
