import SecNavbar from "../_components/SecNavbar/SecNavbar";
import SideAndNavBar from "../_components/side&navBar/SideAndNavBar";

import initTranslations from "../i18n";
import TranslationsProvider from "./../_components/TranslationsProvider";

type Props = {
  params: {
    locale: string;
  };
};
export default async function Home({ params: { locale } }: Props) {
  const { t, resources } = await initTranslations(locale, [
    "common",
    "sidebar",
  ]);

  return (
    <>
      <TranslationsProvider
        namespaces={["sidebar","common"]}
        locale={locale}
        resources={resources}
      >
        <div className="md:grid md:grid-cols-12 ">
          <div className="md:col-span-10">
            <SecNavbar/>
          </div>
          <div className="md:col-span-2 md:ms-auto">
            <SideAndNavBar />
          </div>
        </div>
      </TranslationsProvider>
    </>
  );
}
