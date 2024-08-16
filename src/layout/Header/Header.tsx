import { MenuComponent } from "ui"
import { menuItems } from "./menuItems"
import style from "./Header.module.scss"

export function Header() {
  return (
    <div className="container">
      <nav className="pt12 pb12">
        <div className="flex align-center g8">
          <MenuComponent
            title="Menu"
            items={menuItems}
            className={style.menu}
          />
        </div>
      </nav>
    </div>
  )
}
