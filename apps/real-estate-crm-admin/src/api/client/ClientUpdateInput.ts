import { AppointmentUpdateManyWithoutClientsInput } from "./AppointmentUpdateManyWithoutClientsInput";
import { PropertyUpdateManyWithoutClientsInput } from "./PropertyUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  address?: string | null;
  appointments?: AppointmentUpdateManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  properties?: PropertyUpdateManyWithoutClientsInput;
};
