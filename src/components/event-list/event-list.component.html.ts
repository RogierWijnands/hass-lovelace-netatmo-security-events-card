// Packages
import { html, TemplateResult } from 'lit';

const authConfig = {
  redirect_uri: 'https://rodegier.duckdns.org:8123/lovelace/beveiliging',
  grant_type: 'authorization_code',
  client_id: '617e729f6e58673b430f840a',
  client_secret: 'JQoJusini2gErewN4YSjbjrLJw8FnwVsOik9DaUXQ',
  state: '901hd893uhu2e19dh9d21982d98h',
  scope: ['read_camera', 'access_camera', 'access_presence'],
};

export function EventListComponentTemplate(): TemplateResult {
  return html`
    <ha-card header="Example-card">
      <div class="card-content">
        <a
          href="https://api.netatmo.com//oauth2/authorize?client_id=${encodeURIComponent(
            authConfig.client_id
          )}&redirect_uri=${encodeURIComponent(
            authConfig.redirect_uri
          )}&state=${encodeURIComponent(
            authConfig.state
          )}&scope=${encodeURIComponent(authConfig.scope.join(' '))}"
          >Login</a
        >
      </div>
    </ha-card>
  `;
}
