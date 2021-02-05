import * as React from "react";
import Link from "next/link";

// Forward Refs, is useful
export default React.forwardRef(({ to, children, ...props }, ref) => {
  return (
    <Link href={to}>
      <a {...props} ref={ref}>
        {children}
      </a>
    </Link>
  );
});
