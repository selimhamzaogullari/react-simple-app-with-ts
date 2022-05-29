import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MainContext } from '../context';
import Button from './Button';
import Icon1 from '../img/vector-1.svg'
import Icon2 from '../img/vector-2.svg'


function Step3() {
    const { t } = useTranslation();

    const { togglePage } = useContext(MainContext)
    const { data, changeData } = useContext(MainContext)

    const [goal, setGoal] = useState([
        { name: 'loseWeight', icon: Icon1, check: true },
        { name: 'buildMuscle', icon: Icon2, check: false },
        { name: 'stayHealth', icon: Icon1, check: false }
    ])

    useEffect(() => {
        if (data?.hasOwnProperty('step3')) {
            setGoal([...data.step3])
        }
    }, [])

    function selectGoal(index: number) {
        const arr: Array<any> = goal
        for (let i = 0; i < arr.length; i++) {
            arr[i].check = index === i
        }
        setGoal([...arr])
    }

    function nextPage() {
        togglePage?.(4)
        changeData?.({ ...data, step3: goal })
    }

    function prevPage() {
        togglePage?.(2)
        changeData?.({ ...data, step3: goal })
    }

    return (
        <>
            <div className="description">
                {t('step3.description')}
            </div>
            <div className="content">
                {goal.map((g, index) => (
                    <div className="select-day height-lg" key={g.name} onClick={() => selectGoal(index)}>
                        <div className="d-flex align-items-center">
                            <img src={g.icon} alt={`icon-${g.name}`} />
                            <span className="ml-15">{t(`step3.${g.name}`)}</span>
                        </div>
                        <div className={`checkbox ${g.check && 'check'}`} />
                    </div>
                ))}
            </div>
            <div className="bottom">
                <Button setPage={prevPage}>{t('global.back')}</Button>
                <Button setPage={nextPage}>{t('global.next')}</Button>
            </div>
        </>
    );
}

export default Step3;
