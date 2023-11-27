import { useTranslation } from 'react-i18next'
import { Button } from '../../../UI/Button/Button'
import styled from './DeliverySuccesfulScreen.module.css'
import { useNavigate, useParams } from 'react-router'
import { useAddressContext } from '../../../Address/AddressContext/AddressContext'
import { useRef, useState } from 'react'
import SignatureCanvas from 'react-signature-canvas'
import { usePackagesContext } from '../../PackagesContext/PackagesContext'

export const DeliverySuccesfulScreen = () => {
  const [recipientType, setRecipientType] = useState('private')
  const [error, setError] = useState('')
  const [inputValue, setInputValue] = useState('')
  const signatureRef = useRef<SignatureCanvas>(null)
  const navigate = useNavigate()

  const { t } = useTranslation()
  const { getAddress, updateAddressPackages } = useAddressContext()
  const { deliveryPackage } = usePackagesContext()

  const { id, packId } = useParams()

  const address = getAddress(id)

  if (!address || !packId) return

  const handleConfirmDelivery = () => {
    if (!signatureRef.current) return

    setError('')
    if (recipientType === 'private' && inputValue !== address.customer) {
      return setError(t('validation.badCustomer'))
    }

    const isEmptySignature = signatureRef.current.isEmpty()

    if (isEmptySignature) {
      return setError(t('validation.badSignature'))
    }

    updateAddressPackages(address.custom_id, true)
    deliveryPackage(packId)
    navigate('/dashboard/work')
  }

  return (
    <div className={styled.succesfull}>
      <div className={styled.choice}>
        <Button modifier="choice-private" onClick={() => setRecipientType('private')}>
          {t('delivery.choicePrivate')}
        </Button>
        <Button modifier="choice-other" onClick={() => setRecipientType('indirect')}>
          {t('delivery.choiceOther')}
        </Button>
      </div>
      <label htmlFor="recipient">{t('delivery.recipient')}</label>
      <div className={styled.container}>
        <input
          id="recipient"
          className={styled.input}
          type="text"
          placeholder={t('package.name')}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {recipientType === 'private' && <p className={styled.addition}> {address.customer}</p>}
      </div>
      {error && <p className={styled.error}>{error}</p>}
      <div className={styled.signature}>
        <SignatureCanvas ref={signatureRef} canvasProps={{ className: styled.signature__canvas }} />
        <p className={styled.signature__title}>{t('delivery.signature-title')}</p>
      </div>
      <div className={styled.action}>
        <Button modifier="primary" onClick={handleConfirmDelivery}>
          {t('delivery.confirm')}
        </Button>
      </div>
    </div>
  )
}
