import styles from './header.module.sass'
import NavLink from './nav-link'
import MobileNav from './mobile/mobile-nav'
import Link from 'next/link'

export default function Header() {
  const routes = [
    { title: '服務項目', path: '/services' },
    { title: '最新消息', path: '/news' },
    { title: '聯絡我們', path: 'contact' }
  ]

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.sitename}>
          <NavLink
            href='/'
            exact
          >
            汎亞髮藝
          </NavLink>
        </div>
        <MobileNav routes={routes} />
        <ul className={styles.navbar}>
          {routes.map((route) => (
            <li>
              <Link
                key={route.title}
                href={route.path}
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
