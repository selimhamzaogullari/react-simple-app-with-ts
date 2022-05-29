import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainContext } from '../context';
import Button from './Button';
import CheckSVG from '../img/Check.svg'


function Step2() {
    const { t } = useTranslation();

    const { togglePage } = useContext(MainContext)
    const { data, changeData } = useContext(MainContext)

    const [days, setDays] = useState([
        { name: 'monday', check: false, disabled: false },
        { name: 'tuesday', check: false, disabled: false },
        { name: 'wednesday', check: false, disabled: false },
        { name: 'thursday', check: false, disabled: false },
        { name: 'friday', check: false, disabled: false },
        { name: 'saturday', check: false, disabled: false },
        { name: 'sunday', check: false, disabled: false }
    ])

    useEffect(() => {
        console.log(data?.hasOwnProperty('step2'))
        let arr = data?.hasOwnProperty('step2') ? data.step2 : days
        if (data.step1[0] / data.step1[1] > 0.5) {
            arr[1].disabled = true
            arr[3].disabled = true
            arr[4].disabled = true
        }
        setDays([...arr])
    }, [])

    function selectDay(day: { name: string; check: boolean, disabled: boolean }, index: number) {
        let newArr: Array<any> = [...days];
        newArr[index] = { name: day.name, check: !day.check, disabled: day.disabled }
        setDays(newArr)
    }

    function nextPage() {
        togglePage?.(3)
        changeData?.({ ...data, step2: days })
    }

    function prevPage() {
        togglePage?.(1)
        changeData?.({ ...data, step2: days })
    }

    function checkSelected() {
        return days.find(x => x.check) === undefined
    }

    return (
        <>
            <div className="description">
                {t('step2.description')}
            </div>
            <div className="content">
                {days.map((day, index) => (
                    <div className={`select-day ${day.disabled && 'disabled'}`} key={day.name}
                        onClick={() => selectDay(day, index)}>
                        {t(`step2.${day.name}`)}
                        {day.check && <img src={CheckSVG} alt="check-icon" />}
                    </div>
                ))}
            </div>
            <div className="bottom">
                <Button setPage={prevPage}>{t('global.back')}</Button>
                <Button setPage={nextPage} disabled={checkSelected()}>{t('global.next')}</Button>
            </div>
        </>
    );
}

export default Step2;
