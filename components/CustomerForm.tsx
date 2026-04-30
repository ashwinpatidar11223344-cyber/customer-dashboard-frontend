"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name is required")
    .regex(/^[A-Za-z ]+$/, "Only letters allowed"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter valid 10 digit mobile"),
});

type FormData = z.infer<typeof schema>;

export default function CustomerForm({
  onSubmit,
}: {
  onSubmit: (data: FormData) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema), 
    mode: "onChange",               
  });

  const submitHandler = (data: FormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="grid md:grid-cols-3 gap-5"
    >
      <InputField
        placeholder="Enter Name"
        register={register}
        name="name"
        error={errors.name?.message}
      />

      <InputField
        placeholder="Enter Email"
        register={register}
        name="email"
        error={errors.email?.message}
      />

      <InputField
        placeholder="Enter Mobile"
        register={register}
        name="phone"
        error={errors.phone?.message}
      />

      <div className="md:col-span-3 text-center">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl"
        >
          Add Customer
        </button>
      </div>
    </form>
  );
}