"use client";

import { Button } from "react-bootstrap";

type Props = { error: Error; reset: () => void };

export default function Error({ reset }: Props) {
  return (
    <div>
      <h1>Error</h1>
      <p>Something went wrong</p>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
