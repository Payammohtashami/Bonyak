import CourseCard from 'components/CourseCard';
import React from 'react';
import styles from "./EducationSystem.module.sass";
import { courseData } from 'container/enum';

const EducationSystem:React.FC = () => {

    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <div className={styles.title_wrapper}>
                    <h2 className={styles.title}>لیست دوره‌ها</h2>
                </div>
                <div className={styles.card_wrapper}>
                    {
                        courseData.map((item:any) => (
                            <CourseCard data={item} />
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default EducationSystem;