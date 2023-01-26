import React from 'react';
import { Card } from 'semantic-ui-react';
import factory from '../ethereum/factory';

function CampaignIndex({ campaigns }) {
  console.log(campaigns);

  function renderCampaigns() {
    const items = campaigns.map((address) => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true,
      };
    });

    return items;
  }

  return (
    <div>
      <h3>Open Campaigns</h3>
      <Card.Group items={renderCampaigns()} />
    </div>
  );
}

CampaignIndex.getInitialProps = async () => {
  const campaigns = await factory.methods.getDeployedCampaigns().call();
  return { campaigns };
};

export default CampaignIndex;
