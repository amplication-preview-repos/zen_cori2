import { Appointment } from "../appointment/Appointment";
import { Property } from "../property/Property";

export type Client = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  properties?: Array<Property>;
  updatedAt: Date;
};
