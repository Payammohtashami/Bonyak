import React, {useState, useEffect} from 'react';
import { useRouter } from "next/router";
import styles from "./recordDetail.module.sass";
import { courseData } from 'container/enum';

const RecordDetail:React.FC = () => {
    const [data, setData] = useState<any>({});
    const router = useRouter();
    useEffect(() => {
        const newData = courseData.filter((item) => item.slug === router.query.slug)
        setData(newData[0])
    }, [router.query])
    
    return (
        <div className='container'>
        <div className={styles.wrapper}>
            <div className={styles.detail_wrapper}>
                <div className={styles.title_wrapper}>
                    <h2 className={styles.title}>دوره {data?.title} </h2>
                </div>
                <div className={styles.teacher_data_wrapper}>
                    <img src='/images/1.png' className={styles.avatar_image} />
                    <p>نام استاد: </p>
                    <p>{data?.auther}</p>
                </div>
                <div className={styles.date_time_wrapper}>
                    <div className={styles.time_wrapper}>
                        <p>مدت زمان دوره: </p>
                        <p>{data?.time}</p>
                    </div>
                    <div className={styles.episode_wrapper}>
                        <p>تعداد قسمت های دوره:</p>
                        <p> {data?.episode} جلسه</p>
                    </div>
                    <div className={styles.start_data_wrapper}>
                        <p>زمان شروع: </p>
                        <p>{data?.startAt}</p>
                    </div>
                    <div className={styles.start_data_wrapper}>
                        <p>زمان پایان : </p>
                        <p>{data?.finishAt}</p>
                    </div>
                    <div className={styles.start_data_wrapper}>
                        <p>نمره نهایی  : </p>
                        <p>{data?.point}</p>
                    </div>
                </div>
                
            </div>
            <div className={styles.image_wrapper}>
                <img src={data?.image} />
            </div>

        </div>
    </div>
    );
};

export default RecordDetail;