import { Link, MenuComponent } from "ui"
import { menuItems } from "./menuItems"
import style from "./Header.module.scss"

export function Header() {
  return (
    <div className="container">
      <nav className="pt12 pb12">
        <div className="flex g8">
          <h1 className={style.header}>
            <Link href="/">Features</Link>
          </h1>
          <MenuComponent title="Menu" items={menuItems} className={style.menu} />
        </div>
      </nav>
    </div>
  )
}
