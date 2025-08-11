import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enHeader from '../locales/en/header.json';
import viHeader from '../locales/vi/header.json';
import enAsideFilter from '../locales/en/asideFilter.json';
import viAsideFilter from '../locales/vi/asideFilter.json';
import enProduct from '../locales/en/product.json';
import viProduct from '../locales/vi/product.json';

export const locales = {
  en: 'English',
  vi: 'Tiếng Việt',
};

const resources = {
  en: {
    header: enHeader,
    asideFilter: enAsideFilter,
    product: enProduct,
  },
  vi: {
    header: viHeader,
    asideFilter: viAsideFilter,
    product: viProduct,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'vi', // Ngôn ngữ dự phòng nếu không tìm thấy
    ns: ['header', 'asideFilter', 'product'], // Danh sách namespace
    defaultNS: 'translation', // Namespace mặc định (nếu không chỉ định)
    interpolation: {
      escapeValue: false, // Không thoát HTML
    },
  });

export default i18n;