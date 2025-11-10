import { Button, useMantineColorScheme } from "@mantine/core"

export function ColorModeButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const getIcon = () => {
    return colorScheme === "dark" ? "☀️" : "🌙"
  }

  return (
    <Button
      onClick={() => toggleColorScheme()}
      variant="default"
      size="md"
    >
      {getIcon()}
    </Button>
  )
}
