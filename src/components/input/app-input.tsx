export interface AppInputProps {
  placeholder?: string
}

export default function AppInput({ placeholder }: AppInputProps) {
  return (
    <input placeholder={placeholder} className="app-input" />
  )
}