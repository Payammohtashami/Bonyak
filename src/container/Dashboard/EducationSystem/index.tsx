import CourseCard from 'components/CourseCard';
import React from 'react';
import styles from "./EducationSystem.module.sass";

const EducationSystem:React.FC = () => {
    const cardData = [
        {
            image: "/images/1.jpg",
            title: "هوش مصنوعی",
            auther: "مهدیه امیری",
            time: "6:28",
            episode: "12",
            saleStatus: "freeSale",
            slug: ""
        },
        {
            image: "/images/1.jpg",
            title: "داده‌کاوی",
            auther: "مهدیه امیری",
            time: "6:28",
            episode: "24",
            saleStatus: "freeSale",
            slug: ""
        },
        {
            image: "/images/1.jpg",
            title: "نظریه بازی‌ها",
            auther: "مهدیه امیری",
            time: "6:28",
            episode: "18",
            saleStatus: "freeSale",
            slug: ""
        },
        {
            image: "/images/1.jpg",
            title: "تجارت الکترونیکی",
            auther: "مهدیه امیری",
            time: "6:28",
            episode: "45",
            saleStatus: "freeSale",
            slug: ""
        },
        {
            image: "/images/1.jpg",
            title: "نظریه اعداد",
            auther: "مهدیه امیری",
            time: "6:28",
            episode: "85",
            saleStatus: "15,000 $",
            slug: ""
        },
    ]
    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <div className={styles.title_wrapper}>
                    <h2 className={styles.title}>لیست دوره‌ها</h2>
                </div>
                <div className={styles.card_wrapper}>
                    {
                        cardData.map((item:any) => (
                            <CourseCard data={item} />
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default EducationSystem;