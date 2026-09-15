interface propInput {
  title: string;
  value: string | number;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}

export default function Input({
  title,
  value,
  placeholder,
  error,
  onChange,
}: propInput) {
  return (
    <>
      <h1 className="input-title">{title}</h1>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <h1 className="new-order-error">{error}</h1>}
    </>
  );
}
