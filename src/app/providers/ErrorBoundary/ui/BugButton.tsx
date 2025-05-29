import React, {FC, useEffect, useState} from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { Button } from "shared/ui/Button/Button";


// Component for test
export const BugButton: FC = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error])

  const onThrow = () => setError(true);
  return <Button 
    onClick={onThrow}
  >
    throw error
  </Button>
}