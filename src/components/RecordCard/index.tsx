import React from "react";
import styles from "./RecordCard.module.sass";
import Link from "lib/Link";

const RecordCard = ({ data }: any) => {
  return (
    <Link href={`/dashboard/record/${data?.slug}`}>
      <div className={styles.card}>
        <div className={styles.images_wrapper}>
          <img src={data?.image} alt={"picture"} className={styles.image} />
        </div>
        <div className={styles.card_data}>
          <div className={styles.card_title_wrapper}>
            <p className={styles.card_title}>{data?.title}</p>
            <p className={styles.card_auther}>{data?.auther}</p>
          </div>
          <div className={styles.card_detail_wrapper}>
            <p className={styles.sale_status}>
              {data?.saleStatus === "freeSale" ? "رایگان" : data?.saleStatus}
            </p>
            <p className={styles.course_time}>{data?.time}</p>
            <p className={styles.course_episode}>{data?.episode} قسمت</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecordCard;
