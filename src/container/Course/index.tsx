import React, {useState, useEffect} from 'react';
import { useRouter } from "next/router"
import styles from "./Course.module.sass";
import { courseData } from 'container/enum';
import Link from 'lib/Link';

const Course: React.FC = () => {
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
                            <p>{data?.episode}</p>
                        </div>
                        <div className={styles.start_data_wrapper}>
                            <p>زمان شروع: </p>
                            <p>{data?.startAt}</p>
                        </div>
                    </div>
                    <div className={styles.status_wrapper}>
                        {data?.status === "notStart" && 
                            <div className={styles.not_start_wrapper}>
                                <p>شما هنوز در این دوره شرکت نکرده اید .این دوره در تاریخ {data?.startAt} شروع خواهد شد</p>
                                <button>شروع دوره</button>
                            </div>
                        }
                        {data?.status === "faild" && 
                            <div className={styles.faild_wrapper}>
                                <p>متاسفانه شما موفق به گذزاندن این دوره نشده اید</p>
                            </div>
                        }
                        {data?.status === "pass" && 
                            <div className={styles.pass_wrapper}>
                                <p>شما با موفقیت این دوره آموزشی را گذرانده اید برای مشاهده گواهی تحصیلی خود روی لینک  زیر کلیک نمایید</p>
                                <Link href={`/dashboard/record/${data?.slug}`}>مشاهده سوابق</Link>
                            </div>
                        }
                        {data?.status === "inprogress" && 
                            <div className={styles.pass_wrapper}>
                                <p>شما در حال گذراندن این دوره میباشید و تا پایان دوره قادر به مشاهده سوابق این دوره نیستید</p>
                                {/* <Link href="/dashborad">مشاهده وضعیت</Link> */}
                            </div>
                        }
                    </div>
                </div>
                <div className={styles.image_wrapper}>
                    <img src={data?.image} />
                </div>

            </div>
        </div>
    );
};

export default Course;