import { Appointment } from "../appointment/Appointment";
import { Property } from "../property/Property";

export type Agent = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  licenseNumber: string | null;
  name: string | null;
  phoneNumber: string | null;
  properties?: Array<Property>;
  updatedAt: Date;
};
