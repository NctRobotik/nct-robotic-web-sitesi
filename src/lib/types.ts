export type Role = "admin" | "educational" | "mothercare" | "user";

export interface User {
  id: number;
  name: string;
  surname?: string | null;
  email: string;
  role: Role;
}
