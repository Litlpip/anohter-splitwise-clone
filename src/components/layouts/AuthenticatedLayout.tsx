import { AppShell, Burger, NavLink, Button, Group, ScrollArea, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { type ReactNode } from 'react'
import { useAuth } from '@/features/auth/context/useAuth'

interface Props {
  children: ReactNode
}

export function AuthenticatedLayout({ children }: Props) {
  const { logout } = useAuth()
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure()

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !mobileOpened } }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          Стафи
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <AppShell.Section p="md">Меню</AppShell.Section>
        <AppShell.Section grow my="md" component={ScrollArea} px="md">
          <Text mb={'sm'} >60 links in a scrollable section:</Text>
          {Array(60)
            .fill(0)
            .map((_, index) => (
              <NavLink
                href="#"
                key={index}
                onClick={(event) => event.preventDefault()}
                label="Navbar link"
              />
            ))}
        </AppShell.Section>

        <AppShell.Section p="md">
          <Button color="red" variant="filled" onClick={logout} fullWidth>
            Выйти
          </Button>
        </AppShell.Section>
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
