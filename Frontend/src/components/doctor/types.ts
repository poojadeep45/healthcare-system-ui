export interface DoctorFormData {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  specialization: string;
  licenseNumber: string;
  pmdcNumber: string;
  yearsExperience: string;
  hospitalName: string;
  medicalDegree: File | null;
  licenseCertificate: File | null;
  cnic: File | null;
  profilePhoto: File | null;
  password: string;
  confirmPassword: string;
}