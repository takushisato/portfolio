import Layout from "../layout/Layout";
import TitleComponent from "../components/title/TitleComponent";
import MyHistoryComponent from "../components/my-history/MyHistoryComponent";
import ProfileComponent from "../components/profile/ProfileComponent";
import SkillComponent from "../components/skill/SkillComponent";
import SiteHistoryComponent from "../components/site-history/SiteHistoryComponent";
import PersonalDevComponent from "../components/personal-dev/PersonalDevComponent";

function TopPage() {
  return (
    <Layout>
      <TitleComponent />
      <ProfileComponent />
      <MyHistoryComponent />
      <SkillComponent />
      <PersonalDevComponent />
      <SiteHistoryComponent />
    </Layout>
  );
}

export default TopPage;