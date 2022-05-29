import React, { useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MainContext } from '../context';
import Button from './Button';
import Input from './Input';


function Step1() {
    const { t } = useTranslation();

    const { togglePage } = useContext(MainContext)
    const { data, changeData } = useContext(MainContext)

    const [height, setHeight] = useState<string>('');
    const [weight, setWeight] = useState<string>('');

    useEffect(() => {
        if (data?.hasOwnProperty('step1')) {
            setHeight(data.step1[0])
            setWeight(data.step1[1])
        }
    }, [])


    function nextPage() {
        togglePage?.(2)
        changeData?.({ ...data, step1: [height, weight] })
    }

    return (
        <>
            <div className="description">
                {t('step1.description')}
            </div>
            <div className="content">
                <Input id="height-input" placeHolder={t('step1.yourHeight')}
                    setVar={setHeight} firstValue={height} allowOnlyNumber={true} />
                <Input id="weight-input" placeHolder={t('step1.yourWeight')}
                    setVar={setWeight} firstValue={weight} allowOnlyNumber={true} />
            </div>
            <div className="bottom">
                <Button disabled={true}>{t('global.back')}</Button>
                <Button disabled={height === '' || weight === ''} setPage={nextPage}>
                    {t('global.next')}
                </Button>
            </div>
        </>
    );
}

export default Step1;
