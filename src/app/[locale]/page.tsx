import Content from "../_components/Content/Content";
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
    "content"
  ]);

  return (
    <>
      <TranslationsProvider
        namespaces={["sidebar","common","content"]}
        locale={locale}
        resources={resources}
      >
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-10">
            <SecNavbar/>
            <Content/>
          </div>
          <div className="col-span-12 md:col-span-2 md:ms-auto md:static">
            <SideAndNavBar />
          </div>
        </div>
      </TranslationsProvider>
    </>
  );
}
