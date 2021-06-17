import { IonInput, IonLabel, IonText } from "@ionic/react";
import InputProps from "./input-props";
import { Controller } from "react-hook-form";

const Input = ({
  name,
  inputLabel,
  inputMode,
  control,
  component,
  defaultValue,
  placeholder,
  errors,
  type,
}: InputProps) => {
  return (
    <div className="app-input ion-margin-vertical">
      {inputLabel && <IonLabel color="grey-dark">{inputLabel}</IonLabel>}
      {component ? (
        component
      ) : (
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => {
            // if using a custom component, it should be defined like this.
            const { onChange, value } = field;
            return (
              <IonInput
                onIonChange={(e) => onChange(e.detail.value)}
                inputMode={inputMode}
                placeholder={placeholder}
                type={type}
                clearOnEdit={false}
                value={value}
              />
            );
          }}
        />
      )}
      {/*
        There are other ways to implement error handling;
        see: https://react-hook-form.com/advanced-usage#ErrorMessages
      */}
      {errors?.[name] && (
        <IonText color="danger" role="alert" className="text-sm error">
          {errors?.[name]?.message}
        </IonText>
      )}
    </div>
  );
};

export default Input;
