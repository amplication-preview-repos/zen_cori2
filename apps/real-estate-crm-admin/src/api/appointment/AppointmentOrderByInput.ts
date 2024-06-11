import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  agentId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  status?: SortOrder;
  time?: SortOrder;
  updatedAt?: SortOrder;
};
