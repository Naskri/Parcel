import { useNavigate } from 'react-router'
import { Button } from '../Button'
import { AiOutlineRollback } from 'react-icons/ai'

export const ButtonBack = () => {
  const navigate = useNavigate()
  return (
    <Button modifier="back" onClick={() => navigate(-1)} aria-label="Go to previous page">
      <AiOutlineRollback />
    </Button>
  )
}
