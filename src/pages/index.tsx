import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import SocialList from "../components/SocialList";
import { withTheme } from 'styled-components';

function Index({ userId, variationName, theme }) {
  function generateNewUser() {
    localStorage.removeItem('vwo-userid');
    location.reload();
  }

  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Hi, We're Next.js & Netlify<span className="fancy">.</span>
          </h1>
          <span className="handle">@nextjs-netlify-blog</span>
          <h2>A blog template with Next.js and Netlify.</h2>
          <SocialList />

          <div style={{
            border: '1px solid #aaa',
            padding: '10px',
            marginTop: '35px',
            background: theme.vwoBoxBackground,
            borderRadius: '10px'
          }}>
            <p>A/B Testing Light(Control) and Dark(Variation-1) theme using VWO.</p>
            <p>
              User ID: <span className="tooltip-medium-text" data-balloon-length="medium" aria-label="Use userId as query-param for consistent bucketing. Eg: userId=a@b.com" data-balloon-pos="down-right" style={{color: '#007eff'}}>{userId}</span>
              <button style={{marginLeft: '10px'}} onClick={generateNewUser}>Generate New User</button>
            </p>
            <p>User got: {variationName} </p>
          </div>

        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #15847d;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}

export default withTheme(Index);
