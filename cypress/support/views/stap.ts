import navigatie from '@support/navigatie';
import { navBar, vraag, helpButton, stapTitel } from '@support/components';
import { header } from '@support/codey';

export class Stap {
  public header = header;
  public stapTitel = stapTitel;
  public vraag = vraag;
  public helpButton = helpButton;
  public navBar = navBar;
  public nextButton = () => cy.getBy('navigatie-verder');

  public next() {
    return this.nextButton().click().getSyncPoint();
  }
}

export default new Stap();
