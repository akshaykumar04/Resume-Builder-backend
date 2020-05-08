import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

const AboutTab = () => {
  const { t } = useTranslation('rightSidebar');

  return (
    <div>

      <div className="mt-5">
        <p className="text-xs font-gray-600 text-center">
          <Trans t={t} >
             Made with Love by : 
            <a
              className="font-bold hover:underline"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
             SS Tech Canada
            </a>
          </Trans>
        </p>
        <p className="text-xs font-gray-600 text-center">{t('Thank you for using Resume Builder!')}</p>
      </div>
    </div>
  );
};

export default AboutTab;
