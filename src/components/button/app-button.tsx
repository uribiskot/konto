export interface AppButtonProps {
  emoji?: string,
  text?: string
}

export default function AppButton({ emoji, text }: AppButtonProps) {
  return (
    <button className="app-button">{emoji} {text}</button>
  )
}