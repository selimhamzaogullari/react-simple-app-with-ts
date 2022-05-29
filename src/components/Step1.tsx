import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import Input from './Input';


function Step1() {
    const { t, i18n } = useTranslation();


    return (
        <>
            <div className="description">
                {t('step1.description')}
            </div>
            <div className="content">
                <Input placeHolder={t('step1.yourHeight')} />
                <Input placeHolder={t('step1.yourWeight')} />
            </div>
            <div className="bottom">
                <Button disabled={true}>{t('global.back')}</Button>
                <Button>{t('global.next')}</Button>
            </div>
        </>
    );
}

export default Step1;
