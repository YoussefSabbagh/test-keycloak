import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

export default function Resources() {
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    /**
     * KeycloakConfig configures the connection to the Keycloak server.
    const keycloakConfig: KeycloakConfig = {
      realm: 'certification',
      clientId: 'bookstore-client',
      url: 'https://auth.gyfted.io',
    };
    */

    const keycloak = Keycloak({
      realm: 'certification',
      url: 'https://auth.gyfted.io',
      clientId: 'bookstore-client',
    });
    keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
      setKeycloak(keycloak);
      setAuthenticated(authenticated);
    });
  }, []);

  if (keycloak) {
    if (authenticated)
      return (
        <div className="my-12 grid place-items-center">
          <p> You are logged in.</p>
          <div>
            <img src="https://random.imagecdn.app/500/250" />
          </div>
        </div>
      );
    else return <div className="my-12">Unable to initiate auth!</div>;
  }

  return (
    <>
      <div className="my-12">Keycloak initializing in a moment...</div>
    </>
  );
}
