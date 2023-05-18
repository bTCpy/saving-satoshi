'use client'

import { useTranslations, useSaveAndProceed } from 'hooks'
import { ChapterIntro } from 'ui'
import {} from 'hooks'
import { Button } from 'shared'

export const metadata = {
  title: 'chapter_two.hashing_one.title',
  key: 'CH2HSH1',
}

export default function Hashing1({ lang }) {
  const saveAndProceed = useSaveAndProceed()
  const t = useTranslations(lang)

  return (
    <ChapterIntro>
      <p className="mt-2 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_one')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_two')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_three')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_four')}
      </p>

      <p className="mt-8 text-lg md:text-xl">
        {t('chapter_two.hashing_one.paragraph_five')}
      </p>

      <Button onClick={saveAndProceed} classes="mt-10 max-md:w-full">
        {t('shared.next')}
      </Button>
    </ChapterIntro>
  )
}