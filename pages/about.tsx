import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Trans } from "react-i18next";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="m-4">
        <ul className="list-decimal">
          <li className="mb-4">
            <p className="font-bold">{t("about.introduction.title")}</p>
            <p>{t("about.introduction.answer")}</p>
            <Trans i18nKey="about.introduction.visit_my_blog" parent="p">
              Please visit{" "}
              <a
                href="https://jlprofile.home.blog/"
                aria-label="My Blog"
                target="_blank"
                rel="noreferrer"
                className="text-dark-primary/75 dark:text-primary/75 hover:text-dark-primary dark:hover:text-primary visited:text-dark-primary dark:visited:text-primary"
              >
                https://jlprofile.home.blog/
              </a>{" "}
              for more visualisation details for the projects that I have done.
            </Trans>
          </li>
          <li className="mb-4">
            <p className="font-bold">{t("about.objective.title")}</p>
            <p>{t("about.objective.answer")}</p>
          </li>
          <li className="mb-4">
            <p className="font-bold">{t("about.how_it_built.title")}</p>
            <div>
              <p>{t("about.how_it_built.answer")}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
