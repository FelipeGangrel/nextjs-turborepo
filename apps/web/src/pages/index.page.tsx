import { Button } from "@acme/ui";

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
    </div>
  );
}
