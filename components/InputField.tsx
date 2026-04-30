interface Props {
  placeholder: string;
  register: any;
  name: string;
  error?: string;
}

export default function InputField({
  placeholder,
  register,
  name,
  error,
}: Props) {
  return (
    <div>
      <input
        placeholder={placeholder}
        {...register(name)}
        className="w-full border rounded-xl px-4 py-3"
        required
      />
      <p className="text-red-500 text-sm mt-1">
        {error}
      </p>
    </div>
  );
}