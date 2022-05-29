import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainContext } from '../context';
import Button from './Button';
import Input from './Input';
import service from '../services/service'


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

    async function nextPage() {
        changeData?.({ ...data, step4: { name, surname, email, password } })
        saveAll(data)
    }

    function prevPage() {
        togglePage?.(3)
        changeData?.({ ...data, step4: { name, surname, email, password } })
    }

    async function saveAll(obj: { step1: Array<string>, step2: Array<any>, step3: Array<any> }) {
        const checkedDays = obj.step2.filter(x => x.check).map(x => x.name)
        const checkedGoal = obj.step3.find(x => x.check)
        const serviceObj = {
            height: obj.step1[0],
            weight: obj.step1[1],
            days: checkedDays,
            goal: checkedGoal.name,
            userInfo: { name, surname, email, password }
        }

        const res = await service.saveInfos(serviceObj)
        if (res) {
            alert(t('global.saveInfo'))
            changeData?.({})
            togglePage?.(1)
        } else {
            alert(t('global.fail'))
        }

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
