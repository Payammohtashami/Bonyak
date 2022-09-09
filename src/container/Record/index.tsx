import React, {useState, useEffect} from 'react';
import RecordCard from 'components/RecordCard';
import styles from "./EducationSystem.module.sass";
import { useRouter } from "next/router";
import { courseData } from 'container/enum';

const EducationSystem:React.FC = () => {
    const [data, setData] = useState<any>([]);
    const router = useRouter();
    useEffect(() => {
        const newData = courseData.filter((item) => item.status === "pass")
        setData(newData)
    }, [router.query])
    

    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <div className={styles.title_wrapper}>
                    <h2 className={styles.title}>مشاهده گواهی دوره ها</h2>
                </div>
                <div className={styles.card_wrapper}>
                    {
                        data.map((item:any) => (
                            <RecordCard data={item} />
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default EducationSystem;