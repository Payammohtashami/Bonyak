import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Layout.module.sass";
import { useRouter } from "next/router";
import Link from "lib/Link";
import routes from "config/routes";

const DashboardLayout = ({ className, children }:any) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const router = useRouter();
  const navigation = [
    {
      title: "سامانه مدیریت آموزش",
      url: routes.dashboard.base,
    },

    {
      title: "ارتباط با دانشگاه",
      url: routes.dashboard.contact,
    },
    {
      title: "فرصت‌های شغلی",
      url: routes.dashboard.job,
    },
    {
      title: "سوابق و گواهی‌ها",
      url: routes.dashboard.record,
    },
    {
      title: "تکنولوژی آموزشی",
      url: routes.dashboard.tech,
    },
  ];


  useEffect(() => {
    setVisibleMenu(false)
  }, [router.route]);

  console.log(router.route === routes.dashboard.tech );
  

  return (
    <div className={styles.dashboardWrapper}>
      <div className={cn(className, styles.wallet)}>
        <div className={styles.sidebar}>
          <div className={cn(styles.group, { [styles.active]: visibleMenu })}>
            <div className={styles.top} onClick={() => setVisibleMenu(!visibleMenu)}>
              {navigation[activeIndex]?.title}
            </div>
            <div className={styles.menu}>
              {navigation.map((item, index) =>
                item.url ? (
                  <Link
                    className={cn(styles.item,router.route === item.url ? styles.activeItem : "")}
                    href={item.url}
                    onClick={(() => setActiveIndex(index))}
                    key={index}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div className={styles.separator} key={index}>
                    <span className={styles.title}>{item.title}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
