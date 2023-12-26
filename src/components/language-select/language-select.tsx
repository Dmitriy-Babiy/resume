import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { DropDownIcon } from '@/assets/icons';
import styles from './language-select.module.scss';
import clsx from 'clsx';

type Option = { label: React.ReactNode; value: string };

type SelectProps = {
  options: Option[];
  className: string;
  selected?: string;
  onChange?: (value: string) => void;
};

export const LanguageSelect = ({
  selected,
  options,
  onChange,
  className,
}: SelectProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<Option | undefined>(
    options.find((option) => option.value === selected),
  );

  const ref = useRef<HTMLDivElement>(null);

  const handleClickSelect = () => {
    setOpen(!open);
  };

  const handleChangeSelect = (option: Option) => {
    setValue(option);
    setOpen(false);
    onChange?.(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !ref.current?.contains(target)) {
        open && setOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [open]);

  return (
    <div className={styles.wrapper} ref={ref}>
      <div
        onClick={handleClickSelect}
        className={clsx(styles.select, className)}
      >
        <div className={styles.label}>{value?.label}</div>
        <div className={clsx(styles.dropdownIcon, { [styles.open]: open })}>
          <DropDownIcon />
        </div>
      </div>

      {ref.current &&
        open &&
        createPortal(
          <div className={styles.options}>
            {options
              .filter((option) => option.value !== value?.value)
              .map((option) => (
                <div
                  key={option.value}
                  className={clsx(styles.option, {
                    [styles.active]: option.value === value?.value,
                  })}
                  onClick={() => handleChangeSelect(option)}
                >
                  {option.label}
                </div>
              ))}
          </div>,
          ref.current,
        )}
    </div>
  );
};
