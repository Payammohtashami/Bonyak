import Icon from 'components/Icon';
import TextInput from 'components/TextInput';
import routes from 'config/routes';
import Link from 'lib/Link';
import React from 'react';
import styles from "./Login.module.sass";

const Login: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.main_box}>
                    <div className={styles.box__content}>

                        <div  className={styles.back_button_container}>
                            <Link href={routes.home}  className={styles.back_button}>
                                <Icon name="back" size="26" />
                                <span>خانه</span>
                            </Link>
                        </div>
                        <div className={styles.input_wrapper}>
                            <TextInput
                                placeholder={"نام کاربری ..."}
                                require
                            />
                            <TextInput
                                placeholder={"شناسه هویتی  ..."}
                                require
                            />
                            <TextInput
                                placeholder={"رمز عبور ..."}
                                require
                                view
                            />
                            <Link href={routes.dashboard.base} className={styles.submit_button}>ورود</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;