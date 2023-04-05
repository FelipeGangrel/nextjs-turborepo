import { Button, ButtonProps } from "@acme/ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Button variant="primary" disabled>
          I'm a button
        </Button>
        <Button variant="primary">I'm a button</Button>
        <Button variant="primary">I'm a button</Button>
      </div>
    </div>
  );
}
