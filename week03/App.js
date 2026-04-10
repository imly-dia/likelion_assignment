//  src/App.js

import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
      <ProfileCard
        name="조윤아"
        age={22}
        dream="낭만있게 살기"
        hobby="유튜브 보면서 뒹굴거리기"
        mbti="ENFJ"
        emoji="🧑‍💻"
      />
    </div>
  );
}

export default App;
