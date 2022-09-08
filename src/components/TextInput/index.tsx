import React, { useEffect, useLayoutEffect, useState } from "react";
import cn from "classnames";
import styles from "./TextInput.module.sass";
import Icon from "../Icon";
import Loading from "components/Loader";
import { useTranslation } from 'next-i18next';

const TextInput = ({
  className,
  classLabel,
  classInput,
  label,
  empty,
  view,
  icon,
  note,
  onClickView,
  id,
  error,
  type,
  text,
  startDate,
  reference,
  expire,
  counter,
  noteClass,
  require,
  show,
  ...props
}:any) => {

  let date = new Date()
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation('global');

  return (
    <div
      className={cn(
        styles.field,
        { [styles.empty]: empty },
        { [styles.view]: view },
        { [styles.icon]: icon },
        className
      )}
    >
      {label && <div className={cn(classLabel, styles.label)}><label htmlFor={id}>{label}{require ? <span className={styles.require}>*</span> : ""}</label>
      </div>}
      {!label && error && <div className={cn(classLabel, styles.label)}><label htmlFor={id}></label>
      </div>}
      <div className={cn(styles.wrap)}>
        <div className={cn(styles.op)}>
          <input ref={reference} id={id} className={cn(classInput, styles.input, { [styles.error]: error })} type={showPassword ? "" : type} {...props} />
          {view && (
            <button className={styles.toggle} onClick={() => setShowPassword(prev => !prev)} type="button">
              {showPassword ? <Icon name="eye" size="20" viewBox="0 0 22 22" /> : <Icon name="eye-block" size="20" viewBox="0 0 22 22" />}
            </button>
          )}
          {icon && (
            <div className={styles.preview}>
              <Icon name={icon} size="24" />
            </div>
          )}
        </div>
        {note && <div className={cn(styles.note, noteClass, { [styles.error]: error })}>{note}</div>}
        <span className={styles['error-text']}>{error}</span>
      </div>
    </div>
  );
};

export default TextInput;
