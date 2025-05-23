import "./Form.css";

export const Form = ({ handleSubmit, preValue, setPreValue, className }) => {
  return (
    <form onSubmit={handleSubmit} className={className}>
      <input
        type="text"
        value={preValue}
        onChange={(e) => setPreValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
