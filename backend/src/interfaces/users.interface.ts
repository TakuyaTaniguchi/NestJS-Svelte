export interface IUser {
  id: number;
  name: string;
  avatar: string;
  description: string;
  email: string;
  password_digest: string;
  created_at: Date;
  updated_at: Date;
}
