// Wrapper til page-sections med mulighed for custom className
export const PageSection = ({ className, children }) => (
  <section className={className}>{children}</section>
);
