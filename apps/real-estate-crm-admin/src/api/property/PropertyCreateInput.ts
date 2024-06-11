import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";

export type PropertyCreateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  client?: ClientWhereUniqueInput | null;
  description?: string | null;
  listedDate?: Date | null;
  price?: number | null;
  status?: "Option1" | null;
};
