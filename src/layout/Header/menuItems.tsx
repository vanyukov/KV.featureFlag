import { Link } from "ui"

export const menuItems = [
  { title: <Link href="/">Main</Link>, id: 0 },
  { title: <Link href="/wss">WSS</Link>, id: 0 },
  { title: <Link href="/sentry">Sentry</Link>, id: 0 },
]

menuItems.forEach((item, id) => {
  item.id = id
})
