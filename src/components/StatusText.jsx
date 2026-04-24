// Komponent til statusbeskeder (loading/error)
export const StatusText = ({
  loading,
  error,
  loadingText = "Henter priser...",
  errorText = "Kunne ikke hente data.",
}) => {
  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "0.75rem" }}>{loadingText}</p>
    );
  if (error)
    return (
      <p style={{ textAlign: "center", marginTop: "0.75rem" }}>{errorText}</p>
    );
  return null;
};
