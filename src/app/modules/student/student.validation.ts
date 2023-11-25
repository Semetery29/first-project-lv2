import { z } from "zod";
import validator from "validator";

const userNameValidationZSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required" })
    .max(20, { message: "First Name can not be more than 20 characters." })
    .refine(
      (value) => value.charAt(0).toUpperCase() + value.substring(1) === value,
      {
        message:
          "First Name must start with a capital letter and contain only alphabetical characters",
      }
    ),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required" })
    .refine((value) => validator.isAlpha(value), {
      message: "Last Name must only contain alphabetical characters",
    }),
});

const guardianValidationZSchema = z.object({
  fatherName: z.string().min(1, { message: "Father's Name is required" }),
  fatherContactNo: z
    .string()
    .min(1, { message: "Father's Contact Number is required" }),
  fatherOccupation: z
    .string()
    .min(1, { message: "Father's Occupation is required" }),
  motherName: z.string().min(1, { message: "Mother's Name is required" }),
  motherContactNo: z
    .string()
    .min(1, { message: "Mother's Contact Number is required" }),
  motherOccupation: z
    .string()
    .min(1, { message: "Mother's Occupation is required" }),
});

const localGuardianValidationZSchema = z.object({
  name: z.string().min(1, { message: "Local Guardian's Name is required" }),
  occupation: z
    .string()
    .min(1, { message: "Local Guardian's Occupation is required" }),
  contactNo: z
    .string()
    .min(1, { message: "Local Guardian's Contact Number is required" }),
  address: z
    .string()
    .min(1, { message: "Local Guardian's Address is required" }),
});

const studentValidationZSchema = z.object({
  id: z.string().min(1, { message: "Student ID is required" }),
  password: z.string().max(20),
  name: userNameValidationZSchema.refine(
    (value) => Object.keys(value).length > 0,
    {
      message: "Student Name is required",
    }
  ),
  gender: z.enum(["male", "female"]),
  dateOfBirth: z.string(),
  email: z.string().min(1, { message: "Email is required" }),
  contactNo: z.string().min(1, { message: "Contact Number is required" }),
  emergencyContactNo: z
    .string()
    .min(1, { message: "Emergency Contact Number is required" }),
  bloodGroup: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  presentAddress: z.string().min(1, { message: "Present Address is required" }),
  permanentAddress: z
    .string()
    .min(1, { message: "Permanent Address is required" }),
  guardian: guardianValidationZSchema.refine(
    (value) => Object.keys(value).length > 0,
    {
      message: "Guardian information is required",
    }
  ),
  localGuardian: localGuardianValidationZSchema.refine(
    (value) => Object.keys(value).length > 0,
    {
      message: "Local Guardian information is required",
    }
  ),
  profileImg: z.string().optional(),
  isActive: z.enum(["active", "blocked"]).default("active"),
});

export default studentValidationZSchema;
