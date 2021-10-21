import { IndexPage } from './index.po';
import { browser, by, element, logging } from 'protractor';
import { environment } from '../../src/environments/environment';

// browser.executeScript('window.scrollTo(0, document.body.scrollHeight)');

describe('Navegacion y creación', () => {
  let page: IndexPage;

  beforeEach(() => {
    page = new IndexPage();
  });

  it('Abro menu, creo y borro', () => {
    page.navigateTo();
    browser.executeScript('window.localStorage.removeItem(\'employees\')');
    //page.navigateTo();

    browser.driver.manage().window().setSize(1536, 824);
    element(by.xpath('/html/body/app-root/mat-drawer-container/mat-drawer-content/div[1]/button')).click();
    element(by.xpath('/html/body/app-root/mat-drawer-container/mat-drawer/div/div/ul/li')).click();
    element(by.xpath(' /html/body/app-root/mat-drawer-container/mat-drawer-content/div[2]/app-list-employee/div/div[1]/button')).click();

    element(by.xpath(' //*[@id="name"]')).click();
    element(by.xpath(' //*[@id="name"]')).clear();
    element(by.xpath(' //*[@id="name"]')).sendKeys('Christian');


    element(by.xpath('//*[@id="surname"]')).click();
    element(by.xpath('//*[@id="surname"]')).clear();
    element(by.xpath('//*[@id="surname"]')).sendKeys('Martinez');

    element(by.xpath('/html/body/app-root/mat-drawer-container/mat-drawer-content/div[2]/app-list-employee/div/div[2]/form/div[1]/div[2]/div[1]/div[1]/select')).click();
    element(by.xpath('/html/body/app-root/mat-drawer-container/mat-drawer-content/div[2]/app-list-employee/div/div[2]/form/div[1]/div[2]/div[1]/div/select/option[1]')).click();

    element(by.xpath('/html/body/app-root/mat-drawer-container/mat-drawer-content/div[2]/app-list-employee/div/div[2]/form/div[2]/button[1]')).click();
    element(by.className('btn btn-danger')).click();
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.WARNING,
    } as logging.Entry));
  });
});
