export interface RegisterUserDTO {
  Name: string;
  LastName?: string;
  MiddleName?: string;
  Sex: string;
  BirthDate: Date; 
  Mail: string;
  Phone: string;
  Password: string;
}