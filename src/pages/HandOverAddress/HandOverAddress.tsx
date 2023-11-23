import { useTranslation } from 'react-i18next'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import styled from './HandOverAddress.module.css'
import { HandOverAddressForm } from '../../features/Address/HandOverAddressForm/HandOverAddressForm'

export const HandOverAddress = () => {
  const { t } = useTranslation()

  return (
    <>
      <Navigation title={t('send.title')} />
      <div className={styled['send-address']}>
        <h1 className={styled.title}>{t('send.title')}</h1>
        <HandOverAddressForm />
      </div>
    </>
  )
}
