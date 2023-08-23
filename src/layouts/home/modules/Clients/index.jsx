import React, { useState } from "react";
import { portfolioData } from "../../../../data";
import { Container, ClientContainer, DescriptionModal } from "./styled";

function Clients() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);

  const handleClientClick = (client) => {
    setSelectedClient(client);
    setModalOpen(true);
  };

  return (
    <Container>
      {portfolioData.clients.map((client) => (
        <ClientContainer
          key={client.id}
          onClick={() => handleClientClick(client)}
        >
          <img src={client.logo} alt={client.name} />
        </ClientContainer>
      ))}

      {isModalOpen && selectedClient && (
        <DescriptionModal>
          <h2>{selectedClient.name}</h2>
          <p>{selectedClient.description}</p>
          <a
            href={selectedClient.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to Website
          </a>
          <button onClick={() => setModalOpen(false)}>Close</button>
        </DescriptionModal>
      )}
    </Container>
  );
}

export default Clients;
