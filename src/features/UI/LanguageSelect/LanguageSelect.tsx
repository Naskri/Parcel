import { AiOutlineArrowDown } from 'react-icons/ai'
import { resources } from '../../../lib/i18n/i18n'
import { isLanguage, useLanguage } from '../../../context/LanguageContext'
import { ChangeEvent, useRef } from 'react'
import { Button } from '../Button/Button'
import styled from './LanguageSelect.module.css'

export const LanguageSelect = () => {
  const selectRef = useRef<HTMLSelectElement>(null)
  const { language, changeLanguage } = useLanguage()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const languageTarget = e.target.value

    if (!isLanguage(languageTarget)) return

    changeLanguage(languageTarget)
  }

  const onOpenSelect = () => {
    if (!selectRef?.current) return

    selectRef.current.focus()
  }

  return (
    <div className={styled['language-select__container']}>
      <Button modifier="language-select" onClick={onOpenSelect}>
        <AiOutlineArrowDown className={styled['language-select__icon']} />
      </Button>
      <select
        className={styled['language-select']}
        onChange={handleChange}
        defaultValue={language}
        ref={selectRef}
      >
        {Object.entries(resources).map(([languageOption, options]) => (
          <option key={languageOption} value={languageOption}>
            {options.title}
          </option>
        ))}
      </select>
    </div>
  )
}
