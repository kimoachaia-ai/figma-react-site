import { Settings2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ProductPage } from "../../components/ProductPage";

export function CustomPage() {
  const { t } = useTranslation();

  return (
    <ProductPage
      icon={Settings2}
      title={t('custom_mfg.title')}
      subtitle={t('custom_mfg.subtitle')}
      description={t('custom_mfg.description')}
      features={[
        t('custom_mfg.f1'),
        t('custom_mfg.f2'),
        t('custom_mfg.f3'),
        t('custom_mfg.f4'),
      ]}
      details={t('custom_mfg.details')}
      contactCategory="Custom Manufacturing"
      imageSrc="https://images.unsplash.com/photo-1504148455328-c376907d081c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    />
  );
}
