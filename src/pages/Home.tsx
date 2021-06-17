import {
  IonButton,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useController, useForm } from "react-hook-form";
import Input from "../components/input";
import "./Home.css";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = object().shape({
  email: string().required().email(),
  fullname: string().max(60),
  accountType: string().oneOf(["starter", "pro"]).required(),
});

const Home = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    field: { onChange, value },
  } = useController({
    name: "accountType",
    defaultValue: "starter",
    control: control,
  });

  const saveForm = (formValues: any) => {
    console.log({ formValues });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Forms Example</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="ion-padding">
          <form onSubmit={handleSubmit(saveForm)}>
            {/* Input with options */}
            <Input
              name="email"
              inputLabel="Email"
              inputMode="email"
              control={control}
              errors={errors}
              placeholder="Enter email here"
            />
            {/* Default input */}
            <Input
              name="fullname"
              inputLabel="Full name"
              control={control}
              errors={errors}
            />
            {/* Example using useController */}
            <Input
              name="accountType"
              inputLabel="Account Type"
              component={
                <IonRadioGroup
                  onIonChange={(e) => onChange(e.detail.value)}
                  value={value}
                >
                  <IonItem>
                    <IonRadio value="starter" />
                    <IonLabel>Starter Account</IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonRadio value="pro" />
                    <IonLabel>Pro Account</IonLabel>
                  </IonItem>
                </IonRadioGroup>
              }
            />

            <IonButton expand="block" type="submit">
              Save
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
