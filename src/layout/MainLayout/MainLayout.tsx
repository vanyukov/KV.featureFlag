import { Header } from "layout"

type PropsType = {
  children: React.ReactNode
}

export function MainLayout({ children }: PropsType) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  )
}
