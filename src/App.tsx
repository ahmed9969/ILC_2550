import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Conclusion from './pages/Conclusion';
import Blog from './pages/Blog';
import References from './pages/References';
import NotFound from './pages/NotFound';

// Team
import TeamOverview from './pages/team/TeamOverview';
import MemberPage from './pages/team/MemberPage';

// Research
import ResearchHub from './pages/research/ResearchHub';
import TopicIntroduction from './pages/research/TopicIntroduction';
import HistoricalDevelopment from './pages/research/HistoricalDevelopment';
import SocioculturalContext from './pages/research/SocioculturalContext';
import GlobalReception from './pages/research/GlobalReception';
import IdentifyingGap from './pages/research/IdentifyingGap';
import Positioning from './pages/research/Positioning';
import PublicEngagement from './pages/research/PublicEngagement';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* Team */}
          <Route path="team" element={<TeamOverview />} />
          <Route path="team/:id" element={<MemberPage />} />

          {/* Research */}
          <Route path="research" element={<ResearchHub />} />
          <Route path="research/topic-introduction" element={<TopicIntroduction />} />
          <Route path="research/historical-development" element={<HistoricalDevelopment />} />
          <Route path="research/sociocultural-context" element={<SocioculturalContext />} />
          <Route path="research/global-reception" element={<GlobalReception />} />
          <Route path="research/identifying-the-gap" element={<IdentifyingGap />} />
          <Route path="research/positioning" element={<Positioning />} />
          <Route path="research/public-engagement" element={<PublicEngagement />} />

          {/* Other pages */}
          <Route path="gallery" element={<Gallery />} />
          <Route path="conclusion" element={<Conclusion />} />
          <Route path="blog" element={<Blog />} />
          <Route path="references" element={<References />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
