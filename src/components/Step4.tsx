import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainContext } from '../context';
import Button from './Button';
import Input from './Input';


function Step4() {
    const { t } = useTranslation();

    const { togglePage } = useContext(MainContext)
    const { data, changeData } = useContext(MainContext)

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if (data?.hasOwnProperty('step4')) {
            setName(data.step4.name)
            setSurname(data.step4.surname)
            setEmail(data.step4.email)
            setPassword(data.step4.password)
        }
    }, [])

    function nextPage() {
        togglePage?.(4)
        changeData?.({ ...data, step4: { name, surname, email, password } })
    }

    function prevPage() {
        togglePage?.(3)
        changeData?.({ ...data, step4: { name, surname, email, password } })
    }

    return (
        <>
            <div className="description">
                {t('step4.description')}
            </div>
            <div className="content">
                <div>
                    <Input id="name" placeHolder={t('step4.name')}
                        setVar={setName} firstValue={name} />
                    <Input id="surname" placeHolder={t('step4.surname')}
                        setVar={setSurname} firstValue={surname} />
                </div>
                <div className="mt-40">
                    <Input id="email" placeHolder={t('step4.email')}
                        setVar={setEmail} firstValue={email} />
                    <Input id="password" placeHolder={t('step4.password')}
                        setVar={setPassword} firstValue={password} type="password" />
                </div>
            </div>
            <div className="bottom">
                <Button setPage={prevPage}>{t('global.back')}</Button>
                <Button setPage={nextPage}
                    disabled={name === '' || surname === '' || email === '' || password === ''}>
                    {t('global.save')}
                </Button>
            </div>
        </>
    );
}

export default Step4;
