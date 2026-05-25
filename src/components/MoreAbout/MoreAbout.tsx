import type { Currency } from '../../data/currencies';
import { CurrencyDetails } from '../CurrencyDetails/CurrencyDetails';
import styles from './MoreAbout.module.scss';

type MoreAboutProps = {
  fromCurrency: Currency;
  toCurrency: Currency;
};

export function MoreAbout({ fromCurrency, toCurrency }: MoreAboutProps) {
  return (
    <section className={styles['more-about']}>
      <CurrencyDetails currency={fromCurrency} />
      <CurrencyDetails currency={toCurrency} />
    </section>
  );
}
