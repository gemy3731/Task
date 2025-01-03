import SideBar from "../_components/SideBar/SideBar";
import initTranslations from "../i18n";
type Props = {
  params: {
    locale: string;
  };
};
export default async function Home({ params: { locale } }: Props) {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <>
      <SideBar/>
    </>
  );
}
