import { FlattenTranslations, resources } from '../../../lib/i18n/i18n'

type FormTranslations = (typeof resources)['pl']['translation']['form']
type ValidationTranslations = (typeof resources)['pl']['translation']['validation']

type FormTranslationsKeys = FlattenTranslations<FormTranslations, 'form.'>
type ValidationTranslationKeys = FlattenTranslations<ValidationTranslations, 'validation.'>

export type Label = FormTranslationsKeys[keyof FormTranslationsKeys]
export type Errors = ValidationTranslationKeys[keyof ValidationTranslationKeys]
