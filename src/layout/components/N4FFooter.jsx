import React from 'react';
import './N4FFooter.scss';
import N4FLogo from './N4FLogo';

function N4FFooter() {
  return (
    <div>
      <footer className="n4f-footer">
        <N4FLogo className="n4f-footer__logo" fill="#FFFFFF" />
        <div class="n4f-button btn btn-default">Kontakt oss</div>
        <div class="n4f-contact__contact-info">
          <p class="n4f-contact__identity"><strong>Hyperion - Norsk Forbund for Fantastiske Fritidsinteresser</strong></p>
          <p class="n4f-contact__organisation-id">Organisasjonsnummer: 984 302 320</p>
          <p class="n4f-contact__phone">22 99 37 45</p>
          <p class="n4f-contact__mail">n4f@n4f.no</p>
        </div>
        <div class="n4f-social__social-box">
          <div class="n4f-social__facebook"></div>
          <div class="n4f-social__twitter"></div>
          <div class="n4f-social__instagram"></div>
          <div class="n4f-social__youtube"></div>
        </div>
      </footer>
    </div>
  );
}

export default N4FFooter;
