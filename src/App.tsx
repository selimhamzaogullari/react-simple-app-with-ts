import React, { useState, } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './components/Button';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import { MainContext } from './context';


function App() {
  const { t, i18n } = useTranslation();

  const [page, setPage] = useState<Number>(1)
  const [data, setData] = useState({})

  const togglePage = (newPage: Number) => {
    setPage(newPage)
  }
  const changeData = (newData: any) => {
    setData(newData)
  }

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang)
    document.getElementsByTagName('html')[0].setAttribute('dir', lang === 'ar' ? "rtl" : "ltr")
    // document.body.style.direction = lang === 'ar' ? "rtl" : "ltr";
  }

  return (
    <MainContext.Provider value={{ page, togglePage, data, changeData }}>
      <div className="App">
        <div className="container">
          <div className="change-language">
            <Button small={true} setPage={() => changeLanguage('en')}>{t('global.english')}</Button>
            <Button small={true} setPage={() => changeLanguage('ar')}>{t('global.arabic')}</Button>
          </div>
          <div className="box">
            {page === 1 ? (
              <Step1 />
            ) : (page === 2 ? (
              <Step2 />
            ) : (page === 3 ? (
              <Step3 />
            ) : (<Step4 />
            ))
            )}
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default App;
