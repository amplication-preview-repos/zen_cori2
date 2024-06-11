import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";
import { PropertyCreateNestedManyWithoutClientsInput } from "./PropertyCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  address?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  properties?: PropertyCreateNestedManyWithoutClientsInput;
};
