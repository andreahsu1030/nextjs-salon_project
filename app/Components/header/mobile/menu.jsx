import styles from './menu.module.sass'
import Link from 'next/link'

export default function Menu({ routes }) {
  return (
    <ul className={styles.list}>
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
  )
}
