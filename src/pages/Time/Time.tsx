import { useTranslation } from 'react-i18next'
import { Navigation } from '../../features/Layout/Navigation/Navigation'
import { Button } from '../../features/UI/Button/Button'
import styled from './Time.module.css'
import { useUser } from '../../features/Authentication/useUser'
import { useStartWork } from '../../features/Account/Work/useStartWork'
import { useEndWork } from '../../features/Account/Work/useEndWork'

export const Time = () => {
  const { t } = useTranslation()
  const { startWork } = useStartWork()
  const { endWork } = useEndWork()
  const { user } = useUser()

  const meta = user?.user_metadata

  return (
    <>
      <Navigation title={t('navigation.work-time')} />
      <div className={styled.time}>
        <p>{t('work-time.status-title')}</p>
        <p>
          {!meta?.start_work
            ? t('work-time.status-start')
            : meta?.is_work
            ? t('work-time.status')
            : t('work-time.status-end')}
        </p>
        <p className={styled.time__title}>
          {meta?.is_work ? t('work-time.time-start-title') : t('work-time.time-end-title')}
        </p>
        <p>{meta?.is_work ? meta?.start_work : meta?.end_work}</p>
        <div className={styled.time__actions}>
          {!meta?.is_work ? (
            <Button modifier="primary" onClick={startWork}>
              {t('work-time.button-start')}
            </Button>
          ) : (
            <Button modifier="primary" onClick={endWork}>
              {t('work-time.button-end')}
            </Button>
          )}
        </div>
      </div>
    </>
  )
}
