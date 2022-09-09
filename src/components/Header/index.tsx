import React, {useState} from "react";
import styles from "./Header.module.sass";
import cn from "classnames";
import Link from "lib/Link";
import routes from "config/routes";
import { useRouter } from "next/router";
import Icon from "components/Icon";
import { HeaderNavType } from "types";

const Header: React.FC = () => {
  const [activeUser, setActiveUser] = useState(true)
  const router = useRouter();
  const navData: HeaderNavType[] = [
    {
      title: "پنل کاربری",
      route: routes.dashboard.base,
    },
  ];

  return (
    <header className={styles.header}>
      <div className={"container"}>
        <div className={styles.wrapper}>
          <div className={styles.nav_wrapper}>
            <ul className={styles.nav_list}>
              {navData.map((item) => (
                <li className={styles.nav_item}>
                  <Link href={item.route} className={styles.nav_item_link}>
                    <div className={styles.nav_item_link}>{item.title}</div>
                    <div
                      className={cn(
                        styles.nav_item_underline,
                        router.asPath === item.route && styles.active_route
                        )}
                        ></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {
            activeUser ? 
            <div className={styles.user_wrapper}>
                <img src="/images/1.png" className={styles.user_image} />
                <p className={styles.username}>مهدیه امیری</p>
            </div>
            :
            <div className={styles.date_and_register_wrapper}>
              <div className={styles.register_btns}>
                <Link href={routes.login} className={styles.register_btn}>
                  ورود
                </Link>
                <span>-</span>
                <Link href={routes.register} className={styles.register_btn}>
                  ثبت نام
                </Link>
              </div>
            </div>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
