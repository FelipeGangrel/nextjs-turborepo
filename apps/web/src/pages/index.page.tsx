import { Button, Dialog } from "@acme/ui";
import { useState } from "react";

type RowProps = {
  children: React.ReactNode;
};

const Row = ({ children }: RowProps) => (
  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1rem",
    }}
  >
    {children}
  </div>
);

export default function Web() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((s) => !s);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Stitches</h1>
      <Row>
        <Button variant="primary" size="lg">
          Primary
        </Button>
        <Button variant="primary" size="md">
          Primary
        </Button>
        <Button variant="primary" size="sm">
          Primary
        </Button>
      </Row>
      <Row>
        <Button variant="secondary" size="lg">
          Secondary
        </Button>
        <Button variant="secondary" size="md">
          Secondary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
      </Row>
      <Button onClick={toggleModal}>Open</Button>
      <Dialog
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        content={<div>content here</div>}
      />
    </div>
  );
}
